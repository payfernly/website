import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto",
	description:
		"How Fernly compares with Gusto for teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side. Fernly Essentials is $40 a month plus $8 per person.",
	alternates: { canonical: "/compare/gusto" },
};

const ROWS = [
	{
		label: "Pricing",
		fernly:
			"Essentials $40/month + $8 per person. Plus $80 + $12. Premium $150 + $18. No setup fee; base waived on annual billing.",
		gusto:
			"Simple $49/month + $6 per person. Plus $80 + $12. Premium $180 + $22. Contractor-only plans also available.",
	},
	{
		label: "Pay runs",
		fernly:
			"Unlimited pay runs and free off-cycle runs on every plan. Two-day direct deposit, next-day on Plus and Premium.",
		gusto: "Unlimited pay runs on every plan. Next-day direct deposit on Plus and above.",
	},
	{
		label: "Compliance",
		fernly:
			"Federal, state and local filings, W-2s and 1099-NECs on every plan. Multi-state payroll and state tax registration on Plus and Premium.",
		gusto:
			"Federal, state and local filings, W-2s and 1099s on every plan. Multi-state payroll on Plus and above.",
	},
	{
		label: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Medical, dental, vision, 401(k), FSA and HSA, with administration included on Plus and Premium.",
		gusto:
			"Health insurance brokerage plus 401(k) and other benefits through partners, offered alongside payroll.",
	},
	{
		label: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon for every account. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
		gusto:
			"Email and chat support, with phone support and access to HR experts on higher plans.",
	},
];

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Fernly vs Gusto</p>
				<h1>Payroll built for teams of 5 to 50.</h1>
				<p className={styles.lede}>
					Fernly is for US companies that have outgrown doing payroll by hand but don&apos;t
					have a payroll team. You get unlimited pay runs, every federal and state filing, and a
					named specialist who knows your company — at a price that fits on a napkin.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th></th>
							<th>Fernly</th>
							<th>Gusto</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.label}>
								<td>
									<strong>{row.label}</strong>
								</td>
								<td>{row.fernly}</td>
								<td>{row.gusto}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>
					Gusto details are based on Gusto&apos;s published plans and may change; check
					gusto.com for current pricing. Gusto is a trademark of Gusto, Inc.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					Switching takes one afternoon, even mid-year. Tell us your headcount and states and
					we&apos;ll price it exactly, then run a parallel payroll with you before your first
					real one.
				</p>
				<div className={styles.buttons}>
					<Link href="/pricing" className={styles.primary}>
						See pricing
					</Link>
					<Link href="/contact" className={styles.secondary}>
						Book a 20-minute demo
					</Link>
				</div>
			</section>
		</>
	);
}
