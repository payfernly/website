export type Post = {
	slug: string;
	title: string;
	summary: string;
	date: string;
	author: string;
};

export const POSTS: Post[] = [
	{
		slug: "hiring-in-a-new-state",
		title: "Your first hire in a new state: the five registrations nobody mentions",
		summary:
			"Withholding, unemployment, paid leave, local tax and new-hire reporting — what to file, and in what order, before that first paycheck.",
		date: "2026-09-22",
		author: "Priya Raman",
	},
	{
		slug: "form-941-explained",
		title: "Form 941, explained for people who never wanted to learn it",
		summary:
			"What the quarterly federal payroll return reports, why it has to match your deposits, and the three mistakes we see most often.",
		date: "2026-08-04",
		author: "Jordan Whitfield",
	},
	{
		slug: "switching-payroll-mid-year",
		title: "Is it a bad idea to switch payroll providers mid-year?",
		summary:
			"Short answer: no, if you switch at the start of a quarter. Here's the checklist we walk every new customer through.",
		date: "2026-06-17",
		author: "Marcus Lindqvist",
	},
];

export function formatDate(iso: string): string {
	return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
}

export function getPost(slug: string): Post {
	const post = POSTS.find((p) => p.slug === slug);
	if (!post) throw new Error(`Unknown post: ${slug}`);
	return post;
}
