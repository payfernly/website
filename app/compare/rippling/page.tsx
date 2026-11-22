import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee, no charge per pay run, no year-end fee for W-2s.",
		rippling: "Ask Rippling for a quote for your headcount.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "Ask Rippling how pay runs and direct deposit timing work on the plan you're quoted.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local payroll tax filing, new-hire reporting, W-2s and 1099-NECs. State tax registration on Plus and Premium.",
		rippling: "Ask Rippling which filings and state registrations are included on your plan.",
	},
	{
		topic: "Benefits",
		fernly:
			"Medical, dental, vision, 401(k), FSA, HSA and commuter, with deductions synced to payroll. Included on Plus and Premium.",
		rippling: "Ask Rippling which benefits are available and which plan includes them.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist for every account. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
		rippling: "Ask Rippling what support comes with the plan you're quoted.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly runs your payroll, files your payroll taxes and keeps benefits deductions in
					sync, with a payroll specialist assigned to your account. Here&apos;s how it lines up
					with Rippling for a small US team.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>How Fernly and Rippling compare for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Fernly</th>
							<th scope="col">Rippling</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.topic}>
								<th scope="row">{row.topic}</th>
								<td>{row.fernly}</td>
								<td>{row.rippling}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Built for 5 to 50 people</h2>
				<p className={styles.lede}>
					A monthly base and a flat price per person, unlimited pay runs, and taxes filed for
					you in all 50 states. See exactly what your team would pay.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
