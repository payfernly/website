import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Gusto",
	description:
		"Comparing Fernly and Gusto for teams of 5 to 50: pricing, pay runs, tax compliance, benefits and support, side by side. Fernly Essentials is $40 a month plus $8 per person.",
	alternates: { canonical: "/compare/gusto" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Essentials: $40 monthly base plus $8 per person. Plus: $80 base plus $12 per person. Premium: $150 base plus $18 per person. No setup fee, and the base is waived on annual billing.",
		gusto:
			"Simple: $49 monthly base plus $6 per person. Plus: $80 base plus $12 per person. Premium: $180 base plus $22 per person.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited pay runs, including free off-cycle runs, on every plan. Two-day direct deposit on Essentials, next-day on Plus and Premium.",
		gusto:
			"Unlimited payroll runs on every plan. Next-day direct deposit on Plus and Premium.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs on every plan. State tax account registration and multi-state payroll on Plus and Premium.",
		gusto:
			"Automatic federal, state and local tax filing, W-2s and 1099s. Simple covers one state; multi-state payroll starts on Plus.",
	},
	{
		topic: "Benefits",
		fernly:
			"Licensed broker in all 50 states. Medical, dental, vision, 401(k), FSA, HSA and commuter benefits, with deductions synced to payroll on Plus and Premium.",
		gusto:
			"Health insurance, 401(k) and other benefits through Gusto and its partners, with deductions synced to payroll.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon for every account. Email and chat on Essentials, phone on Plus, priority phone and HR advisors on Premium.",
		gusto:
			"Email, chat and phone support. Premium adds dedicated support and access to HR experts.",
	},
];

export default function CompareGustoPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Fernly vs Gusto</p>
						<h1>Payroll built only for teams of 5 to 50.</h1>
						<p className={styles.lede}>
							Fernly is for US companies that have outgrown spreadsheets but don&apos;t have a
							payroll department. We pay your people, file every federal and state payroll tax
							form, keep benefits deductions in sync, and give you a named specialist you can
							call.
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
					Gusto details are taken from Gusto&apos;s published pricing and plan pages and may
					change. Check gusto.com for their current offer. Gusto is a trademark of Gusto, Inc.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what Fernly costs for your team</h2>
				<p className={styles.lede}>
					Switching takes one afternoon, and we&apos;ll run a parallel payroll with you before
					your first real one goes out.
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
