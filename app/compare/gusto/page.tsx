import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto for teams of 5 to 50",
	description:
		"Comparing Fernly and Gusto for small US teams: pricing, pay runs, tax compliance, benefits and support, side by side. Fernly Essentials is $40 a month plus $8 per person.",
	alternates: { canonical: "/compare/gusto" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials is $8 per person per month plus a $40 monthly base. Plus is $12 per person plus $80. No setup fee, and the base is waived on annual billing.",
		gusto:
			"Simple is listed at $49 a month plus $6 per person, and Plus at $80 a month plus $12 per person. See gusto.com for current pricing.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs, on every plan. Two-day direct deposit on Essentials, next-day on Plus and Premium.",
		gusto: "Unlimited pay runs on every plan. Faster direct deposit is available on higher tiers.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs on every plan. Multi-state payroll and state tax registrations on Plus and Premium.",
		gusto:
			"Automatic federal, state and local tax filing, W-2s and 1099s on every plan. Multi-state payroll on higher tiers.",
	},
	{
		topic: "Benefits",
		fernly:
			"Benefits administration and deductions on Plus and Premium, through Fernly's own licensed brokerage in all 50 states.",
		gusto: "Health insurance and 401(k) options available through Gusto's partners and brokerage.",
	},
	{
		topic: "Support",
		fernly:
			"Email and chat on Essentials, phone on Plus, priority phone and certified HR advisors on Premium.",
		gusto: "Email, chat and phone support, with priority support and HR resources on higher tiers.",
	},
];

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Fernly vs Gusto</p>
				<h1>Payroll built only for teams of 5 to 50.</h1>
				<p className={styles.lede}>
					Gusto is a solid choice for a wide range of businesses. Fernly is narrower on purpose:
					we build for US companies with 5 to 50 people that want payroll, taxes and benefits
					handled without becoming payroll experts themselves.
				</p>
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
				<p className={styles.postMeta}>
					Gusto details are based on its publicly listed plans and may change. Check gusto.com
					for current pricing and features.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					Tell us your headcount and the states you pay in, and we&apos;ll price your exact
					setup. Switching mid-year costs nothing — we import your year-to-date totals.
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
