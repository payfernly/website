import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Entry = { path: string; title: string; description: string };

const SECTIONS: { heading: string; pages: Entry[] }[] = [
	{
		heading: "Product",
		pages: [
			{
				path: "/features/payroll",
				title: "Payroll",
				description:
					"Run payroll in three steps: review hours, preview taxes, approve. Direct deposit, garnishments, bonuses and off-cycle runs.",
			},
			{
				path: "/features/benefits",
				title: "Benefits",
				description:
					"Health, dental, vision and 401(k), with enrollments turned into payroll deductions automatically.",
			},
			{
				path: "/features/compliance",
				title: "Compliance",
				description:
					"State tax registrations, quarterly and annual payroll returns, and new-hire, paid leave and minimum-wage tracking in all 50 states.",
			},
			{
				path: "/for/agencies",
				title: "Fernly for agencies",
				description: "Payroll, payroll taxes and benefits deductions for agencies with 5 to 50 people.",
			},
		],
	},
	{
		heading: "Pricing",
		pages: [
			{
				path: "/pricing",
				title: "Pricing",
				description: "Plans, what each one includes, and simple per-person pricing.",
			},
		],
	},
	{
		heading: "Guides",
		pages: [
			{
				path: "/blog",
				title: "Blog",
				description:
					"Plain-English guides to payroll taxes, state registrations and running payroll at a small company.",
			},
			...POSTS.map((post) => ({
				path: `/blog/${post.slug}`,
				title: post.title,
				description: post.summary,
			})),
			{
				path: "/glossary",
				title: "Glossary",
				description: "Payroll terms, in plain English.",
			},
		],
	},
	{
		heading: "Company",
		pages: [
			{
				path: "/about",
				title: "About",
				description: "Fernly was started in Portland, Oregon in 2021 by two people who ran payroll at small companies.",
			},
			{
				path: "/contact",
				title: "Contact",
				description: "Talk to the Fernly team or book a 20-minute demo.",
			},
		],
	},
];

export function GET() {
	const lines = [
		"# Fernly",
		"",
		"> Fernly runs payroll, files federal and state payroll taxes, and handles benefits deductions for US companies with 5 to 50 employees. Unlimited pay runs, no setup fee, and every account gets a named payroll specialist based in Portland, Oregon.",
		"",
	];

	for (const section of SECTIONS) {
		lines.push(`## ${section.heading}`, "");
		for (const page of section.pages) {
			lines.push(`- [${page.title}](${BASE}${page.path}): ${page.description}`);
		}
		lines.push("");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
