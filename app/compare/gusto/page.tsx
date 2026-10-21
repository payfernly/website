import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Gusto — Payroll for teams of 5 to 50" },
	description:
		"Comparing Fernly and Gusto for teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side. Fernly Essentials is $8 per person plus a $40 base.",
	alternates: { canonical: "/compare/gusto" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person / month plus a $40 monthly base. Plus is $12 plus $80; Premium is $18 plus $150. No setup fee, and the base is waived on annual billing.",
		gusto:
			"Simple is $6 per person / month plus a $49 monthly base. Plus is $12 plus $80; Premium is $22 plus $180.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs, on every plan. Two-day direct deposit, or next day on Plus and Premium.",
		gusto: "Unlimited pay runs on every plan. Next-day direct deposit on higher plans.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing on every plan, including Form 941, W-2s and 1099-NECs. State registrations and multi-state payroll on Plus and Premium.",
		gusto:
			"Federal, state and local tax filing on every plan. Multi-state payroll on Plus and Premium.",
	},
	{
		topic: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Health, dental, vision, 401(k), FSA and HSA, with deductions synced to payroll on Plus and Premium.",
		gusto: "Health insurance, 401(k) and other benefits through Gusto and its partners.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon. Email and chat on Essentials, phone on Plus, priority phone and certified HR advisors on Premium.",
		gusto: "Customer support on every plan, with priority support and HR resources on Premium.",
	},
];

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Fernly vs Gusto</p>
						<h1>Payroll built for 5 to 50 people, not 5 to 5,000.</h1>
						<p className={styles.lede}>
							Fernly is for US companies that have outgrown spreadsheets but don&apos;t have a
							payroll department. You get a named specialist who knows your states, every tax
							form filed for you, and a price that fits on a napkin.
						</p>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="A small team working together"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th></th>
							<th>Fernly</th>
							<th>Gusto</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.topic}>
								<td>
									<strong>{row.topic}</strong>
								</td>
								<td>{row.fernly}</td>
								<td>{row.gusto}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>
					Gusto details are taken from its public pricing page. Plans and prices change, so check
					gusto.com for the latest.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					Tell us your headcount and states and we&apos;ll price it exactly. If you&apos;re
					switching mid-year, we import your year-to-date totals and run a parallel payroll with
					you first.
				</p>
				<div className={styles.buttons}>
					<Link href="/pricing" className={styles.primary}>
						See pricing
					</Link>
					<Link href="/contact" className={styles.secondary}>
						Book a 20-minute demo
					</Link>
				</div>
			</section>
		</>
	);
}
