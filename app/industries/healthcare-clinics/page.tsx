import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll for healthcare clinics",
	description:
		"Fernly pays hourly medical assistants, salaried providers and 1099 locum tenens contractors in one pay run, and files your federal and state payroll taxes. No payroll team required.",
	alternates: { canonical: "/industries/healthcare-clinics" },
};

export default function HealthcareClinicsPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Payroll for healthcare clinics</p>
						<h1>Payroll built for the way clinics actually pay people.</h1>
						<p className={styles.lede}>
							Fernly pays your hourly medical assistants, salaried providers and 1099 locum
							tenens contractors in one pay run, then files every federal and state payroll tax
							form for you. No dedicated payroll team required.
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
						src="/illustrations/team.svg"
						alt="A small team paid together in one Fernly pay run"
						width={480}
						height={225}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Everything a clinic needs to pay its people, and nothing it doesn&apos;t</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Mixed pay types in one run</h3>
						<p>
							Hourly medical assistants, salaried providers and 1099 contractors get paid
							together, on the same schedule, from the same screen.
						</p>
					</div>
					<div className={styles.card}>
						<h3>1099-NEC prep for locum tenens</h3>
						<p>
							Every contractor payment is tracked as you go, and we prepare their 1099-NECs at
							year end automatically.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Federal and state taxes filed</h3>
						<p>
							We handle Form 941 every quarter, state payroll taxes and SUI filings, so you
							don&apos;t need a payroll person on staff.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits deductions that reconcile</h3>
						<p>
							Health, dental, vision and 401(k) deductions sync into every pay run. No
							spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A real person on the phone</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. Median
							response time last quarter: 11 minutes.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Transparent per-person pricing</h3>
						<p>
							One monthly base, then a flat price per person. No hidden fees and no enterprise
							contract.
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
					Send us your last three pay registers. We import year-to-date totals for your staff and
					contractors, set up your tax accounts and run a parallel payroll with you before your
					first real one goes out.
				</p>
				<Link href="/features/payroll" className={styles.secondary}>
					How payroll works in Fernly
				</Link>
			</section>
		</>
	);
}
