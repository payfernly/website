import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Payroll for multi-state teams";
const description =
	"For US companies of 5 to 50 with people in more than one state. Fernly registers your state tax accounts, files every state return and keeps up with paid-leave and minimum-wage rules.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/solutions/multi-state-teams" },
};

export default function MultiStateTeamsPage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly for multi-state teams"
				description={description}
				path="/solutions/multi-state-teams"
				lowPrice={80}
				offerCount={2}
			/>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>For multi-state teams</p>
						<h1>Payroll for teams in more than one state.</h1>
						<p className={styles.lede}>
							Your next hire lives three states away, or your whole team is remote. Fernly does
							the state-by-state work across all 50 states, one registration at a time.
						</p>
					</div>
					<img
						src="/illustrations/states.svg"
						alt="A grid of US states with the ones where a company is registered highlighted"
						width={480}
						height={300}
						fetchPriority="high"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Sound familiar?</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>&ldquo;We hired someone in a new state. Now what?&rdquo;</h3>
						<p>
							Withholding, unemployment, paid leave, local taxes, new-hire reporting. Each one is
							a different agency with a different form.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;Every state has its own rules.&rdquo;</h3>
						<p>
							Minimum wage, paid sick leave and family-leave programs change dozens of times a
							year, and not on the same day.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;We found out from a penalty notice.&rdquo;</h3>
						<p>
							A missed registration doesn&apos;t announce itself. It shows up months later, with
							interest.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How Fernly handles every state you pay in</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>State registrations, done for you</h3>
						<p>
							On the Plus and Premium plans, we register your withholding and unemployment
							accounts when you add someone in a new state.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Paid leave added to payroll</h3>
						<p>
							We file the new-hire report and add the state&apos;s paid-leave program to payroll,
							so deductions are right from the first paycheck.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Every return filed</h3>
						<p>
							State withholding and unemployment returns every quarter, plus federal and local
							payroll taxes. Fernly files them all.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Rule changes applied for you</h3>
						<p>
							Our compliance team applies new rules to your payroll before the effective date,
							then emails you a one-paragraph summary.
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
				<h2>Multi-state payroll is part of Plus</h2>
				<p className={styles.lede}>
					Plus adds multi-state payroll and registrations, benefits administration and next-day
					direct deposit to everything in Essentials.
				</p>
				<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
