import type { Metadata } from "next";
import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Kind = "product" | "pricing" | "docs" | "guide" | "company" | "optional" | "skip";

const SECTIONS: { kind: Kind; heading: string }[] = [
	{ kind: "product", heading: "Product" },
	{ kind: "pricing", heading: "Pricing" },
	{ kind: "docs", heading: "Docs" },
	{ kind: "guide", heading: "Guides" },
	{ kind: "company", heading: "Company" },
	{ kind: "optional", heading: "Optional" },
];

const PAGES: Record<string, { title: string; description: string }> = {
	"/features/payroll": {
		title: "Payroll",
		description:
			"Run payroll in three steps: review hours, preview taxes, approve. Direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	},
	"/features/benefits": {
		title: "Benefits administration",
		description:
			"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
	},
	"/features/compliance": {
		title: "Payroll tax compliance",
		description:
			"State tax registrations, quarterly and annual payroll returns, new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
	},
	"/pricing": {
		title: "Pricing",
		description:
			"A monthly base plus a flat price per person, with no setup fee, no charge per pay run and no year-end fee.",
	},
	"/blog": {
		title: "Blog",
		description:
			"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	"/about": {
		title: "About",
		description:
			"Who we are: started in Portland, Oregon in 2021 by people who ran payroll at small companies.",
	},
	"/contact": {
		title: "Contact",
		description: "Book a 20-minute demo or reach the team; we reply within one business day.",
	},
	"/events/techcrunch-disrupt-2027": {
		title: "Fernly at TechCrunch Disrupt 2027",
		description: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
};

function kindOf(path: string): Kind {
	if (path === "/") return "skip";
	if (path.startsWith("/features/")) return "product";
	if (path === "/pricing") return "pricing";
	if (path.startsWith("/docs")) return "docs";
	if (path.startsWith("/blog/")) return "guide";
	if (path.startsWith("/events/")) return "optional";
	return "company";
}

function titleText(title: Metadata["title"]): string | undefined {
	if (!title) return undefined;
	if (typeof title === "string") return title;
	if ("absolute" in title && title.absolute) return title.absolute;
	if ("default" in title && title.default) return title.default;
	return undefined;
}

async function pageMetadata(path: string): Promise<Metadata | undefined> {
	try {
		const mod: { metadata?: Metadata } = await import(`../${path.slice(1)}/page`);
		return mod.metadata;
	} catch {
		return undefined;
	}
}

function titleFromPath(path: string): string {
	const slug = path.split("/").filter(Boolean).pop() ?? "";
	const words = slug.replace(/-/g, " ");
	return words.charAt(0).toUpperCase() + words.slice(1);
}

async function describe(path: string): Promise<{ title: string; description?: string }> {
	if (PAGES[path]) return PAGES[path];
	const post = POSTS.find((p) => `/blog/${p.slug}` === path);
	if (post) return { title: post.title, description: post.summary };
	const metadata = await pageMetadata(path);
	return {
		title: titleText(metadata?.title) ?? titleFromPath(path),
		description: metadata?.description ?? undefined,
	};
}

export async function GET() {
	const groups = new Map<Kind, string[]>();

	for (const entry of sitemap()) {
		const path = entry.url.slice(BASE.length) || "/";
		const kind = kindOf(path);
		if (kind === "skip") continue;
		const page = await describe(path);
		const lines = groups.get(kind) ?? [];
		lines.push(`- [${page.title}](${entry.url})${page.description ? `: ${page.description}` : ""}`);
		groups.set(kind, lines);
	}

	const body = [
		"# Fernly",
		"",
		"> Payroll, benefits and tax filings for US teams of 5 to 50.",
		"",
		"Fernly is payroll software for US companies with 5 to 50 employees, based in Portland, Oregon. It pays employees and 1099 contractors, calculates, pays and files federal, state and local payroll taxes, and keeps health, dental, vision, 401(k) and FSA deductions in sync with payroll. Every account gets a named payroll specialist, and there is no setup fee and no charge per pay run.",
		...SECTIONS.flatMap(({ kind, heading }) => {
			const lines = groups.get(kind);
			return lines ? ["", `## ${heading}`, "", ...lines] : [];
		}),
		"",
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
