import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Your named payroll specialist";
const description =
	"Every Fernly account gets a named payroll specialist in Portland, Oregon who knows your company, your states and your pay schedule. Median response time last quarter: 11 minutes.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/features/specialist" },
};

export default function SpecialistPage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly Named payroll specialist"
				description={description}
				path="/features/specialist"
				lowPrice={40}
				offerCount={3}
			/>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>Your specialist</p>
						<h1>Payroll help from someone who already knows your company.</h1>
						<p className={styles.lede}>
							Every Fernly account gets a named payroll specialist based in Portland, Oregon.
							They know your business, your states and your pay schedule, so you never start
							from scratch. Median response time last quarter: 11 minutes.
						</p>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="The Fernly team in Portland, Oregon"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>A named specialist on every plan</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Plan</th>
							<th>Named payroll specialist</th>
							<th>Extra help</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Essentials</td>
							<td>Included</td>
							<td>—</td>
						</tr>
						<tr>
							<td>Plus</td>
							<td>Included</td>
							<td>—</td>
						</tr>
						<tr>
							<td>Premium</td>
							<td>Included</td>
							<td>Certified HR advisors, tax notice resolution and a quarterly compliance review</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>A person, not a ticket queue</h2>
				<p className={styles.lede}>
					Software runs the math. Your specialist is there for everything around it: the question
					about a new hire in another state, the one-off bonus run, the switch from biweekly to
					semimonthly pay. Because they already know your account, you get an
					answer instead of a list of questions.
				</p>
				<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
