import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50 on pricing, pay runs, compliance, benefits and support. Fernly Essentials is $8 per person per month plus a $40 base.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee and no charge per pay run.",
		rippling: "Not listed here. Ask Rippling for a quote for your headcount.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs on every plan, with free off-cycle runs. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "[How Rippling handles pay runs and direct deposit]",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing on every plan, including Form 941 and W-2s. State tax account registration on Plus and Premium.",
		rippling: "[How Rippling handles tax filing and state registrations]",
	},
	{
		topic: "Benefits",
		fernly:
			"Benefits administration on Plus and Premium. Fernly is a licensed broker in all 50 states, and deductions stay in sync with payroll.",
		rippling: "[How Rippling handles benefits administration]",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist for every account. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
		rippling: "[What support Rippling offers teams of this size]",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					One system for payroll, taxes and benefits, built for companies with 5 to 50
					employees, and a named payroll specialist you can call when something comes up.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>
						Fernly and Rippling compared on pricing, pay runs, compliance, benefits and support
					</caption>
					<thead>
						<tr>
							<th scope="col">What you get</th>
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
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. Contractors count only in the months
					you pay them, and you can cancel anytime.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
