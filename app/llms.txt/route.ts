import { POSTS } from "@/lib/posts";

const BASE = "https://payfernly.com";

export const dynamic = "force-static";

const SECTIONS: { title: string; links: { title: string; path: string; summary: string }[] }[] = [
	{
		title: "Product",
		links: [
			{
				title: "Home",
				path: "/",
				summary:
					"Overview of Fernly: payroll, federal and state tax filing, and benefits deductions for US companies with 5 to 50 employees.",
			},
			{
				title: "Payroll",
				path: "/features/payroll",
				summary:
					"Running payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
			},
			{
				title: "Benefits",
				path: "/features/benefits",
				summary:
					"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
			},
			{
				title: "Compliance",
				path: "/features/compliance",
				summary:
					"State tax registrations, quarterly and annual payroll returns, new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
			},
			{
				title: "Pricing",
				path: "/pricing",
				summary: "Plans and per-person pricing, and what each plan includes.",
			},
		],
	},
	{
		title: "Company",
		links: [
			{
				title: "About",
				path: "/about",
				summary: "Who Fernly is, why it was started in Portland, Oregon in 2021, and the team behind it.",
			},
			{
				title: "Contact",
				path: "/contact",
				summary: "Book a demo, or reach sales and customer support by email, phone or mail.",
			},
			{
				title: "Fernly at TechCrunch Disrupt 2027",
				path: "/events/techcrunch-disrupt-2027",
				summary: "Where to meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
			},
		],
	},
	{
		title: "Blog",
		links: [
			{
				title: "Blog",
				path: "/blog",
				summary:
					"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
			},
			...POSTS.map((post) => ({
				title: post.title,
				path: `/blog/${post.slug}`,
				summary: post.summary,
			})),
		],
	},
];

export function GET() {
	const body = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal, state and local payroll taxes, and handles benefits for US teams of 5 to 50, with a named payroll specialist on every account.",
		"",
		...SECTIONS.flatMap((section) => [
			`## ${section.title}`,
			"",
			...section.links.map(
				(link) => `- [${link.title}](${BASE}${link.path === "/" ? "" : link.path}): ${link.summary}`,
			),
			"",
		]),
	].join("\n");

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
