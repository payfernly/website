export const BASE = "https://payfernly.com";

export type PageKind = "home" | "product" | "pricing" | "guides" | "company" | "event";

export type SitePage = {
	path: string;
	kind: PageKind;
	title: string;
	summary: string;
};

export const PAGES: SitePage[] = [
	{
		path: "/",
		kind: "home",
		title: "Fernly",
		summary: "Payroll, tax filing and benefits for US companies with 5 to 50 employees.",
	},
	{
		path: "/pricing",
		kind: "pricing",
		title: "Pricing",
		summary:
			"Simple per-person pricing: Essentials is $40 a month plus $8 per person; Plus adds next-day direct deposit, benefits administration and multi-state support.",
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
			"State registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
	},
	{
		path: "/about",
		kind: "company",
		title: "About",
		summary: "Who we are: started in Portland, Oregon in 2021 by two people who ran payroll at small companies.",
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
		summary: "Talk to the team or book a 20-minute demo priced for your exact headcount.",
	},
	{
		path: "/events/techcrunch-disrupt-2027",
		kind: "event",
		title: "Fernly at TechCrunch Disrupt 2027",
		summary: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
];

export function absoluteUrl(path: string): string {
	return `${BASE}${path === "/" ? "" : path}`;
}
