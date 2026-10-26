import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Kind = "Product" | "Pricing" | "Docs" | "Guides" | "Company";

const SECTIONS: Kind[] = ["Product", "Pricing", "Docs", "Guides", "Company"];

const PAGES: Record<string, { kind: Kind; title: string; line: string }> = {
	"/": {
		kind: "Product",
		title: "Fernly home",
		line: "Payroll, tax filing and benefits deductions for US companies with 5 to 50 employees.",
	},
	"/features/payroll": {
		kind: "Product",
		title: "Payroll",
		line: "Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs.",
	},
	"/features/benefits": {
		kind: "Product",
		title: "Benefits administration",
		line: "Health, dental, vision and 401(k), with enrollments turned into payroll deductions automatically.",
	},
	"/features/compliance": {
		kind: "Product",
		title: "Payroll tax compliance",
		line: "State registrations, quarterly and annual payroll returns, and new-hire reporting in all 50 states.",
	},
	"/pricing": {
		kind: "Pricing",
		title: "Pricing",
		line: "Plans, per-person prices and what each plan includes.",
	},
	"/blog": {
		kind: "Guides",
		title: "Blog",
		line: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	"/about": {
		kind: "Company",
		title: "About",
		line: "Who we are: started in Portland, Oregon in 2021 by people who ran payroll at small companies.",
	},
	"/contact": {
		kind: "Company",
		title: "Contact",
		line: "Talk to the team or book a demo.",
	},
	"/events/techcrunch-disrupt-2027": {
		kind: "Company",
		title: "Fernly at TechCrunch Disrupt 2027",
		line: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
};

function describe(path: string): { kind: Kind; title: string; line: string } | undefined {
	if (PAGES[path]) return PAGES[path];
	const post = POSTS.find((p) => path === `/blog/${p.slug}`);
	if (post) return { kind: "Guides", title: post.title, line: post.summary };
	return undefined;
}

export function GET() {
	const groups = new Map<Kind, string[]>(SECTIONS.map((kind) => [kind, []]));

	for (const { url } of sitemap()) {
		const path = url.slice(BASE.length) || "/";
		const page = describe(path);
		if (!page) continue;
		groups.get(page.kind)!.push(`- [${page.title}](${url === BASE ? `${BASE}/` : url}): ${page.line}`);
	}

	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. Every account gets a named payroll specialist based in Portland, Oregon, and switching takes one afternoon: we import year-to-date totals and run a parallel payroll with you before your first real one.",
	];

	for (const kind of SECTIONS) {
		const items = groups.get(kind)!;
		if (items.length === 0) continue;
		lines.push("", `## ${kind}`, "", ...items);
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
