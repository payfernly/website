import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

const GUIDES = [
	{
		slug: "state-registration-checklist",
		title: "State Registration Checklist",
		summary: "Every account to open before you pay your first employee in a new state.",
	},
	{
		slug: "w2-filing-checklist",
		title: "W-2 Filing Checklist for Small Employers",
		summary: "What to gather, check and file so every W-2 goes out by January 31.",
	},
	{
		slug: "contractor-vs-employee-payroll",
		title: "Contractor vs. Employee: Payroll Guide",
		summary: "How to classify the people you pay, and what each choice means for payroll.",
	},
	{
		slug: "form-941-guide",
		title: "Form 941: What It Is and How Small Businesses File It",
		summary: "The quarterly federal payroll return, line by line, and when it's due.",
	},
	{
		slug: "multi-state-payroll-taxes",
		title: "Multi-State Payroll Taxes: A Small Business Guide",
		summary: "Withholding and unemployment taxes when your team works across state lines.",
	},
	{
		slug: "how-to-switch-payroll-providers",
		title: "How to Switch Payroll Providers Without Losing a Pay Run",
		summary: "The timing, data and checks that keep paychecks on schedule during a switch.",
	},
];

export const metadata: Metadata = {
	title: { absolute: "Payroll Guides for Small Businesses | Fernly" },
	description:
		"Step-by-step payroll guides for small US teams: state registrations, W-2s, Form 941, contractors, multi-state taxes and switching providers.",
	alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Guides</p>
			<h1>Payroll guides for small businesses.</h1>
			<p className={styles.lede}>
				Payroll shouldn&apos;t require a law degree. These guides walk small US teams through the
				tasks that actually come up.
			</p>
			<ul className={styles.postList}>
				{GUIDES.map((guide) => (
					<li key={guide.slug} className={styles.card}>
						<h3>
							<Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
						</h3>
						<p>{guide.summary}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
