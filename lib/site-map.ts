export const BASE_URL = "https://payfernly.com";

export type PageKind = "home" | "product" | "pricing" | "docs" | "guides" | "company" | "event";

export type SitePage = {
	path: string;
	kind: PageKind;
	title: string;
	description: string;
};

export const PAGES: SitePage[] = [
	{
		path: "/",
		kind: "home",
		title: "Fernly — Payroll for teams of 5 to 50",
		description:
			"Fernly runs payroll, files your federal and state taxes, and handles benefits deductions for US companies with 5 to 50 employees.",
	},
	{
		path: "/pricing",
		kind: "pricing",
		title: "Pricing",
		description:
			"Simple per-person pricing for payroll. Essentials is $40 a month plus $8 per person; Plus adds next-day direct deposit, benefits administration and multi-state support.",
	},
	{
		path: "/features/payroll",
		kind: "product",
		title: "Payroll",
		description:
			"Run payroll in three steps: review hours, preview taxes, approve. Direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	},
	{
		path: "/features/benefits",
		kind: "product",
		title: "Benefits administration",
		description:
			"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
	},
	{
		path: "/features/compliance",
		kind: "product",
		title: "Payroll tax compliance",
		description:
			"State tax registrations, quarterly and annual payroll returns, and new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
	},
	{
		path: "/about",
		kind: "company",
		title: "About",
		description:
			"Fernly was started in Portland, Oregon in 2021 by two people who ran payroll at small companies.",
	},
	{
		path: "/blog",
		kind: "guides",
		title: "Blog",
		description:
			"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
	},
	{
		path: "/contact",
		kind: "company",
		title: "Contact",
		description: "Talk to the Fernly team or book a 20-minute demo priced for your exact headcount.",
	},
	{
		path: "/events/techcrunch-disrupt-2027",
		kind: "event",
		title: "Fernly at TechCrunch Disrupt 2027",
		description: "Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
	},
];

export function absoluteUrl(path: string): string {
	return `${BASE_URL}${path === "/" ? "" : path}`;
}
