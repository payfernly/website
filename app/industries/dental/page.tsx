import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import local from "./page.module.css";

export const metadata: Metadata = {
	title: "Payroll for dental practices",
	description:
		"Fernly runs payroll for dental offices: hygienists, assistants, front desk and 1099 contractors on one payroll, with tax filings and benefits deductions handled at a flat per-person price.",
	alternates: { canonical: "/industries/dental" },
};

// Placeholder: set to true once an approved dental practice customer quote replaces the text below.
const SHOW_CUSTOMER_QUOTE = false;

export default function DentalPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Payroll for dental practices</p>
				<h1>Payroll for the chair, the front desk and everyone in between.</h1>
				<p className={styles.lede}>
					Your practice pays full-time assistants, part-time hygienists, 1099 contractors and
					front-desk staff — often on different schedules, with health, dental and vision
					deductions that have to match every time. Fernly handles all of it at a flat
					per-person price, with no hidden fees.
				</p>
				<div className={styles.buttons}>
					<Link href="/contact" className={`${styles.primary} ${local.navy}`}>
						Book a 20-minute demo
					</Link>
					<Link href="/pricing" className={styles.secondary}>
						See pricing
					</Link>
				</div>
			</section>

			<section className={styles.section}>
				<h2>The payroll problems every practice manager knows</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Clinical and front-desk staff on different schedules</h3>
						<p>
							Hygienists paid hourly by the day, assistants on biweekly, an office manager on
							salary. One payroll, three sets of rules.
						</p>
					</div>
					<div className={styles.card}>
						<h3>1099 hygienists next to W-2 employees</h3>
						<p>
							Fill-in hygienists and visiting specialists need paying too, and someone has to
							track them for 1099-NECs in January.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Locations in more than one state</h3>
						<p>
							A second office across the state line means new withholding, unemployment and
							paid-leave registrations, and a second set of filings.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits deductions that never quite match</h3>
						<p>
							Health, dental and vision premiums change with every new hire and life event. The
							deductions have to reconcile on every pay run.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How Fernly runs payroll for your practice</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>The whole payroll cycle, handled</h3>
						<p>
							Pay runs, federal and state tax filings, benefits deductions and contractor
							payments, all in one place. You review, preview and approve.
						</p>
					</div>
					<div className={styles.card}>
						<h3>One flat price per person</h3>
						<p>
							A monthly base plus a flat price per person. No setup fee, no charge per pay run,
							and contractors count only in the months you pay them.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A real person on the phone</h3>
						<p>
							Your practice gets a named payroll specialist based in Portland, Oregon, who
							picks up the phone and knows your account.
						</p>
					</div>
				</div>
			</section>

			{SHOW_CUSTOMER_QUOTE && (
				<section className={styles.section}>
					<blockquote className={styles.quote}>
						&ldquo;[Placeholder: quote from a dental practice customer.]&rdquo;
						<footer>[Name], [Title], [Dental practice name]</footer>
					</blockquote>
				</section>
			)}

			<section className={styles.section}>
				<h2>Switch before your next pay run</h2>
				<p className={styles.lede}>
					Send us your last three pay registers. We import year-to-date totals for every
					employee and contractor, set up your tax accounts and run a parallel payroll with you
					first.
				</p>
				<Link href="/contact" className={`${styles.primary} ${local.navy}`}>
					Book a 20-minute demo
				</Link>
			</section>
		</>
	);
}
