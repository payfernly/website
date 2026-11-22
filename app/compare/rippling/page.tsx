import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly and Rippling compare on pricing, pay runs, compliance, benefits and support for US companies with 5 to 50 employees.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee, no charge per pay run.",
		rippling: "[How Rippling prices payroll for a team of 5 to 50, without a dollar figure]",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs for bonuses and final paychecks. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "[How pay runs work in Rippling]",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local payroll taxes calculated, paid and filed, including Form 941, W-2s and 1099-NECs. State registrations handled on Plus and Premium.",
		rippling: "[What tax filing and state registration Rippling handles]",
	},
	{
		topic: "Benefits",
		fernly:
			"Health, dental, vision, 401(k), FSA, HSA and commuter benefits, with deductions synced to payroll. Included on Plus and Premium.",
		rippling: "[What benefits Rippling offers and how they connect to payroll]",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist based in Portland, Oregon for every account. Email and chat on Essentials, phone on Plus and Premium.",
		rippling: "[What support Rippling offers to a team of 5 to 50]",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly is built only for US companies with 5 to 50 employees: payroll, tax filings and
					benefits deductions, with a payroll specialist you can call. Here&apos;s how it lines
					up with Rippling.
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
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
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. No setup fee and no year-end fee for
					W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
