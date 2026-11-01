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
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. No setup fee, no charge per pay run, no year-end fee for W-2s.",
		rippling: "See Rippling's website for current pricing.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs on every plan. Two-day direct deposit, or next day on Plus and Premium.",
		rippling: "See Rippling's website for current details.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local payroll taxes calculated, paid and filed, including Form 941, Form 940, W-2s and 1099-NECs. State tax registration on Plus and Premium.",
		rippling: "See Rippling's website for current details.",
	},
	{
		topic: "Benefits",
		fernly:
			"Benefits administration on Plus and Premium. Fernly is a licensed broker in all 50 states, and enrollments become payroll deductions automatically.",
		rippling: "See Rippling's website for current details.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist on every account. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
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
					Fernly runs payroll, files your payroll taxes and keeps benefits deductions in sync,
					with a named payroll specialist on every account. Here&apos;s what Fernly gives you on
					each point worth checking when you compare it with Rippling.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for US teams of 5 to 50</caption>
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
					One monthly base, then a flat price per person. Pay annually and the base is waived.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
