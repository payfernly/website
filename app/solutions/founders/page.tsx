import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Payroll for founders";
const description =
	"For founders of US companies with 5 to 50 employees who still run payroll themselves. Fernly pays your team, files your payroll taxes and gives you a named payroll specialist.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/solutions/founders" },
};

export default function FoundersPage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly for founders"
				description={description}
				path="/solutions/founders"
				lowPrice={40}
				offerCount={3}
			/>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>For founders</p>
						<h1>We make payroll boring. You sign off.</h1>
						<p className={styles.lede}>
							You started a company, not a payroll department. Fernly runs pay, files every
							federal, state and local payroll tax form, and gives you a named specialist to
							ask when something looks off.
						</p>
					</div>
					<img
						src="/illustrations/run-payroll.svg"
						alt="Three steps of a Fernly pay run: review hours, preview taxes, approve"
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
						<h3>&ldquo;Payroll eats my Friday.&rdquo;</h3>
						<p>
							Every pay run means checking hours, double-checking withholding and hoping the
							number leaving your bank account is right.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;I don&apos;t know what I don&apos;t know.&rdquo;</h3>
						<p>
							State registrations, new-hire reports, quarterly returns. Nobody hands you the list,
							and the first sign of a miss is a penalty notice.
						</p>
					</div>
					<div className={styles.card}>
						<h3>&ldquo;I can&apos;t get a person on the phone.&rdquo;</h3>
						<p>
							Self-serve tools leave you alone with a help center. Legacy providers want a sales
							call before they&apos;ll tell you a price.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>How Fernly takes it off your plate</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Three steps to a pay run</h3>
						<p>
							Review hours, preview taxes, approve. You see exactly what leaves your account
							before you click, and pay runs are unlimited on every plan.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Taxes filed for you</h3>
						<p>
							We calculate, pay and file federal, state and local payroll taxes, including Form
							941 every quarter and W-2s and 1099-NECs every January.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Checked before payday</h3>
						<p>
							Every pay run is checked against 140 rules before it can be approved, so problems
							turn up on a Tuesday instead of in April.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A specialist who knows your company</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. They know
							your states and your pay schedule.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<blockquote className={styles.quote}>
					&ldquo;[Customer quote from a founder about handing payroll to Fernly]&rdquo;
					<footer>[Name, title, company]</footer>
				</blockquote>
			</section>

			<section className={styles.section}>
				<h2>Prices that fit on a napkin</h2>
				<p className={styles.lede}>
					A monthly base and a flat price per person. No setup fee, no charge per pay run and no
					&ldquo;contact sales&rdquo; for a 15-person company.
				</p>
				<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
