import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Rippling",
	description:
		"How Fernly and Rippling compare for US teams of 5 to 50 on pricing, pay runs, compliance, benefits and support. Fernly Essentials is $8 per person a month plus a $40 base.",
	alternates: { canonical: "/compare/rippling" },
};

const ROWS = [
	{
		topic: "Pricing",
		fernly:
			"Published on our site. Essentials is $8 per person per month plus a $40 monthly base, with no setup fee and no charge per pay run.",
		rippling:
			"Built from modules you pick, so your price depends on which ones you add. Ask Rippling for a quote.",
	},
	{
		topic: "Pay runs",
		fernly:
			"Unlimited regular and off-cycle runs on every plan. Two-day direct deposit, or next day on Plus and Premium.",
		rippling:
			"Payroll is one module in a wider HR, IT and finance platform.",
	},
	{
		topic: "Compliance",
		fernly:
			"Federal, state and local tax filing on every plan. State tax account registration on Plus and Premium.",
		rippling:
			"Tax filing included with payroll. Built to cover multi-state and international teams.",
	},
	{
		topic: "Benefits",
		fernly:
			"Benefits administration and deductions on Plus and Premium, synced straight into payroll.",
		rippling:
			"Benefits administration available as an add-on module.",
	},
	{
		topic: "Support",
		fernly:
			"A named payroll specialist in Portland, Oregon. Email and chat on Essentials, phone on Plus, priority phone on Premium.",
		rippling:
			"Support options depend on your plan. Check with Rippling for details.",
	},
];

export default function CompareRipplingPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Rippling for teams of 5 to 50</h1>
				<p className={styles.lede}>
					Rippling is a broad platform for HR, IT and finance that grows into a large company.
					Fernly does one job, payroll, benefits and tax filings, for US teams of 5 to 50
					people, at a price you can see before you talk to anyone.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={styles.table}>
					<caption>How Fernly and Rippling compare for teams of 5 to 50</caption>
					<thead>
						<tr>
							<th scope="col">Topic</th>
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
				<h2>When Fernly is the better fit</h2>
				<p className={styles.lede}>
					If you want payroll and taxes handled without building out an HR platform first,
					Fernly is set up in an afternoon. We import your year-to-date totals and run a parallel
					payroll with you before your first real one goes out.
				</p>
				<Link href="/pricing" className={styles.primary}>
					See Fernly pricing
				</Link>
			</section>
		</>
	);
}
