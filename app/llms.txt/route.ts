import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

const SUMMARY =
	"Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. It includes unlimited pay runs, direct deposit, year-end W-2s and 1099-NECs, and a named payroll specialist on every account. Fernly was started in Portland, Oregon in 2021.";

const DESCRIPTIONS: Record<string, string> = {
	"/pricing": "Plans, per-person prices and what each plan includes.",
	"/features/payroll":
		"Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	"/features/benefits":
		"Health, dental, vision and 401(k) benefits, with enrollments turned into payroll deductions automatically.",
	"/features/compliance":
		"State tax registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
	"/blog": "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	"/about": "Who we are and why we started Fernly.",
	"/contact": "Talk to the team or book a 20-minute demo.",
};

type Section = "Product" | "Pricing" | "Docs" | "Guides" | "Company";

const SECTIONS: Section[] = ["Product", "Pricing", "Docs", "Guides", "Company"];

function sectionFor(path: string): Section | null {
	if (path.startsWith("/features/")) return "Product";
	if (path === "/pricing") return "Pricing";
	if (path.startsWith("/docs")) return "Docs";
	if (path === "/blog" || path.startsWith("/blog/")) return "Guides";
	if (path === "/about" || path === "/contact") return "Company";
	return null;
}

function titleFor(path: string): string {
	const post = POSTS.find((p) => `/blog/${p.slug}` === path);
	if (post) return post.title;
	if (path === "/blog") return "Blog";
	const last = path.split("/").filter(Boolean).pop() ?? "";
	return last.charAt(0).toUpperCase() + last.slice(1).replace(/-/g, " ");
}

function descriptionFor(path: string): string | undefined {
	const post = POSTS.find((p) => `/blog/${p.slug}` === path);
	return post?.summary ?? DESCRIPTIONS[path];
}

export function GET() {
	const groups = new Map<Section, string[]>();

	for (const entry of sitemap()) {
		const path = entry.url.slice(BASE.length) || "/";
		const section = sectionFor(path);
		if (!section) continue;
		const description = descriptionFor(path);
		const line = `- [${titleFor(path)}](${entry.url})${description ? `: ${description}` : ""}`;
		groups.set(section, [...(groups.get(section) ?? []), line]);
	}

	const body = [
		"# Fernly",
		"",
		`> ${SUMMARY}`,
		...SECTIONS.flatMap((section) => {
			const lines = groups.get(section);
			return lines ? ["", `## ${section}`, "", ...lines] : [];
		}),
		"",
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
