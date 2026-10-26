import { POSTS } from "@/lib/posts";
import { BASE_URL, SITE_PAGES, pageUrl, type PageKind } from "@/lib/site-map";

export const dynamic = "force-static";

const DESCRIPTION =
	"Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. Every account gets a named payroll specialist based in Portland, Oregon, where Fernly was started in 2021. Unlimited pay runs and no setup fee.";

const SECTIONS: { heading: string; kinds: PageKind[] }[] = [
	{ heading: "Product", kinds: ["home", "product"] },
	{ heading: "Pricing", kinds: ["pricing"] },
	{ heading: "Guides", kinds: ["guides"] },
	{ heading: "Company", kinds: ["company"] },
];

function link(title: string, url: string, summary: string): string {
	return `- [${title}](${url}): ${summary}`;
}

export function GET() {
	const lines = ["# Fernly", "", `> ${DESCRIPTION}`, ""];

	for (const section of SECTIONS) {
		const items = SITE_PAGES.filter((page) => section.kinds.includes(page.kind)).map((page) =>
			link(page.title, pageUrl(page.path), page.summary),
		);
		if (section.kinds.includes("guides")) {
			items.push(...POSTS.map((post) => link(post.title, `${BASE_URL}/blog/${post.slug}`, post.summary)));
		}
		if (items.length === 0) continue;
		lines.push(`## ${section.heading}`, "", ...items, "");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
