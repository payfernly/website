import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll",
	description:
		"Run payroll in three steps: review hours, preview taxes, approve. Fernly handles direct deposit, garnishments, bonuses and off-cycle runs.",
	alternates: { canonical: "/features/payroll" },
};

export default function PayrollPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Payroll</p>
						<h1>Review, preview, approve. That&apos;s a pay run.</h1>
						<p className={styles.lede}>
							Hours sync in from your time tracker, taxes are calculated as you go, and you see
							the exact amount leaving your bank account before you click approve.
						</p>
					</div>
					<img
						src="/illustrations/run-payroll.svg"
						alt="Three steps of a Fernly pay run: review hours, preview taxes, approve"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h1>Built for hourly and salaried teams</h1>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Time tracking that flows in</h3>
						<p>
							Connect Homebase, When I Work, Deputy or QuickBooks Time. Approved timesheets land
							in your next pay run with overtime already calculated under federal and state
							rules.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Off-cycle runs in seconds</h3>
						<p>
							Bonuses, commissions, a final paycheck on someone&apos;s last day. Off-cycle runs
							are free and unlimited on every plan.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Garnishments and child support</h3>
						<p>
							Upload the order and we set up the deduction, send payments to the agency and keep
							the paper trail.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Tips and reimbursements</h3>
						<p>
							Cash and card tips, mileage and expense reimbursements are taxed correctly — or not
							taxed at all, when that&apos;s the rule.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Payday, on time, every time</h2>
				<p className={styles.lede}>
					Approve by 5 p.m. Pacific two business days before payday and your team is paid on
					payday. On the Plus and Premium plans, approve by 5 p.m. Pacific the day before.
				</p>
				<Link href="/pricing" className={styles.primary}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
