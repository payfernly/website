import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "How to File Form 941: A Small Business Guide",
	description:
		"What Form 941 is, who has to file it, the four quarterly deadlines, and a step-by-step walkthrough of filing your first quarterly federal payroll tax return.",
	alternates: { canonical: "/guides/how-to-file-form-941" },
};

export default function HowToFileForm941() {
	return (
		<article className={styles.narrow}>
			<p className={styles.eyebrow}>Guides</p>
			<h1>How to File Form 941: A Small Business Guide</h1>
			<p className={styles.lede}>
				You ran your first payroll. Now the IRS wants to hear about it, once a quarter, on Form
				941. Here&apos;s what goes on it and how to get it filed.
			</p>

			<h2>What Form 941 is</h2>
			<p>
				Form 941 is the Employer&apos;s Quarterly Federal Tax Return. It reports the wages you
				paid, the federal income tax you withheld from those wages, and the Social Security and
				Medicare tax owed by you and your employees. You pay those taxes through deposits during
				the quarter; the 941 tells the IRS what you owed so it can check the deposits against it.
			</p>

			<h2>Who has to file</h2>
			<p>
				If you pay wages to employees and withhold federal income tax, Social Security or Medicare
				tax, you file a 941 every quarter, even a quarter where you paid nobody. The exceptions
				are narrow:
			</p>
			<ul className={styles.list}>
				<li>Seasonal employers, for quarters when they have no wages to report</li>
				<li>Employers the IRS has told in writing to file the annual Form 944 instead</li>
				<li>Employers of household or farm workers, who use Schedule H or Form 943</li>
			</ul>
			<p>
				Paying only contractors? Then there&apos;s no 941. Their payments go on Form 1099-NEC at
				the end of the year.
			</p>

			<h2>The four quarterly deadlines</h2>
			<p>Each return is due on the last day of the month after the quarter ends.</p>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Quarter</th>
						<th>Months covered</th>
						<th>Due</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Q1</td>
						<td>January to March</td>
						<td>April 30</td>
					</tr>
					<tr>
						<td>Q2</td>
						<td>April to June</td>
						<td>July 31</td>
					</tr>
					<tr>
						<td>Q3</td>
						<td>July to September</td>
						<td>October 31</td>
					</tr>
					<tr>
						<td>Q4</td>
						<td>October to December</td>
						<td>January 31</td>
					</tr>
				</tbody>
			</table>
			<p>
				If a deadline falls on a weekend or federal holiday, it moves to the next business day.
				If you made every deposit for the quarter on time and in full, you get until the 10th of
				the following month.
			</p>

			<h2>What you need before you start</h2>
			<ul className={styles.list}>
				<li>Your EIN, legal business name and address</li>
				<li>The number of employees you paid during the quarter</li>
				<li>Total wages, tips and other compensation paid in the quarter</li>
				<li>Total federal income tax withheld</li>
				<li>Wages subject to Social Security and Medicare tax, and the tax on each</li>
				<li>Your deposit schedule (monthly or semiweekly) and every deposit you made</li>
			</ul>
			<p>
				All of it comes from your payroll records. If the totals across your pay stubs don&apos;t
				add up to the numbers you&apos;re about to report, stop and fix that first.
			</p>

			<h2>Filing Form 941, step by step</h2>
			<h3>1. Fill in the header</h3>
			<p>
				Enter your EIN, name and address exactly as the IRS has them, and check the box for the
				quarter you&apos;re reporting.
			</p>
			<h3>2. Report wages and withholding (Part 1, lines 1 to 3)</h3>
			<p>
				Line 1 is the number of employees paid in the pay period that includes the 12th of the
				last month of the quarter. Line 2 is total wages. Line 3 is federal income tax withheld.
			</p>
			<h3>3. Work out Social Security and Medicare (lines 5a to 5d)</h3>
			<p>
				Multiply taxable wages by 12.4% for Social Security and 2.9% for Medicare. Those rates
				cover both the employer and employee shares. Add any Additional Medicare Tax withheld on
				wages over $200,000.
			</p>
			<h3>4. Total your liability and deposits (lines 6 to 14)</h3>
			<p>
				Add up your taxes, apply any adjustments, and enter the deposits you made for the
				quarter. The difference is either a balance due or an overpayment.
			</p>
			<h3>5. Tell the IRS your deposit schedule (Part 2)</h3>
			<p>
				Monthly depositors enter their liability for each month. Semiweekly depositors attach
				Schedule B with liability by pay date.
			</p>
			<h3>6. Sign and submit</h3>
			<p>
				E-file through IRS-approved software or a payroll provider, or mail the paper form to the
				address listed for your state in the 941 instructions. Pay any balance due through
				EFTPS, the Treasury&apos;s free Electronic Federal Tax Payment System. Enroll early: your
				PIN arrives by post and can take a week or more.
			</p>

			<h2>Common mistakes small businesses make</h2>
			<h3>Reporting liability that doesn&apos;t match deposits</h3>
			<p>
				The IRS compares the two. A gap of a few dollars is enough to trigger a notice and,
				often, a penalty.
			</p>
			<h3>Putting wages in the wrong quarter</h3>
			<p>
				Wages count in the quarter they&apos;re paid, not when they were earned. A December bonus
				paid on January 2 goes on the Q1 return.
			</p>
			<h3>Skipping a quarter with no payroll</h3>
			<p>
				Unless you&apos;re a seasonal filer or have closed your account, you still file a 941
				showing zero.
			</p>
			<h3>Mailing a payment with the return</h3>
			<p>
				Most employers have to deposit electronically. A check sent with the form can be treated
				as a late deposit.
			</p>

			<h2>Or let Fernly file it</h2>
			<p>
				Fernly prepares and files your 941 automatically for every pay run, and makes the
				deposits on your schedule, on every plan. Hiring in a new state too? Read our{" "}
				<Link href="/guides/state-registration-checklist">state registration checklist</Link>, or{" "}
				<Link href="/guides/state-registration-checklist">browse all our guides</Link>.
			</p>
		</article>
	);
}
