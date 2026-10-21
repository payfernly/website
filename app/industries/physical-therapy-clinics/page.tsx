import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll for physical therapy clinics",
	description:
		"Fernly runs payroll for physical therapy clinics with 5 to 50 employees: hourly and salaried staff, multi-state clinicians, benefits deductions and 1099 relief therapists, with taxes filed for you.",
	alternates: { canonical: "/industries/physical-therapy-clinics" },
};

export default function PhysicalTherapyClinicsPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Payroll for physical therapy clinics</p>
						<h1>Stop spending Fridays on payroll. Fernly handles it for your clinic.</h1>
						<p className={styles.lede}>
							Transparent per-person pricing, a real payroll specialist who knows your account,
							and every federal and state tax form filed for you — so you can stay focused on
							patient care.
						</p>
						<div className={styles.buttons}>
							<Link href="/pricing" className={styles.primary}>
								See pricing
							</Link>
							<Link href="/contact" className={styles.secondary}>
								Book a 20-minute demo
							</Link>
						</div>
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
				<h2>Why payroll is harder in a PT clinic</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Hourly and salaried, side by side</h3>
						<p>
							Salaried PTs, hourly PTAs, front desk and billing coordinators — often on
							different pay schedules, with overtime rules that only apply to some of them.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Clinicians across state lines</h3>
						<p>
							When a therapist is licensed in more than one state and treats patients in each,
							withholding, unemployment and new-hire reporting follow them.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits on thin margins</h3>
						<p>
							Health insurance is a big line for a staff-heavy practice. Deductions that drift
							out of sync with enrollment cost you money you won&apos;t notice until later.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Per-diem and relief therapists</h3>
						<p>
							Covering vacations and busy weeks with 1099 contractors means a second set of
							payments to track and 1099-NECs to prepare in January.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Misclassification risk</h3>
						<p>
							Treat a per-diem therapist as a contractor when the rules say employee, and the
							back taxes and penalties land on the clinic.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How Fernly works for your clinic</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Automated pay runs for your whole staff</h3>
						<p>
							Salaried clinicians and hourly staff in the same run, or on their own schedules.
							Approved hours flow in with overtime already calculated under federal and state
							rules.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Federal and state taxes filed for you</h3>
						<p>
							We calculate, pay and file federal, state and local payroll taxes, and register
							you in a new state when a clinician starts working there.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits deductions that reconcile</h3>
						<p>
							Health, dental, vision, 401(k) and FSA deductions flow straight from enrollment
							into payroll. No spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Contractor payments alongside payroll</h3>
						<p>
							Pay per-diem and relief therapists in the same place as your employees, and
							we&apos;ll prepare their 1099-NECs at year end.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A named specialist in Portland</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon, who picks
							up the phone and can talk through how to classify a new hire.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Pricing you can read in one line</h2>
				<p className={styles.lede}>
					A flat price per person each month on top of a set monthly base. No setup fee, no
					charge per pay run, no hidden fees. Relief therapists count as people only in the
					months you pay them.
				</p>
				<Link href="/pricing" className={styles.secondary}>
					See plans and pricing
				</Link>
			</section>

			<section className={styles.section}>
				<blockquote className={styles.quote}>
					When you call Fernly, a real payroll specialist answers — not a ticket queue.
				</blockquote>
			</section>

			<section className={styles.section}>
				<h2>See Fernly with your clinic&apos;s numbers</h2>
				<p className={styles.lede}>
					Bring your staff list and pay schedules. We&apos;ll walk through a pay run and price
					your exact headcount on the call.
				</p>
				<Link href="/contact" className={styles.secondary}>
					Book a 20-minute demo
				</Link>
				<p>
					Still exploring? <Link href="/">Back to the Fernly home page</Link>.
				</p>
			</section>
		</>
	);
}
