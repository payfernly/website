import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Rippling" },
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee and no charge per pay run.",
		rippling: "[How Rippling prices payroll for a team of 5 to 50, without stating a price]",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, with free off-cycle runs for bonuses and final paychecks. Two-day direct deposit on Essentials, next-day on Plus and Premium.",
		rippling: "[How pay runs work in Rippling]",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs on every plan. State tax registration on Plus and Premium.",
		rippling: "[What tax filing and compliance Rippling handles]",
	},
	{
		topic: "Benefits",
		fernly:
			"Medical, dental, vision, 401(k), FSA, HSA and commuter benefits through Fernly, a licensed broker in all 50 states. Included on Plus and Premium.",
		rippling: "[What benefits Rippling offers and on which plans]",
	},
	{
		topic: "Support",
		fernly:
			"Email and chat on Essentials, phone on Plus, priority phone and certified HR advisors on Premium.",
		rippling: "[What support Rippling offers]",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly is built for US teams of 5 to 50 who want payroll, benefits and tax filings
					handled. Here&apos;s how it lines up against Rippling on the things small teams ask
					about most.
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col"></th>
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
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. Pick a plan and price your exact
					headcount.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
