import type { Metadata } from "next";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Payroll tax compliance";
const description =
	"Fernly registers you with state tax agencies, files every quarterly and annual payroll return, and tracks new-hire reporting, paid leave and minimum-wage changes in all 50 states.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/features/compliance" },
};

export default function CompliancePage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly Payroll tax compliance"
				description={description}
				path="/features/compliance"
				lowPrice={40}
				offerCount={3}
			/>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>Compliance</p>
						<h1>Hire in a new state without opening a new tab.</h1>
						<p className={styles.lede}>
							When you add someone in a state you haven&apos;t paid in before, Fernly registers
							your withholding and unemployment accounts, files the new-hire report and adds the
							state&apos;s paid-leave program to payroll.
						</p>
					</div>
					<img
						src="/illustrations/states.svg"
						alt="A grid of US states with the ones where a company is registered highlighted"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>What we file, so you don&apos;t have to</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Filing</th>
							<th>How often</th>
							<th>Who handles it</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Form 941 (federal withholding)</td>
							<td>Quarterly</td>
							<td>Fernly</td>
						</tr>
						<tr>
							<td>Form 940 (FUTA)</td>
							<td>Annually</td>
							<td>Fernly</td>
						</tr>
						<tr>
							<td>State withholding and unemployment returns</td>
							<td>Quarterly</td>
							<td>Fernly</td>
						</tr>
						<tr>
							<td>New-hire reporting</td>
							<td>Within 20 days of hire</td>
							<td>Fernly</td>
						</tr>
						<tr>
							<td>W-2 and 1099-NEC</td>
							<td>By January 31</td>
							<td>Fernly</td>
						</tr>
						<tr>
							<td>State tax account registration</td>
							<td>Once per state</td>
							<td>Fernly, on Plus and Premium</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Rules change. We keep up.</h2>
				<p className={styles.lede}>
					Minimum wage, paid sick leave, state disability insurance and family-leave programs
					change dozens of times a year. Our compliance team tracks every update and applies it
					to your payroll before the effective date, then emails you a one-paragraph summary of
					what changed.
				</p>
			</section>
		</>
	);
}
