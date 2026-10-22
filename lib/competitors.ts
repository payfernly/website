export type ComparisonRow = {
	label: string;
	fernly: string;
	competitor: string;
};

export type Competitor = {
	slug: string;
	name: string;
	summary: string;
	intro: string;
	competitorRows: Record<RowKey, string>;
	bottomLine: string;
};

type RowKey = "pricing" | "support" | "benefits" | "multiState" | "setup" | "yearEnd";

const ROWS: { key: RowKey; label: string; fernly: string }[] = [
	{
		key: "pricing",
		label: "Pricing model",
		fernly:
			"A flat monthly base plus a flat price per person, published on our pricing page. No charge per pay run.",
	},
	{
		key: "support",
		label: "Human support",
		fernly:
			"A named payroll specialist in Portland, Oregon, on every account. Call them directly on Plus and Premium.",
	},
	{
		key: "benefits",
		label: "Payroll and benefits in one system",
		fernly:
			"Yes. We're a licensed benefits broker, and deductions flow from enrollment straight into payroll on Plus and Premium.",
	},
	{
		key: "multiState",
		label: "Multi-state compliance",
		fernly:
			"On Plus and Premium we handle new-state registrations, file state and local taxes, and flag gaps before payday.",
	},
	{
		key: "setup",
		label: "Setup costs",
		fernly: "None. We import year-to-date totals and run a parallel payroll with you for free.",
	},
	{
		key: "yearEnd",
		label: "Year-end filings included",
		fernly: "Yes. W-2s, 1099-NECs and annual returns are included on every plan, with no year-end fee.",
	},
];

export const COMPETITORS: Competitor[] = [
	{
		slug: "quickbooks-payroll",
		name: "QuickBooks Payroll",
		summary:
			"How Fernly compares with QuickBooks Payroll on pricing, human support, benefits, multi-state compliance and year-end filings for teams of 5 to 50.",
		intro:
			"Fernly is built for US teams of 5 to 50 who want payroll, taxes and benefits handled in one place, with a named payroll specialist they can call. QuickBooks Payroll is built for businesses that already run their books in QuickBooks and want payroll inside the same accounting product.",
		competitorRows: {
			pricing: "A monthly base plus a per-employee fee, with tiers that add features and support.",
			support:
				"Phone and chat support from a shared team; higher tiers add expert setup help and HR advice.",
			benefits:
				"Health and retirement benefits are offered through partner providers that connect to payroll.",
			multiState: "Supports paying employees and filing payroll taxes in multiple states.",
			setup: "No standard setup fee; guided setup help depends on the tier you choose.",
			yearEnd: "W-2s and 1099s are prepared and filed as part of the payroll plans.",
		},
		bottomLine:
			"If your accountant lives in QuickBooks and you mostly want payroll next to your ledger, QuickBooks Payroll is a reasonable choice. If you have 5 to 50 people, benefits to keep in sync and a team spreading across states, Fernly is the better fit: one system, one flat price, and a specialist who already knows your account when you call.",
	},
	{
		slug: "square-payroll",
		name: "Square Payroll",
		summary:
			"How Fernly compares with Square Payroll on pricing, human support, benefits, multi-state compliance and year-end filings for teams of 5 to 50.",
		intro:
			"Fernly is built for US teams of 5 to 50 who want payroll, taxes and benefits handled in one place, with a named payroll specialist they can call. Square Payroll is built for businesses already using Square for payments and point of sale, especially hourly teams that clock in on Square.",
		competitorRows: {
			pricing:
				"A monthly subscription plus a per-person fee, with a lower-cost option for contractor-only payroll.",
			support: "Phone and chat support from Square's shared support team during business hours.",
			benefits:
				"Health insurance and retirement plans are available through partner integrations.",
			multiState: "Supports paying employees and filing payroll taxes in multiple states.",
			setup: "No setup fee.",
			yearEnd: "W-2s and 1099s are prepared and filed as part of the subscription.",
		},
		bottomLine:
			"If you run a single location on Square and want payroll tied to your point of sale, Square Payroll is easy to start with. If you have 5 to 50 people, want benefits managed in the same system as payroll, and want a named specialist catching compliance gaps before payday, Fernly is the better fit.",
	},
];

export function getCompetitor(slug: string): Competitor | undefined {
	return COMPETITORS.find((c) => c.slug === slug);
}

export function comparisonRows(competitor: Competitor): ComparisonRow[] {
	return ROWS.map((row) => ({
		label: row.label,
		fernly: row.fernly,
		competitor: competitor.competitorRows[row.key],
	}));
}
