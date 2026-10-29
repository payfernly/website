import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Rippling" },
	description:
		"How Fernly and Rippling compare for US companies with 5 to 50 employees: pricing, pay runs, tax compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly: "Essentials is $8 per person per month plus a $40 monthly base. No setup fee.",
		rippling: "[How Rippling prices its plans, without stating a price]",
	},
	{
		topic: "Pay runs",
		fernly: "Unlimited pay runs on every plan, including free off-cycle runs.",
		rippling: "[How pay runs work in Rippling]",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs. State tax registration on Plus and Premium.",
		rippling: "[How Rippling handles payroll tax filing and state registrations]",
	},
	{
		topic: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Benefits administration included on Plus and Premium.",
		rippling: "[How Rippling handles benefits]",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon. Email and chat on Essentials, phone on Plus and Premium.",
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
					[One or two sentences on who should pick Fernly over Rippling, and why]
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">What you&apos;re comparing</th>
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
					See pricing
				</Link>
			</section>
		</>
	);
}
