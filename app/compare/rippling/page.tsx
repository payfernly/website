import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Rippling" },
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50: pricing, pay runs, compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly: "Essentials is $8 per person per month plus a $40 monthly base. No setup fee and no charge per pay run.",
		rippling: "[How Rippling prices its payroll product, without stating a price]",
	},
	{
		topic: "Pay runs",
		fernly: "Unlimited pay runs on every plan, including free off-cycle runs. Two-day direct deposit, or next-day on Plus and Premium.",
		rippling: "[How pay runs work in Rippling]",
	},
	{
		topic: "Compliance",
		fernly: "Federal, state and local tax filing, W-2s and 1099-NECs, and new-hire reporting. State registrations on Plus and Premium.",
		rippling: "[What tax filing and compliance Rippling handles]",
	},
	{
		topic: "Benefits",
		fernly: "Medical, dental, vision, 401(k), FSA, HSA and commuter benefits, with deductions synced to payroll. Included on Plus and Premium.",
		rippling: "[What benefits Rippling offers and how they are administered]",
	},
	{
		topic: "Support",
		fernly: "Email and chat on Essentials, phone on Plus, priority phone and certified HR advisors on Premium.",
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
					Fernly is payroll, benefits and tax filings built for US teams of 5 to 50.
					[One sentence on how Rippling differs for a team this size.]
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>How Fernly and Rippling compare for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">&nbsp;</th>
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
					One monthly base, then a flat price per person. No setup fee, no charge per pay run,
					no year-end fee for W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
