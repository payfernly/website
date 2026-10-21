import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50 on pricing, pay runs, compliance, benefits and support. Fernly Essentials is $8 per person per month plus a $40 base.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Published on our site. Essentials is $8 per person per month plus a $40 monthly base, with no setup fee.",
		rippling: "Quoted by Rippling based on the modules you choose. Check with Rippling directly.",
	},
	{
		topic: "Pay runs",
		fernly: "Unlimited pay runs and free off-cycle runs on every plan.",
		rippling: "Payroll is one module within a broader HR, IT and finance platform.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing on every plan. State registrations handled for you on Plus and Premium.",
		rippling: "Payroll tax filing is part of its payroll product.",
	},
	{
		topic: "Benefits",
		fernly: "Benefits administration and deductions included on Plus and Premium.",
		rippling: "Benefits administration is offered as a separate module.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon. Email and chat on Essentials, phone on Plus and Premium.",
		rippling: "Support options depend on your plan and the modules you buy.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Rippling is built to run HR, IT and finance for companies of many sizes. Fernly does
					one job — payroll, benefits and tax filings — for US teams of 5 to 50, at a price you
					can see before you talk to anyone.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>Fernly and Rippling compared for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Fernly</th>
							<th scope="col">Rippling</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.topic}>
								<th scope="row">{row.topic}</th>
								<td>{row.fernly}</td>
								<td>{row.rippling}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>See exactly what you&apos;d pay</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. No charge per pay run and no year-end
					fee for W-2s.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
