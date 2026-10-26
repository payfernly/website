import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Kind = "Product" | "Pricing" | "Docs" | "Guides" | "Company";

const SECTIONS: Kind[] = ["Product", "Pricing", "Docs", "Guides", "Company"];

const SUMMARY =
	"Fernly runs payroll, files federal, state and local payroll taxes, and handles benefits deductions for US companies with 5 to 50 employees. Every account gets a named payroll specialist in Portland, Oregon, pricing is a flat monthly base plus a flat price per person with unlimited pay runs and no setup fee, and W-2s and 1099-NECs are included on every plan.";

const PAGES: Record<string, { kind: Kind; title: string; description: string }> = {
	"/": {
		kind: "Product",
		title: "Fernly home",
		description: "Overview of Fernly: payroll, tax filing and benefits deductions for teams of 5 to 50.",
	},
	"/features/payroll": {
		kind: "Product",
		title: "Payroll",
		description:
			"Run payroll in three steps; direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	},
	"/features/benefits": {
		kind: "Product",
		title: "Benefits administration",
		description:
			"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
	},
	"/features/compliance": {
		kind: "Product",
		title: "Payroll tax compliance",
		description:
			"State tax registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
	},
	"/pricing": {
		kind: "Pricing",
		title: "Pricing",
		description: "Essentials, Plus and Premium plans: a flat monthly base plus a flat price per person.",
	},
	"/blog": {
		kind: "Guides",
		title: "Blog",
		description: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	"/about": {
		kind: "Company",
		title: "About",
		description: "Who started Fernly in Portland, Oregon in 2021, and why.",
	},
	"/contact": {
		kind: "Company",
		title: "Contact",
		description: "Talk to the team or book a 20-minute demo.",
	},
};

function describe(path: string) {
	const page = PAGES[path];
	if (page) return page;
	const post = POSTS.find((p) => `/blog/${p.slug}` === path);
	if (post) return { kind: "Guides" as Kind, title: post.title, description: post.summary };
	return undefined;
}

export function GET() {
	const groups = new Map<Kind, string[]>();
	for (const entry of sitemap()) {
		const path = entry.url.slice(BASE.length) || "/";
		const page = describe(path);
		if (!page) continue;
		const lines = groups.get(page.kind) ?? [];
		lines.push(`- [${page.title}](${entry.url === BASE ? `${BASE}/` : entry.url}): ${page.description}`);
		groups.set(page.kind, lines);
	}

	const sections = SECTIONS.filter((kind) => groups.has(kind)).map(
		(kind) => `## ${kind}\n\n${groups.get(kind)!.join("\n")}`,
	);

	const body = ["# Fernly", `> ${SUMMARY}`, ...sections].join("\n\n") + "\n";

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
