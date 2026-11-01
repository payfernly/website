import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Rippling" },
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50 on pricing, pay runs, compliance, benefits and support. Fernly Essentials is $8 per person a month plus a $40 base.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly: "Essentials is $8 per person per month plus a $40 monthly base. No setup fee, no charge per pay run.",
		rippling: "See Rippling for current pricing.",
	},
	{
		topic: "Pay runs",
		fernly: "Unlimited pay runs. Two-day direct deposit on Essentials, next-day on Plus and Premium.",
		rippling: "[How pay runs work in Rippling]",
	},
	{
		topic: "Compliance",
		fernly: "Federal, state and local tax filing, W-2s and 1099-NECs. State tax registrations on Plus and Premium.",
		rippling: "[What Rippling handles for tax filing and state registrations]",
	},
	{
		topic: "Benefits",
		fernly: "Benefits administration and deductions on Plus and Premium.",
		rippling: "[How Rippling handles benefits administration]",
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
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Fernly is payroll, benefits and tax filings built for US teams of 5 to 50. Here&apos;s
					how it lines up against Rippling on the things small teams ask us about most.
				</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">Topic</th>
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
					One monthly base, then a flat price per person. Pay annually and the base is waived.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
