import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto",
	description:
		"Comparing Fernly and Gusto for teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side. Fernly Essentials is $40 a month plus $8 per person.",
	alternates: { canonical: "/compare/gusto" },
};

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Fernly vs Gusto</p>
				<h1>Payroll built for teams of 5 to 50.</h1>
				<p className={styles.lede}>
					Fernly is for US companies that have outgrown doing payroll by hand but don&apos;t have
					a payroll person. Every account gets a named payroll specialist, we file every federal,
					state and local payroll tax form, and the price is a monthly base plus a flat price per
					person.
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
								Essentials: $40 a month plus $8 per person. Plus: $80 a month plus $12 per
								person. No setup fee.
							</td>
							<td>
								Simple: $49 a month plus $6 per person. Plus: $80 a month plus $12 per person.
							</td>
						</tr>
						<tr>
							<td>Pay runs</td>
							<td>
								Unlimited on every plan, including free off-cycle runs. Two-day direct deposit,
								or next day on Plus.
							</td>
							<td>
								Unlimited on every plan. Next-day direct deposit on Plus, or as a paid add-on on
								Simple.
							</td>
						</tr>
						<tr>
							<td>Compliance</td>
							<td>
								Federal, state and local tax filing on every plan. Multi-state payroll and state
								registrations on Plus.
							</td>
							<td>
								Federal, state and local tax filing on every plan. Simple covers one state;
								multi-state payroll is on Plus.
							</td>
						</tr>
						<tr>
							<td>Benefits</td>
							<td>
								Health, dental, vision, 401(k) and FSA through our licensed brokerage, with
								deductions synced to payroll. Included on Plus.
							</td>
							<td>Health benefits through Gusto&apos;s brokerage, and 401(k) through partners.</td>
						</tr>
						<tr>
							<td>Support</td>
							<td>
								A named payroll specialist for every account. Email and chat on Essentials, phone
								on Plus.
							</td>
							<td>Email and chat support. Priority support is a paid add-on on Simple.</td>
						</tr>
					</tbody>
				</table>
				<p>
					Gusto prices are from Gusto&apos;s published pricing as of October 2026 and may change.
					See <Link href="/pricing">Fernly pricing</Link> for every plan.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what Fernly costs for your team</h2>
				<p className={styles.lede}>
					Tell us your headcount and states and we&apos;ll price it on a 20-minute call. Switching
					takes one afternoon, and we&apos;ll run a parallel payroll with you first.
				</p>
				<div className={styles.buttons}>
					<Link href="/contact" className={styles.primary}>
						Book a 20-minute demo
					</Link>
					<Link href="/pricing" className={styles.secondary}>
						See pricing
					</Link>
				</div>
			</section>
		</>
	);
}
