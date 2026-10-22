import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Kind = "Product" | "Pricing" | "Guides" | "Company";

const PAGE_INFO: Record<string, { kind: Kind; title: string; summary: string }> = {
	"/": {
		kind: "Product",
		title: "Fernly — Payroll for teams of 5 to 50",
		summary: "Overview of Fernly: payroll, tax filing and benefits deductions for small US teams.",
	},
	"/features/payroll": {
		kind: "Product",
		title: "Payroll",
		summary:
			"Run payroll in three steps: review hours, preview taxes, approve; direct deposit, garnishments, bonuses and off-cycle runs.",
	},
	"/features/benefits": {
		kind: "Product",
		title: "Benefits",
		summary:
			"Offer health, dental, vision and 401(k); enrollments turn into payroll deductions automatically and carriers stay updated.",
	},
	"/features/compliance": {
		kind: "Product",
		title: "Compliance",
		summary:
			"State tax registrations, quarterly and annual payroll returns, new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
	},
	"/pricing": {
		kind: "Pricing",
		title: "Pricing",
		summary: "Essentials, Plus and Premium plans: a monthly base plus a flat price per person.",
	},
	"/blog": {
		kind: "Guides",
		title: "Blog",
		summary: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	"/about": {
		kind: "Company",
		title: "About",
		summary: "Who Fernly is: founded in Portland, Oregon in 2021 by people who ran payroll at small companies.",
	},
	"/contact": {
		kind: "Company",
		title: "Contact",
		summary: "Book a 20-minute demo or reach sales and customer support.",
	},
	"/events/techcrunch-disrupt-2027": {
		kind: "Company",
		title: "Fernly at TechCrunch Disrupt 2027",
		summary: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
};

const SECTIONS: Kind[] = ["Product", "Pricing", "Guides", "Company"];

function describe(url: string): { kind: Kind; title: string; summary: string } | null {
	const path = url.slice(BASE.length) || "/";
	if (PAGE_INFO[path]) return PAGE_INFO[path];
	const post = POSTS.find((p) => path === `/blog/${p.slug}`);
	if (post) return { kind: "Guides", title: post.title, summary: post.summary };
	return null;
}

export function GET() {
	const groups = new Map<Kind, string[]>(SECTIONS.map((kind) => [kind, []]));

	for (const entry of sitemap()) {
		const info = describe(entry.url);
		if (!info) continue;
		groups.get(info.kind)!.push(`- [${info.title}](${entry.url}): ${info.summary}`);
	}

	const body = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal and state payroll taxes, and handles benefits deductions for US companies with 5 to 50 employees. Every account gets a named payroll specialist based in Portland, Oregon, and plans are priced as a monthly base plus a flat price per person, with unlimited pay runs and no setup fee.",
		"",
		...SECTIONS.flatMap((kind) => {
			const lines = groups.get(kind)!;
			return lines.length ? [`## ${kind}`, "", ...lines, ""] : [];
		}),
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
