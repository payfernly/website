import { POSTS } from "@/lib/posts";
import { PAGES, absoluteUrl, type PageKind } from "@/lib/site-map";

export const dynamic = "force-static";

const SECTIONS: { kind: PageKind; heading: string }[] = [
	{ kind: "product", heading: "Product" },
	{ kind: "pricing", heading: "Pricing" },
	{ kind: "docs", heading: "Docs" },
	{ kind: "guides", heading: "Guides" },
	{ kind: "company", heading: "Company" },
];

type Link = { title: string; url: string; summary: string };

function linksFor(kind: PageKind): Link[] {
	const links: Link[] = PAGES.filter((page) => page.kind === kind).map((page) => ({
		title: page.title,
		url: absoluteUrl(page.path),
		summary: page.summary,
	}));
	if (kind === "guides") {
		links.push(
			...POSTS.map((post) => ({
				title: post.title,
				url: absoluteUrl(`/blog/${post.slug}`),
				summary: post.summary,
			})),
		);
	}
	return links;
}

export function GET() {
	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. It was started in Portland, Oregon in 2021, and every account gets a named payroll specialist.",
		"",
		`Website: ${absoluteUrl("/")}`,
	];

	for (const { kind, heading } of SECTIONS) {
		const links = linksFor(kind);
		if (links.length === 0) continue;
		lines.push("", `## ${heading}`, "");
		for (const link of links) {
			lines.push(`- [${link.title}](${link.url}): ${link.summary}`);
		}
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
