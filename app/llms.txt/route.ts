import { POSTS } from "@/lib/posts";
import { PAGES, absoluteUrl, type PageKind, type SitePage } from "@/lib/site-map";

export const dynamic = "force-static";

const SUMMARY =
	"Fernly runs payroll, benefits and tax filing for US companies with 5 to 50 employees. It pays employees and 1099 contractors with unlimited pay runs, calculates, pays and files federal, state and local payroll taxes (including Form 941 and W-2s), and keeps health, dental, vision, 401(k) and FSA deductions in sync with payroll. Every account gets a named payroll specialist based in Portland, Oregon, where Fernly was founded in 2021.";

const SECTIONS: { heading: string; kinds: PageKind[] }[] = [
	{ heading: "Product", kinds: ["home", "product"] },
	{ heading: "Pricing", kinds: ["pricing"] },
	{ heading: "Docs", kinds: ["docs"] },
	{ heading: "Guides", kinds: ["guides"] },
	{ heading: "Company", kinds: ["company"] },
];

function link(page: Pick<SitePage, "path" | "title" | "description">): string {
	return `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`;
}

export function GET() {
	const lines = ["# Fernly", "", `> ${SUMMARY}`];

	for (const section of SECTIONS) {
		const entries = PAGES.filter((page) => section.kinds.includes(page.kind)).map(link);
		if (section.heading === "Guides") {
			entries.push(
				...POSTS.map((post) =>
					link({ path: `/blog/${post.slug}`, title: post.title, description: post.summary }),
				),
			);
		}
		if (entries.length === 0) continue;
		lines.push("", `## ${section.heading}`, "", ...entries);
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
