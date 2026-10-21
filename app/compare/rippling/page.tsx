import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly compares with Rippling for US teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Published on our site. Essentials is $8 per person per month plus a $40 monthly base, with no setup fee.",
		rippling: "See Rippling's website or sales team for current pricing.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs on every plan. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "Payroll is one module within a broader HR, IT and finance platform.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs included. State registrations handled on Plus and Premium.",
		rippling: "Payroll tax filing is included with its payroll product.",
	},
	{
		topic: "Benefits",
		fernly:
			"Benefits administration and deductions on Plus and Premium, synced straight into payroll.",
		rippling: "Benefits administration is offered as part of its platform.",
	},
	{
		topic: "Support",
		fernly:
			"Every account gets a named payroll specialist in Portland, Oregon. Email and chat on Essentials, phone on Plus and Premium.",
		rippling: "Check with Rippling for the support included with your plan.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Rippling is built to run HR, IT and finance for companies of many sizes. Fernly does
					one thing: payroll, benefits and tax filings for US teams of 5 to 50, with a person
					you can call.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>How Fernly and Rippling compare for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">Topic</th>
							<th scope="col">Fernly</th>
							<th scope="col">Rippling</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.topic}>
								<td>{row.topic}</td>
								<td>{row.fernly}</td>
								<td>{row.rippling}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Prices that fit on a napkin</h2>
				<p className={styles.lede}>
					A monthly base and a flat price per person. No charge per pay run, no year-end fee for
					W-2s, and you can cancel anytime.
				</p>
				<div className={styles.buttons}>
					<Link href="/pricing" className={styles.primary}>
						See pricing
					</Link>
					<Link href="/contact" className={styles.secondary}>
						Book a 20-minute demo
					</Link>
				</div>
			</section>
		</>
	);
}
