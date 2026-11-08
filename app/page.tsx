import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly — Payroll for teams of 5 to 50" },
	description:
		"Fernly runs payroll, files your federal and state taxes, and handles benefits deductions for US companies with 5 to 50 employees. Unlimited pay runs, no setup fee.",
	alternates: { canonical: "/" },
};

export default function HomePage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Payroll for small US teams</p>
						<h1>Payroll that takes four minutes, not your whole Friday.</h1>
						<p className={styles.lede}>
							Fernly pays your people, files every federal and state payroll tax form, and
							keeps benefits deductions in sync — built for companies with 5 to 50
							employees. Plans start at $8 per person per month plus a $40 monthly base.
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
				<h2>Everything a 20-person company needs, and nothing it doesn&apos;t</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Unlimited pay runs</h3>
						<p>
							Weekly, biweekly, semimonthly or a one-off bonus run. Direct deposit lands in two
							business days, or next day on Plus.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Taxes filed for you</h3>
						<p>
							We calculate, pay and file federal, state and local payroll taxes, including Form
							941 every quarter and W-2s every January.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits that reconcile</h3>
						<p>
							Health, dental, vision, 401(k) and FSA deductions flow straight from enrollment
							into payroll. No spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Contractors too</h3>
						<p>
							Pay 1099 contractors alongside employees and we&apos;ll prepare their 1099-NECs at
							year end.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Employee self-service</h3>
						<p>
							Your team updates bank details, downloads pay stubs and signs their W-4 on their
							own. You stop being the help desk.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A real person on the phone</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. Median
							response time last quarter: 11 minutes.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<blockquote className={styles.quote}>
					&ldquo;We switched from a big-name provider when we hit 18 people. Fernly caught a
					missed Colorado FAMLI registration in our first week and fixed it before it turned into
					a penalty.&rdquo;
					<footer>Dana Okafor, Head of Operations, Tidewell Coffee Roasters</footer>
				</blockquote>
			</section>

			<section className={styles.section}>
				<h2>Switching takes one afternoon</h2>
				<p className={styles.lede}>
					Send us your last three pay registers. We import year-to-date totals, set up your tax
					accounts and run a parallel payroll with you before your first real one goes out.
				</p>
				<Link href="/features/payroll" className={styles.secondary}>
					How payroll works in Fernly
				</Link>
			</section>
		</>
	);
}
