import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "About",
	description:
		"Fernly was started in Portland, Oregon in 2021 by two people who ran payroll at small companies and got tired of tools built for 5,000 employees.",
	alternates: { canonical: "/about" },
};

export default function AboutPage() {
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>About Fernly</p>
				<h1>We&apos;re the payroll team small companies don&apos;t have.</h1>
				<p className={styles.lede}>
					Fernly started in 2021, in a co-working space above a bike shop in Portland, Oregon.
					Priya Raman had spent six years running payroll and HR at a 30-person design studio.
					Marcus Lindqvist had built billing systems at a fintech. Between them they had filed
					enough amended 941s to know that the hard part of small-company payroll isn&apos;t the
					math — it&apos;s the dozens of state agencies, deadlines and registrations nobody tells
					you about.
				</p>
			</section>

			<section className={styles.section}>
				<img
					src="/illustrations/team.svg"
					alt="Four members of the Fernly team sitting side by side at a shared desk"
					width={640}
					height={300}
				/>
			</section>

			<section className={styles.narrow}>
				<h2>What we believe</h2>
				<h3>Small teams deserve expert help</h3>
				<p>
					Every Fernly customer has a named payroll specialist. They know your company, your
					states and your pay schedule, and you can call them.
				</p>
				<h3>Prices should fit on a napkin</h3>
				<p>
					A monthly base and a flat price per person. No setup fees, no surprise year-end
					charges, no &ldquo;contact sales&rdquo; for a 15-person company.
				</p>
				<h3>Get it right before payday</h3>
				<p>
					We would rather flag a missing tax registration on a Tuesday than send you a penalty
					notice in April. Every pay run is checked against 140 rules before it can be approved.
				</p>

				<h2>Fernly today</h2>
				<p>
					We&apos;re a team of 34, mostly in Portland with a few people in Denver and Raleigh. We
					pay about 2,600 companies&apos; employees every payday, across all 50 states. We&apos;re
					backed by Ridgeline Ventures and a group of angel investors who run small businesses
					themselves.
				</p>
				<p>
					Want to work with us? We&apos;re hiring payroll specialists and engineers.{" "}
					<Link href="/contact">Get in touch</Link>.
				</p>
			</section>
		</>
	);
}
