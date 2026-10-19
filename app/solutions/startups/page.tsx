import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll for Startups: Run Your First Payroll in an Afternoon",
	description:
		"Fernly helps pre-Series A founders run their first payroll — federal and state taxes filed, benefits deductions handled, and a real specialist on the phone when you have questions.",
	alternates: { canonical: "/solutions/startups" },
};

export default function StartupsPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>For startups</p>
						<h1>Payroll for startups: run your first payroll in an afternoon.</h1>
						<p className={styles.lede}>
							Your first hire shouldn&apos;t come with a second job. Fernly keeps first-time payroll
							ruthlessly simple, with nothing that adds complexity without adding value.
						</p>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="A small team gathered around a laptop"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h1>Everything your first payroll needs</h1>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>The full payroll cycle, handled</h3>
						<p>
							Pay runs, tax filings, benefits deductions and contractor payments all live in one
							place. You review and approve; we take care of the rest.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Federal and state tax filings included</h3>
						<p>
							Fernly calculates, pays and files your federal and state payroll taxes, so you
							aren&apos;t learning the tax code between investor meetings.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Employees and contractors together</h3>
						<p>
							Pay W-2 employees and 1099 contractors in the same pay run, and we&apos;ll prepare
							their 1099-NECs at year end.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits deductions from day one</h3>
						<p>
							Health, dental, vision, 401(k) and FSA deductions flow straight from enrollment into
							payroll. No spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Transparent per-person pricing</h3>
						<p>
							A monthly base and a flat price per person. No setup fee, no charge per pay run and
							no hidden fees, so your burn rate stays predictable.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A named specialist you can call</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. When a
							question comes up, you pick up the phone and talk to someone who knows your company.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Simple now, predictable as you grow</h2>
				<p className={styles.lede}>
					Every plan includes unlimited pay runs and a named payroll specialist. See what your
					team would pay before you run a single paycheck.
				</p>
				<Link href="/pricing" className={styles.primary}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
