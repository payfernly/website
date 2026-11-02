import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Section = "Product" | "Pricing" | "Docs" | "Guides" | "Company";

const SECTIONS: Section[] = ["Product", "Pricing", "Docs", "Guides", "Company"];

const PAGES: Record<string, { title: string; section: Section; line: string }> = {
	"/": {
		title: "Home",
		section: "Product",
		line: "Overview of Fernly: payroll, tax filing and benefits deductions for US teams of 5 to 50.",
	},
	"/features/payroll": {
		title: "Payroll",
		section: "Product",
		line: "Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs.",
	},
	"/features/benefits": {
		title: "Benefits administration",
		section: "Product",
		line: "Health, dental, vision and 401(k) enrollments that turn into payroll deductions automatically.",
	},
	"/features/compliance": {
		title: "Payroll tax compliance",
		section: "Product",
		line: "State tax registrations and every quarterly and annual payroll return, filed in all 50 states.",
	},
	"/pricing": {
		title: "Pricing",
		section: "Pricing",
		line: "Plans and per-person prices: Essentials is $40 a month plus $8 per person.",
	},
	"/blog": {
		title: "Blog",
		section: "Guides",
		line: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	"/about": {
		title: "About",
		section: "Company",
		line: "Who Fernly is: founded in Portland, Oregon in 2021, and what the team believes.",
	},
	"/contact": {
		title: "Contact",
		section: "Company",
		line: "Book a 20-minute demo or reach sales and customer support.",
	},
};

function describe(path: string): { title: string; section: Section; line: string } | undefined {
	if (PAGES[path]) return PAGES[path];
	const post = POSTS.find((p) => path === `/blog/${p.slug}`);
	if (post) return { title: post.title, section: "Guides", line: post.summary };
	return undefined;
}

export function GET() {
	const entries = sitemap()
		.map((entry) => {
			const path = entry.url.replace(BASE, "") || "/";
			const info = describe(path);
			return info ? { ...info, url: entry.url === BASE ? `${BASE}/` : entry.url } : undefined;
		})
		.filter((e): e is NonNullable<typeof e> => Boolean(e));

	const lines = [
		"# Fernly",
		"",
		"> Fernly is payroll, benefits and tax filing for US companies with 5 to 50 employees. It pays your people, calculates, pays and files federal, state and local payroll taxes, and keeps benefits deductions in sync with enrollment. Every account gets a named payroll specialist based in Portland, Oregon. Unlimited pay runs, no setup fee.",
		"",
	];

	for (const section of SECTIONS) {
		const items = entries.filter((e) => e.section === section);
		if (items.length === 0) continue;
		lines.push(`## ${section}`, "");
		for (const item of items) lines.push(`- [${item.title}](${item.url}): ${item.line}`);
		lines.push("");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
