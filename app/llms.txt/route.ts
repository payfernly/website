import { POSTS } from "@/lib/posts";
import { SITE_PAGES, absoluteUrl, type PageKind } from "@/lib/site";

export const dynamic = "force-static";

const SECTIONS: { heading: string; kinds: PageKind[] }[] = [
	{ heading: "Product", kinds: ["home", "product"] },
	{ heading: "Pricing", kinds: ["pricing"] },
	{ heading: "Guides", kinds: ["guides"] },
	{ heading: "Company", kinds: ["company"] },
	{ heading: "Optional", kinds: ["event"] },
];

function link(title: string, path: string, summary: string): string {
	return `- [${title}](${absoluteUrl(path)}): ${summary}`;
}

export function GET() {
	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. Every account gets a named payroll specialist based in Portland, Oregon, and switching from another provider includes a year-to-date import and a parallel payroll run.",
		"",
	];

	for (const section of SECTIONS) {
		const entries = SITE_PAGES.filter((page) => section.kinds.includes(page.kind)).map((page) =>
			link(page.title, page.path, page.summary),
		);
		if (section.heading === "Guides") {
			entries.push(...POSTS.map((post) => link(post.title, `/blog/${post.slug}`, post.summary)));
		}
		if (entries.length === 0) continue;
		lines.push(`## ${section.heading}`, "", ...entries, "");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
