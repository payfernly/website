import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"Comparing Fernly and Rippling for US teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		label: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee and no charge per pay run.",
		rippling: "See Rippling's website for current pricing.",
	},
	{
		label: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "See Rippling's website for current details.",
	},
	{
		label: "Compliance",
		fernly:
			"Federal, state and local payroll taxes filed for you, including Form 941, W-2s and 1099-NECs. State tax registration on Plus and Premium.",
		rippling: "See Rippling's website for current details.",
	},
	{
		label: "Benefits",
		fernly:
			"Medical, dental, vision, 401(k), FSA and HSA, with deductions synced to payroll. Benefits administration on Plus and Premium.",
		rippling: "See Rippling's website for current details.",
	},
	{
		label: "Support",
		fernly:
			"A named payroll specialist for every account. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
		rippling: "See Rippling's website for current details.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly runs payroll, files your federal and state payroll taxes and handles benefits
					deductions for US companies with 5 to 50 employees. Every account has its own named
					payroll specialist.
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
							<tr key={row.label}>
								<td>{row.label}</td>
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
					One monthly base, then a flat price per person. No setup fee, no charge per pay run, no
					year-end fee for W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
