import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export type GlossaryTerm = {
	slug: string;
	title: string;
	description: string;
	body: string;
};

const DIR = join(process.cwd(), "glossary");

function parse(slug: string, source: string): GlossaryTerm {
	const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) throw new Error(`Glossary term ${slug} is missing front matter`);
	const fields: Record<string, string> = {};
	for (const line of match[1].split("\n")) {
		const i = line.indexOf(":");
		if (i > 0) fields[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
	}
	if (!fields.title || !fields.description) {
		throw new Error(`Glossary term ${slug} needs a title and description`);
	}
	return { slug, title: fields.title, description: fields.description, body: match[2].trim() };
}

export function getTerms(): GlossaryTerm[] {
	return readdirSync(DIR)
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const slug = file.replace(/\.md$/, "");
			return parse(slug, readFileSync(join(DIR, file), "utf8"));
		})
		.sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
}

export function getTerm(slug: string): GlossaryTerm | undefined {
	return getTerms().find((term) => term.slug === slug);
}
