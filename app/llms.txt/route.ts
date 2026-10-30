import { POSTS } from "@/lib/posts";

const BASE = "https://payfernly.com";

export const dynamic = "force-static";

const SECTIONS: { title: string; links: { name: string; path: string; summary: string }[] }[] = [
	{
		title: "Product",
		links: [
			{
				name: "Payroll",
				path: "/features/payroll",
				summary:
					"Run payroll in three steps (review hours, preview taxes, approve), with direct deposit, garnishments, bonuses and off-cycle runs.",
			},
			{
				name: "Benefits",
				path: "/features/benefits",
				summary:
					"Health, dental, vision and 401(k) through Fernly, with enrollments turned into payroll deductions automatically.",
			},
			{
				name: "Compliance",
				path: "/features/compliance",
				summary:
					"State tax registrations, quarterly and annual payroll filings, new-hire reporting, paid leave and minimum-wage tracking in all 50 states.",
			},
			{
				name: "Pricing",
				path: "/pricing",
				summary: "Plans and per-person pricing for Essentials and Plus, with no setup fee.",
			},
		],
	},
	{
		title: "Company",
		links: [
			{
				name: "About",
				path: "/about",
				summary: "Who started Fernly in Portland, Oregon in 2021, and why it's built for small teams.",
			},
			{
				name: "Contact",
				path: "/contact",
				summary: "Get in touch with the Fernly team about payroll for your company.",
			},
			{
				name: "TechCrunch Disrupt 2027",
				path: "/events/techcrunch-disrupt-2027",
				summary: "Where to meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco.",
			},
		],
	},
	{
		title: "Blog",
		links: [
			{
				name: "Blog",
				path: "/blog",
				summary:
					"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
			},
			...POSTS.map((post) => ({
				name: post.title,
				path: `/blog/${post.slug}`,
				summary: post.summary,
			})),
		],
	},
];

function render(): string {
	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal and state taxes, and handles benefits for US companies with 5 to 50 employees, with a named payroll specialist for every customer.",
		"",
		`- [Home](${BASE}): Payroll, tax filing and benefits deductions for small US teams.`,
	];
	for (const section of SECTIONS) {
		lines.push("", `## ${section.title}`, "");
		for (const link of section.links) {
			lines.push(`- [${link.name}](${BASE}${link.path}): ${link.summary}`);
		}
	}
	return `${lines.join("\n")}\n`;
}

export function GET() {
	return new Response(render(), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
}
