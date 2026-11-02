import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Payroll for operations leads";
const description =
	"For operations leads who own payroll, benefits and filings at a US company of 5 to 50. Fernly keeps pay, taxes and benefits deductions in one system, with a named specialist on call.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/solutions/operations-leads" },
};

export default function OperationsLeadsPage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly for operations leads"
				description={description}
				path="/solutions/operations-leads"
				lowPrice={40}
				offerCount={3}
			/>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>For operations leads</p>
						<h1>Payroll, taxes, benefits. On time.</h1>
						<p className={styles.lede}>
							You&apos;re the person everyone asks about pay stubs, deductions and that letter
							from the state. Fernly keeps payroll, tax filings and benefits in one place, with
							a named payroll specialist behind you.
						</p>
					</div>
					<img
						src="/illustrations/paystub.svg"
						alt="A Fernly pay stub showing gross pay, taxes withheld and net pay"
						width={480}
						height={360}
						fetchPriority="high"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Sound familiar?</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>&ldquo;I&apos;m the help desk.&rdquo;</h3>
						<p>
							New bank details, a lost pay stub, a W-4 change. Every request comes to you, usually
							the day before payroll.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;The spreadsheet never matches.&rdquo;</h3>
						<p>
							Benefits enrollment lives in one place and payroll in another, and you reconcile the
							two by hand every month.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;I&apos;m tracking deadlines in my head.&rdquo;</h3>
						<p>
							Quarterly returns, new-hire reports, year-end forms. Miss one and it lands on your
							desk as a notice.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How Fernly gives you your week back</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Employee self-service</h3>
						<p>
							Your team updates bank details, downloads pay stubs and signs their W-4 on their
							own. You stop being the help desk.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits that reconcile</h3>
						<p>
							Health, dental, vision, 401(k) and FSA deductions flow straight from enrollment into
							payroll. No spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Filings handled</h3>
						<p>
							Form 941 every quarter, state returns, new-hire reports, and W-2s and 1099-NECs by
							January 31. Fernly files them all.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A real person to ask</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. Median
							response time last quarter: 11 minutes.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<blockquote className={styles.quote}>
					&ldquo;[Customer quote from an operations lead about running payroll and benefits in
					Fernly]&rdquo;
					<footer>[Name, title, company]</footer>
				</blockquote>
			</section>

			<section className={styles.section}>
				<h2>See it with your own payroll</h2>
				<p className={styles.lede}>
					Bring your questions and your current pay schedule. We&apos;ll walk you through a pay
					run, benefits deductions and what switching would look like for your team.
				</p>
				<Link href="/contact" className={`${styles.primary} ${styles.primaryDeep}`}>
					Book a 20-minute demo
				</Link>
			</section>
		</>
	);
}
