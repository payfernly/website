import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll and benefits in one system",
	description:
		"Fernly runs payroll and benefits in the same system. Health, dental, vision, 401(k) and FSA deductions flow from enrollment straight into payroll, so they're never out of sync.",
	alternates: { canonical: "/payroll-and-benefits" },
};

export default function PayrollAndBenefitsPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>Payroll and benefits</p>
						<h1>Payroll and benefits in one system.</h1>
						<p className={styles.lede}>
							Fernly runs both. Health, dental, vision, 401(k) and FSA deductions flow from
							enrollment straight into payroll, so they&apos;re never out of sync and you never
							copy an election from one tool to another.
						</p>
						<div className={styles.buttons}>
							<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
								See pricing
							</Link>
							<Link href="/features/payroll" className={styles.secondary}>
								How payroll works
							</Link>
						</div>
					</div>
					<img
						src="/illustrations/benefits.svg"
						alt="A heart with a medical cross, representing health benefits"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Why two systems cause problems</h2>
				<p className={styles.lede}>
					When benefits live in one place and payroll in another, someone has to carry every
					change across by hand. On a small team, that someone is usually you.
				</p>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Deductions drift</h3>
						<p>
							An employee switches plans or adds a dependent, and payroll keeps taking the old
							amount until someone notices. Then you&apos;re fixing it with refunds and catch-up
							deductions.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Spreadsheets in the middle</h3>
						<p>
							Reconciling carrier invoices against pay registers every month is slow, and one
							missed row is enough to put a paycheck or a premium off.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Compliance gaps</h3>
						<p>
							Pre-tax deductions taken wrong change taxable wages, which means the payroll
							taxes and filings built on them are wrong too.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>What Fernly does differently</h2>
				<p className={styles.lede}>
					Enrollment and payroll share the same records, so a change in one is a change in both.
				</p>
				<ol className={styles.list}>
					<li>An employee enrolls or changes a plan in Fernly.</li>
					<li>The deduction updates in payroll automatically. No re-keying.</li>
					<li>The next pay run takes the right amount for health, dental, vision, 401(k) and FSA.</li>
				</ol>
				<p>
					There&apos;s no spreadsheet to reconcile at the end of the month, because there&apos;s
					nothing to reconcile. Taxes on those deductions are filed through the same system too.
					See <Link href="/features/compliance">how Fernly handles compliance</Link>.
				</p>
			</section>

			<section className={styles.section}>
				<h2>A licensed benefits broker, not just a payroll tool</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Bring your current plans</h3>
						<p>
							Already have coverage you like? Keep it. We connect it to payroll so deductions
							match what you&apos;ve elected.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Or let us shop the market</h3>
						<p>
							Fernly is a licensed benefits broker in all 50 states, so we can help you compare
							plans and set them up, then run them through payroll.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Who this is for</h2>
				<p className={styles.lede}>
					Teams of 5 to 50 that don&apos;t have a dedicated HR person. If the founder or an
					operations lead is the one running payroll and answering benefits questions, Fernly
					takes the busywork off their plate, and a named payroll specialist is there when
					something needs a human.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what it costs</h2>
				<p className={styles.lede}>
					Benefits administration is included on the Plus and Premium plans, with one monthly
					base and a flat price per person.
				</p>
				<div className={styles.buttons}>
					<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
						Compare plans
					</Link>
					<Link href="/features/compliance" className={styles.secondary}>
						Compliance in Fernly
					</Link>
				</div>
			</section>
		</>
	);
}
