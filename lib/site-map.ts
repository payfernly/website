export const BASE_URL = "https://payfernly.com";

export type PageKind = "home" | "product" | "pricing" | "guides" | "company" | "event";

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
		summary: "Plans and per-person pricing for Essentials, Plus and Premium.",
	},
	{
		path: "/features/payroll",
		kind: "product",
		title: "Payroll",
		summary:
			"Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs.",
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
			"State tax registrations, quarterly and annual payroll returns, and new-hire reporting in all 50 states.",
	},
	{
		path: "/about",
		kind: "company",
		title: "About",
		summary: "Who we are: started in Portland, Oregon in 2021 by people who ran small-company payroll.",
	},
	{
		path: "/blog",
		kind: "guides",
		title: "Blog",
		summary: "Plain-English guides to payroll taxes, state registrations and small-company payroll.",
	},
	{
		path: "/contact",
		kind: "company",
		title: "Contact",
		summary: "Talk to the team or book a 20-minute demo priced for your headcount.",
	},
	{
		path: "/events/techcrunch-disrupt-2027",
		kind: "event",
		title: "Fernly at TechCrunch Disrupt 2027",
		summary: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
];

export function pageUrl(path: string): string {
	return `${BASE_URL}${path === "/" ? "" : path}`;
}
