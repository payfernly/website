import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Pricing",
	description:
		"Simple per-person pricing for payroll. Essentials is $40 a month plus $8 per person; Plus adds next-day direct deposit, benefits administration and multi-state support.",
	alternates: { canonical: "/pricing" },
};

const PLANS = [
	{
		name: "Essentials",
		base: "$40",
		perPerson: "$8",
		blurb: "For teams in one state who want payroll and taxes handled.",
		features: [
			"Unlimited pay runs",
			"Federal, state and local tax filing",
			"W-2s and 1099-NECs",
			"Employee self-service portal",
			"Two-day direct deposit",
			"Email and chat support",
		],
		featured: false,
	},
	{
		name: "Plus",
		base: "$80",
		perPerson: "$12",
		blurb: "For growing teams with benefits and people in more than one state.",
		features: [
			"Everything in Essentials",
			"Next-day direct deposit",
			"Benefits administration and deductions",
			"Multi-state payroll and registrations",
			"PTO policies and accruals",
			"Phone support",
		],
		featured: true,
	},
	{
		name: "Premium",
		base: "$150",
		perPerson: "$18",
		blurb: "For teams that want an HR expert on call and help with audits.",
		features: [
			"Everything in Plus",
			"Access to certified HR advisors",
			"Tax notice resolution",
			"Custom pay rules and job costing",
			"Quarterly compliance review",
			"Priority phone support",
		],
		featured: false,
	},
];

export default function PricingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Pricing</p>
				<h1>One monthly base, then a flat price per person.</h1>
				<p className={styles.lede}>
					No setup fee, no charge per pay run, no year-end fee for W-2s. Contractors count as
					people only in the months you pay them. Cancel anytime.
				</p>
				<div className={styles.grid3}>
					{PLANS.map((plan) => (
						<div
							key={plan.name}
							className={plan.featured ? `${styles.card} ${styles.featured}` : styles.card}
						>
							<h3>{plan.name}</h3>
							<p>{plan.blurb}</p>
							<p className={styles.price}>
								{plan.perPerson} <small>per person / month</small>
							</p>
							<p>
								plus a {plan.base} monthly base
							</p>
							<ul className={styles.list}>
								{plan.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>What a team of 12 actually pays</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Plan</th>
							<th>Base</th>
							<th>12 people</th>
							<th>Monthly total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Essentials</td>
							<td>$40</td>
							<td>$96</td>
							<td>$136</td>
						</tr>
						<tr>
							<td>Plus</td>
							<td>$80</td>
							<td>$144</td>
							<td>$224</td>
						</tr>
						<tr>
							<td>Premium</td>
							<td>$150</td>
							<td>$216</td>
							<td>$366</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Questions we get a lot</h2>
				<h3>Is there a minimum team size?</h3>
				<p>
					No, but Fernly is designed for 5 to 50 people. Above 50, our Premium plan still works,
					and we&apos;ll tell you honestly when you&apos;ve outgrown us.
				</p>
				<h3>Do you charge to switch mid-year?</h3>
				<p>
					No. We import your year-to-date totals and file the quarterly returns for the quarters
					we cover. Your old provider files the ones before that.
				</p>
				<h3>What about annual billing?</h3>
				<p>
					Pay annually and the monthly base is waived. The per-person price stays the same.
				</p>
				<p>
					Still deciding? <Link href="/contact">Talk to our team</Link> and we&apos;ll price
					your exact headcount.
				</p>
			</section>
		</>
	);
}
