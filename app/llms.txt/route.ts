import { POSTS } from "@/lib/posts";
import { PAGES, absoluteUrl, type PageKind, type SitePage } from "@/lib/site-map";

export const dynamic = "force-static";

const SECTIONS: { heading: string; kind: PageKind }[] = [
	{ heading: "Product", kind: "product" },
	{ heading: "Pricing", kind: "pricing" },
	{ heading: "Guides", kind: "guides" },
	{ heading: "Company", kind: "company" },
	{ heading: "Optional", kind: "event" },
];

const ENTRIES: SitePage[] = [
	...PAGES,
	...POSTS.map((post) => ({
		path: `/blog/${post.slug}`,
		kind: "guides" as const,
		title: post.title,
		summary: post.summary,
	})),
];

export function GET() {
	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal and state payroll taxes, and handles benefits deductions for US companies with 5 to 50 employees. Every account gets a named payroll specialist in Portland, Oregon; pricing is a flat monthly base plus a flat price per person, with unlimited pay runs and no setup fee.",
		"",
	];

	for (const { heading, kind } of SECTIONS) {
		const entries = ENTRIES.filter((entry) => entry.kind === kind);
		if (entries.length === 0) continue;
		lines.push(
			`## ${heading}`,
			"",
			...entries.map((entry) => `- [${entry.title}](${absoluteUrl(entry.path)}): ${entry.summary}`),
			"",
		);
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
