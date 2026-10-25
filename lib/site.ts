import { COMPETITORS } from "@/lib/competitors";

export const BASE_URL = "https://payfernly.com";

export type PageKind = "home" | "product" | "pricing" | "guides" | "company";

export type SitePage = {
	path: string;
	kind: PageKind;
	title: string;
	summary: string;
};

export const SITE_PAGES: SitePage[] = [
	{
		path: "/",
		kind: "home",
		title: "Fernly",
		summary: "Payroll, tax filing and benefits for US teams of 5 to 50.",
	},
	{
		path: "/pricing",
		kind: "pricing",
		title: "Pricing",
		summary: "Plans, per-person pricing and what each plan includes.",
	},
	{
		path: "/features/payroll",
		kind: "product",
		title: "Payroll",
		summary:
			"Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	},
	{
		path: "/features/benefits",
		kind: "product",
		title: "Benefits administration",
		summary:
			"Health, dental, vision and 401(k), with enrollments turned into payroll deductions automatically.",
	},
	{
		path: "/features/compliance",
		kind: "product",
		title: "Payroll tax compliance",
		summary:
			"State tax registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
	},
	{
		path: "/about",
		kind: "company",
		title: "About",
		summary: "Who we are and why we started Fernly in Portland, Oregon.",
	},
	{
		path: "/blog",
		kind: "guides",
		title: "Blog",
		summary: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	{
		path: "/contact",
		kind: "company",
		title: "Contact",
		summary: "Get in touch or book a demo.",
	},
	{
		path: "/events/techcrunch-disrupt-2027",
		kind: "company",
		title: "Fernly at TechCrunch Disrupt 2027",
		summary: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
	...COMPETITORS.map((competitor) => ({
		path: `/competitors/${competitor.slug}`,
		kind: "product" as const,
		title: `Fernly vs. ${competitor.name}`,
		summary: competitor.summary,
	})),
];
