import type { Metadata } from "next";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Benefits administration",
	description:
		"Offer health, dental, vision and 401(k) through Fernly. Enrollments become payroll deductions automatically, and carriers are updated as staff join or leave.",
	alternates: { canonical: "/features/benefits" },
};

export default function BenefitsPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Benefits</p>
						<h1>Benefits your team can enroll in from their phone.</h1>
						<p className={styles.lede}>
							Fernly is a licensed broker in all 50 states. Bring your current plans or let us
							shop the market for you. Either way, deductions stay in sync with payroll.
						</p>
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
				<h2>What you can offer</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Medical, dental, vision</h3>
						<p>Plans from Kaiser, Aetna, UnitedHealthcare, Blue Shield and regional carriers.</p>
					</div>
					<div className={styles.card}>
						<h3>401(k) and Roth</h3>
						<p>
							Through our partners at Guideline and Human Interest, with contributions sent every
							payday.
						</p>
					</div>
					<div className={styles.card}>
						<h3>FSA, HSA and commuter</h3>
						<p>Pre-tax accounts that save your team money and save you payroll tax.</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How enrollment works</h2>
				<ol className={styles.list}>
					<li>A new hire gets an enrollment link the day their offer is accepted.</li>
					<li>They compare plans side by side, with their own paycheck cost shown for each.</li>
					<li>We send the election to the carrier and add the deduction to the next pay run.</li>
					<li>When someone leaves, we end coverage and send COBRA notices on time.</li>
				</ol>
				<p>Benefits administration is included on the Plus and Premium plans.</p>
			</section>
		</>
	);
}
