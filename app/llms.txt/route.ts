import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Link = { path: string; title: string; summary: string };

const SECTIONS: { heading: string; links: Link[] }[] = [
	{
		heading: "Product",
		links: [
			{
				path: "/",
				title: "Home",
				summary:
					"Overview of Fernly: payroll, federal and state tax filing, and benefits deductions for US companies with 5 to 50 employees.",
			},
			{
				path: "/features/payroll",
				title: "Payroll",
				summary:
					"Running payroll in three steps, with direct deposit, garnishments, bonuses and off-cycle runs for hourly and salaried staff.",
			},
			{
				path: "/features/benefits",
				title: "Benefits administration",
				summary:
					"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
			},
			{
				path: "/features/compliance",
				title: "Payroll tax compliance",
				summary:
					"State tax registrations, quarterly and annual payroll returns, new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
			},
			{
				path: "/pricing",
				title: "Pricing",
				summary: "Fernly's plans, Essentials and Plus, with a monthly base plus a per-person fee.",
			},
		],
	},
	{
		heading: "Company",
		links: [
			{
				path: "/about",
				title: "About",
				summary: "Who started Fernly in Portland, Oregon in 2021, and why.",
			},
			{
				path: "/contact",
				title: "Contact",
				summary: "Get in touch with the Fernly team or book a demo priced for your headcount.",
			},
			{
				path: "/events/techcrunch-disrupt-2027",
				title: "Fernly at TechCrunch Disrupt 2027",
				summary: "Where to meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
			},
		],
	},
	{
		heading: "Blog",
		links: [
			{
				path: "/blog",
				title: "Blog",
				summary:
					"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
			},
			...POSTS.map((post) => ({
				path: `/blog/${post.slug}`,
				title: post.title,
				summary: post.summary,
			})),
		],
	},
];

function render(): string {
	const lines = [
		"# Fernly",
		"",
		"> Fernly is payroll, benefits and tax compliance for US teams of 5 to 50, with a named payroll specialist for every customer.",
		"",
	];
	for (const section of SECTIONS) {
		lines.push(`## ${section.heading}`, "");
		for (const link of section.links) {
			const url = `${BASE}${link.path === "/" ? "" : link.path}`;
			lines.push(`- [${link.title}](${url}): ${link.summary}`);
		}
		lines.push("");
	}
	return lines.join("\n");
}

export function GET() {
	return new Response(render(), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
