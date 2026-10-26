import { POSTS } from "@/lib/posts";
import { COMPETITORS } from "@/lib/competitors";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Link = { title: string; path: string; line: string };

const PRODUCT: Link[] = [
	{
		title: "Payroll",
		path: "/features/payroll",
		line: "Run payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
	},
	{
		title: "Benefits administration",
		path: "/features/benefits",
		line: "Health, dental, vision and 401(k), with enrollments turned into payroll deductions automatically.",
	},
	{
		title: "Payroll tax compliance",
		path: "/features/compliance",
		line: "State tax registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
	},
];

const PRICING: Link[] = [
	{
		title: "Pricing",
		path: "/pricing",
		line: "Plans and per-person prices: a flat monthly base plus a flat price per person, with no charge per pay run.",
	},
];

const COMPANY: Link[] = [
	{
		title: "About",
		path: "/about",
		line: "Who we are: started in Portland, Oregon in 2021 by people who ran payroll at small companies.",
	},
	{
		title: "Contact",
		path: "/contact",
		line: "Talk to a payroll specialist or book a 20-minute demo.",
	},
];

function section(heading: string, links: Link[]): string {
	return [`## ${heading}`, "", ...links.map((l) => `- [${l.title}](${BASE}${l.path}): ${l.line}`)].join(
		"\n",
	);
}

export function GET() {
	const guides: Link[] = [
		{
			title: "Blog",
			path: "/blog",
			line: "Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
		},
		...POSTS.map((post) => ({ title: post.title, path: `/blog/${post.slug}`, line: post.summary })),
	];

	const compare: Link[] = COMPETITORS.map((c) => ({
		title: `Fernly vs. ${c.name}`,
		path: `/competitors/${c.slug}`,
		line: c.summary,
	}));

	const body = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal and state payroll taxes, and handles benefits for US companies with 5 to 50 employees. Every account gets a named payroll specialist in Portland, Oregon, pricing is a flat monthly base plus a flat price per person, and pay runs are unlimited with no setup fee.",
		"",
		section("Product", PRODUCT),
		"",
		section("Pricing", PRICING),
		"",
		section("Guides", guides),
		"",
		section("Compare", compare),
		"",
		section("Company", COMPANY),
		"",
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
