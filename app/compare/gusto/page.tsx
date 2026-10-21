import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto",
	description:
		"Comparing Fernly and Gusto for teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support. Fernly Essentials is $8 per person plus a $40 monthly base.",
	alternates: { canonical: "/compare/gusto" },
};

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Fernly vs Gusto</p>
						<h1>Built for teams of 5 to 50, with a payroll specialist who knows your name.</h1>
						<p className={styles.lede}>
							Gusto is a solid choice for a lot of companies. Fernly is for the ones that want a
							smaller provider that does one thing well: payroll, taxes and benefits deductions
							for US teams of 5 to 50, with a named specialist in Portland, Oregon you can call.
						</p>
					</div>
					<img
						src="/illustrations/paystub.svg"
						alt="A Fernly pay stub showing gross pay, taxes withheld and net pay"
						width={480}
						height={360}
					/>
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
								Essentials is $8 per person per month plus a $40 monthly base. No setup fee, no
								year-end fee, and the base is waived on annual billing.
							</td>
							<td>Simple plan starts at $49 a month plus $6 per person, per Gusto&apos;s published pricing.</td>
						</tr>
						<tr>
							<td>Pay runs</td>
							<td>
								Unlimited pay runs and free off-cycle runs on every plan. Two-day direct deposit,
								or next day on Plus and Premium.
							</td>
							<td>Unlimited pay runs on every plan. Faster direct deposit on higher tiers.</td>
						</tr>
						<tr>
							<td>Compliance</td>
							<td>
								Federal, state and local tax filing, W-2s and 1099-NECs on every plan. State tax
								account registration handled for you on Plus and Premium.
							</td>
							<td>Federal, state and local tax filing, W-2s and 1099s on every plan. Multi-state payroll on higher tiers.</td>
						</tr>
						<tr>
							<td>Benefits</td>
							<td>
								Licensed broker in all 50 states. Health, dental, vision, 401(k), FSA and HSA
								deductions sync with payroll on Plus and Premium.
							</td>
							<td>Health insurance brokerage and 401(k) integrations available, with deductions synced to payroll.</td>
						</tr>
						<tr>
							<td>Support</td>
							<td>
								A named payroll specialist for every account. Email and chat on Essentials, phone
								on Plus, priority phone on Premium.
							</td>
							<td>Email and phone support, with priority support and HR experts on its top tier.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Switching takes one afternoon</h2>
				<p className={styles.lede}>
					Send us your last three pay registers. We import year-to-date totals, set up your tax
					accounts and run a parallel payroll with you before your first real one goes out.
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
