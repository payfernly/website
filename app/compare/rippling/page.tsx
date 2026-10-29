import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import comparisonStyles from "./page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Fernly vs Rippling" },
	description:
		"Compare Fernly and Rippling for teams of 5 to 50 across pricing, pay runs, compliance, benefits and support. See Fernly's plans and what to check before choosing.",
	alternates: { canonical: "/compare/rippling" },
};

export default function RipplingComparisonPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Start with the payroll your team needs today: regular paydays, tax filings and
					help when you need it. Compare the details below before choosing a provider.
				</p>
				<div className={comparisonStyles.tableScroll}>
					<table className={styles.table}>
						<caption>Fernly and Rippling: pricing, payroll and support for small teams</caption>
						<thead>
							<tr>
								<th scope="col">What to compare</th>
								<th scope="col">Fernly</th>
								<th scope="col">Rippling</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Pricing</th>
								<td>Essentials: $8 per person per month plus a $40 monthly base.</td>
								<td>Ask Rippling for current pricing for your team and the services you need.</td>
							</tr>
							<tr>
								<th scope="row">Pay runs</th>
								<td>Unlimited pay runs on every plan, including off-cycle runs.</td>
								<td>[Rippling pay-run allowances and off-cycle terms]</td>
							</tr>
							<tr>
								<th scope="row">Compliance</th>
								<td>Federal, state and local tax filing, W-2s and 1099-NECs. Multi-state payroll and registrations on Plus and Premium.</td>
								<td>[Rippling tax filing and multi-state compliance coverage]</td>
							</tr>
							<tr>
								<th scope="row">Benefits</th>
								<td>Benefits administration and payroll deductions on Plus and Premium.</td>
								<td>[Rippling benefits administration and plan requirements]</td>
							</tr>
							<tr>
								<th scope="row">Support</th>
								<td>Email and chat on Essentials; phone support on Plus; priority phone support on Premium.</td>
								<td>[Rippling support channels and plan requirements]</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Find the Fernly plan for your team</h2>
				<p className={styles.lede}>
					See what each plan includes, from payroll and tax filings to benefits and phone support.
				</p>
				<Link href="/pricing" className={styles.primary}>Compare Fernly plans</Link>
			</section>
		</>
	);
}
