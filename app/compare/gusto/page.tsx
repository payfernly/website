import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto",
	description:
		"How Fernly compares with Gusto for US teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support. Fernly Essentials is $8 per person per month plus a $40 base.",
	alternates: { canonical: "/compare/gusto" },
};

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Fernly vs Gusto</p>
						<h1>Built for teams of 5 to 50, and only them.</h1>
						<p className={styles.lede}>
							Gusto is a good payroll product used by companies of every size. Fernly is built
							for one kind of company: a US team of 5 to 50 people that wants payroll, taxes and
							benefits handled by a named specialist it can actually call.
						</p>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="A small team of five people standing side by side"
						width={480}
						height={225}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Who Fernly is for</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Teams of 5 to 50</h3>
						<p>
							Every feature and every price is designed around a company that has outgrown
							spreadsheets but doesn&apos;t have a payroll department.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Hiring in more than one state</h3>
						<p>
							When you add someone in a new state, we register your tax accounts, file the
							new-hire report and add local paid-leave programs to payroll.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Founders and office managers</h3>
						<p>
							If payroll is one of five jobs you do, you get a named payroll specialist in
							Portland, Oregon who knows your company.
						</p>
					</div>
				</div>
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
								Essentials is $8 per person per month plus a $40 monthly base. A team of 12 pays
								$136 a month. No setup fee, and the base is waived on annual billing.
							</td>
							<td>
								Tiered plans, each with a monthly base fee plus a per-person fee. Current prices
								are listed on Gusto&apos;s website.
							</td>
						</tr>
						<tr>
							<td>Pay runs</td>
							<td>
								Unlimited regular and off-cycle runs on every plan. Two-day direct deposit, or
								next day on Plus and Premium.
							</td>
							<td>Unlimited payroll runs on every plan.</td>
						</tr>
						<tr>
							<td>Compliance</td>
							<td>
								Federal, state and local tax filing, W-2s and 1099-NECs on every plan. State tax
								registrations on Plus and Premium.
							</td>
							<td>Automated federal, state and local tax filing, W-2s and 1099s.</td>
						</tr>
						<tr>
							<td>Benefits</td>
							<td>
								Licensed broker in all 50 states. Benefits administration is included on Plus
								and Premium, with deductions synced to payroll.
							</td>
							<td>Health insurance, 401(k) and other benefits offered through Gusto and its partners.</td>
						</tr>
						<tr>
							<td>Support</td>
							<td>
								A named payroll specialist for every account. Email and chat on Essentials,
								phone on Plus, priority phone on Premium.
							</td>
							<td>Support options vary by plan, with more access on higher tiers.</td>
						</tr>
					</tbody>
				</table>
				<p>
					Gusto details are based on publicly available information as of October 2026. Check
					Gusto&apos;s website for current plans and prices.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					Tell us your headcount and states, and we&apos;ll show you the exact monthly total —
					then run a parallel payroll with you before your first real one goes out.
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
