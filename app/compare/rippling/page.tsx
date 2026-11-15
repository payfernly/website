import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"Comparing Fernly and Rippling for teams of 5 to 50: pricing, pay runs, compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly: "Essentials is $8 per person / month plus a $40 monthly base. No setup fee.",
		rippling: "See Rippling's website for current pricing.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, with free off-cycle runs on every plan. Two-day direct deposit, or next-day on Plus and Premium.",
		rippling: "Ask Rippling how pay runs and direct deposit work for a team your size.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs on every plan. State tax registrations on Plus and Premium.",
		rippling: "Ask Rippling which filings and state registrations are included.",
	},
	{
		topic: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Benefits administration and payroll deductions on Plus and Premium.",
		rippling: "Ask Rippling which benefits it offers and administers.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist for every customer. Email and chat on Essentials, phone on Plus and Premium.",
		rippling: "Ask Rippling what support comes with your plan.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly does one job for small US teams: payroll, benefits and tax filings, with a
					named specialist you can call. Here&apos;s how it lines up with Rippling.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
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
					One monthly base, then a flat price per person. No charge per pay run and no
					year-end fee for W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
