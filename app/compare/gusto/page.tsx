import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto for teams of 5 to 50",
	description:
		"How Fernly and Gusto compare on pricing, pay runs, tax compliance, benefits and support for US companies with 5 to 50 employees.",
	alternates: { canonical: "/compare/gusto" },
};

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Fernly vs Gusto</p>
				<h1>Built for teams of 5 to 50, with a payroll specialist you can call.</h1>
				<p className={styles.lede}>
					Fernly is payroll, tax filing and benefits for US companies that have outgrown
					spreadsheets but don&apos;t have a payroll department. Gusto is a good product used by a
					lot of small businesses. Here&apos;s how the two compare, so you can pick the one that
					fits your team.
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
						<tr>
							<td>Pricing</td>
							<td>
								Essentials: $8 per person / month plus a $40 monthly base. Plus: $12 per person
								plus an $80 base. Monthly base waived on annual billing.
							</td>
							<td>
								Simple: $6 per person / month plus a $49 monthly base. Plus: $12 per person plus
								an $80 base.
							</td>
						</tr>
						<tr>
							<td>Pay runs</td>
							<td>
								Unlimited regular and off-cycle runs on every plan. Two-day direct deposit, or
								next day on Plus and Premium.
							</td>
							<td>Unlimited pay runs on every plan. Next-day direct deposit on Plus and above.</td>
						</tr>
						<tr>
							<td>Compliance</td>
							<td>
								Federal, state and local filings, W-2s and 1099-NECs. State registrations and
								multi-state payroll on Plus and Premium.
							</td>
							<td>
								Federal, state and local filings, W-2s and 1099s. Multi-state payroll on Plus and
								above.
							</td>
						</tr>
						<tr>
							<td>Benefits</td>
							<td>
								Licensed broker in all 50 states. Medical, dental, vision, 401(k), FSA and HSA,
								with deductions synced to payroll on Plus and Premium.
							</td>
							<td>Health benefits and 401(k) through Gusto and its partners.</td>
						</tr>
						<tr>
							<td>Support</td>
							<td>
								A named payroll specialist in Portland, Oregon for every account. Email and chat
								on Essentials, phone on Plus and Premium.
							</td>
							<td>Support varies by plan, with a dedicated advisor and priority support on Premium.</td>
						</tr>
					</tbody>
				</table>
				<p>
					Gusto details are from its published pricing and plan pages. Plans change, so check{" "}
					<a href="https://gusto.com/product/pricing">gusto.com</a> for the latest.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what Fernly costs for your team</h2>
				<p className={styles.lede}>
					Tell us your headcount and states and we&apos;ll price it exactly. Switching mid-year
					is free, and most teams are set up in one afternoon.
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
