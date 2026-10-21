import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"Comparing Fernly and Rippling for teams of 5 to 50: pricing, pay runs, compliance, benefits and support, side by side, so you can pick the payroll provider that fits your team.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Published on our site. Essentials is $8 per person per month plus a $40 base. No setup fee.",
		rippling: "Quote-based. Ask Rippling for pricing on the modules you need.",
	},
	{
		topic: "Pay runs",
		fernly: "Unlimited pay runs on every plan, including off-cycle runs, bonuses and garnishments.",
		rippling: "Payroll is one module in a wider HR, IT and finance platform.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing on every plan. State registrations handled on Plus and Premium.",
		rippling: "Tax filing included with payroll. Check which state services are part of your quote.",
	},
	{
		topic: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Benefits administration included on Plus and Premium.",
		rippling: "Benefits administration available as part of the Rippling platform.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist based in Portland, Oregon. Median response time last quarter: 11 minutes.",
		rippling: "Support options vary by plan. Ask Rippling what's included in yours.",
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
					one job: payroll, benefits and tax filings for US teams of 5 to 50. Here&apos;s how the
					two compare on the things small teams ask us about most.
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<caption>
						Fernly and Rippling compared on pricing, pay runs, compliance, benefits and support
					</caption>
					<thead>
						<tr>
							<th scope="col">Feature</th>
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
					One monthly base, then a flat price per person. No charge per pay run and no year-end
					fee for W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
