import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import guide from "./page.module.css";

export const metadata: Metadata = {
	title: { absolute: "Contractor vs. Employee Payroll Guide | Fernly" },
	description:
		"Paying a mix of 1099 contractors and W-2 employees? This guide covers payroll obligations, tax forms, and compliance differences for small U.S. teams.",
	alternates: { canonical: "/guides/contractor-vs-employee-payroll" },
};

const COMPARISON = [
	["Federal income tax withholding", "Yes", "No"],
	["FICA withholding + employer match", "Yes", "No"],
	["State income tax withholding", "Usually", "No"],
	["Quarterly Form 941", "Yes", "No"],
	["FUTA / SUTA", "Yes", "No"],
	["Year-end tax form", "W-2", "1099-NEC (if $600+)"],
	["W-9 required before first payment", "No", "Yes"],
	["Benefits eligibility", "Typically yes", "No"],
];

export default function ContractorVsEmployeePayrollPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.grid2}>
					<div>
						<h1>Paying Contractors vs. Employees: What Every Founder Needs to Know</h1>
						<p className={styles.lede}>
							Handle payroll correctly for both worker types — without getting buried in IRS
							forms.
						</p>
						<div className={styles.buttons}>
							<Link href="#" className={`${styles.primary} ${guide.getStarted}`}>
								Get started with Fernly
							</Link>
						</div>
					</div>
					<img
						src="/illustrations/paystub.svg"
						alt="A Fernly pay stub showing gross pay, taxes withheld and net pay"
						width={480}
						height={360}
					/>
				</div>
			</section>

			<section className={styles.narrow}>
				<h2>The gap that trips up small teams</h2>
				<p>
					Many early-stage teams pay contractors and employees at the same time. The money moves
					similarly — someone does work, you pay them — but the payroll obligations behind each
					payment are completely different. Mix them up, and you&apos;re looking at misfiled tax
					forms, unexpected tax bills, or penalties that arrive months after the fact.
				</p>
				<p>
					This guide walks through the core payroll differences so you know what each worker type
					requires from you before you run your next pay cycle.
				</p>
			</section>

			<section className={styles.narrow}>
				<h2>What makes an employee an employee</h2>
				<p>
					When someone is classified as a W-2 employee, you take on a set of ongoing payroll
					responsibilities every pay period.
				</p>
				<ul className={styles.list}>
					<li>
						<strong>Withhold federal income tax</strong> from each paycheck, based on the
						employee&apos;s W-4.
					</li>
					<li>
						<strong>Withhold and match FICA taxes</strong> — Social Security and Medicare —
						on every dollar of wages.
					</li>
					<li>
						<strong>Withhold state income tax</strong> where applicable, which varies by
						state.
					</li>
					<li>
						<strong>Remit payroll taxes</strong> to the IRS on a deposit schedule
						(semi-weekly or monthly, depending on your total tax liability).
					</li>
					<li>
						<strong>File Form 941</strong> each quarter to report wages paid and taxes
						withheld.
					</li>
					<li>
						<strong>Issue a W-2</strong> to each employee and to the IRS by the January 31
						deadline after each tax year.
					</li>
					<li>
						<strong>Pay federal unemployment tax (FUTA)</strong> and, in most states, state
						unemployment tax (SUTA) as well.
					</li>
				</ul>
				<p>
					If you offer benefits — health insurance, retirement contributions, paid leave —
					those tie directly to the employee relationship and require their own
					reconciliation each period.
				</p>
			</section>

			<section className={styles.narrow}>
				<h2>What makes a contractor a contractor</h2>
				<p>
					A 1099-NEC contractor is not your employee. They set their own schedule, use their
					own tools, and handle their own tax obligations. Your payroll responsibilities are
					narrower.
				</p>
				<ul className={styles.list}>
					<li>
						<strong>No withholding.</strong> You pay the contractor&apos;s full invoiced
						amount. Federal and state income tax, self-employment tax — those are the
						contractor&apos;s problem, not yours.
					</li>
					<li>
						<strong>No payroll tax match.</strong> FICA, FUTA, SUTA — none of these apply to
						contractor payments.
					</li>
					<li>
						<strong>No quarterly 941.</strong> Contractor payments are not reported on Form
						941.
					</li>
					<li>
						<strong>Issue a 1099-NEC</strong> for any contractor you paid $600 or more
						during the calendar year. File copies with the IRS and send one to the
						contractor by January 31.
					</li>
					<li>
						<strong>Collect a W-9</strong> before the first payment. This gives you the
						contractor&apos;s taxpayer identification number so the 1099-NEC is accurate.
					</li>
				</ul>
				<p>
					Missing a 1099-NEC or filing it late carries its own IRS penalty schedule, so
					tracking contractor payments throughout the year — not just in January — keeps the
					year-end process manageable.
				</p>
			</section>

			<section className={styles.narrow}>
				<h2>Side by side: the key payroll differences</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th />
							<th>W-2 Employee</th>
							<th>1099 Contractor</th>
						</tr>
					</thead>
					<tbody>
						{COMPARISON.map(([label, employee, contractor]) => (
							<tr key={label}>
								<td>{label}</td>
								<td>{employee}</td>
								<td>{contractor}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.narrow}>
				<h2>Classification is a legal question — not a payroll one</h2>
				<p>
					Payroll systems follow the classification you set. They do not determine it. Whether a
					worker is legally an employee or a contractor depends on the nature of the working
					relationship — behavioral control, financial control, and the type of relationship — as
					defined by the IRS and, separately, by state agencies.
				</p>
				<p>
					Misclassification is one of the more common and costly payroll mistakes a small
					business can make. The IRS offers a Voluntary Classification Settlement Program for
					employers who want to correct past misclassification. If you have any doubt about how a
					worker should be classified, consult a qualified tax or employment attorney before you
					run their first paycheck.
				</p>
			</section>

			<section className={styles.narrow}>
				<h2>How Fernly handles both worker types</h2>
				<p>
					Fernly is built for small U.S. teams that pay a mix of employees and contractors. On the
					employee side, Fernly calculates withholding, matches FICA, files Form 941, and produces
					W-2s at year end. On the contractor side, Fernly tracks payments and generates
					1099-NECs so you&apos;re ready when January arrives.
				</p>
				<p>
					Multi-state teams get the same coverage across states — payroll tax registration, state
					withholding, and unemployment filings included. You review, preview, and approve each
					pay run before anything moves.
				</p>
				<Link href="#" className={styles.secondary}>
					See how Fernly works
				</Link>
			</section>

			<section className={styles.narrow}>
				<h2>Frequently asked questions</h2>
				<h3>Do I need to file anything for contractors who earn less than $600?</h3>
				<p>
					You are not required to file a 1099-NEC for a contractor paid less than $600 in a
					calendar year. You still owe the contractor the full amount — the $600 threshold is
					a reporting threshold, not a payment threshold.
				</p>
				<h3>Can I pay a contractor through payroll?</h3>
				<p>
					You can cut a payment through a payroll system, but the classification does not
					change based on how you pay. A contractor paid through payroll is still a
					contractor for tax purposes — meaning you should not withhold income or FICA taxes
					from that payment.
				</p>
				<h3>What if I hire someone in a state with no income tax?</h3>
				<p>
					No state income tax withholding is required for employees in states without an
					income tax. Federal withholding and FICA still apply. Some states with no income tax
					still have unemployment insurance requirements, so check state-specific rules for
					every state where you have employees.
				</p>
				<h3>When do I need to deposit payroll taxes?</h3>
				<p>
					The IRS assigns a deposit schedule — either semi-weekly or monthly — based on your
					total tax liability in a prior lookback period. New employers generally start on a
					monthly schedule. Fernly handles deposit timing and remittance so you stay on
					schedule.
				</p>
				<h3>What forms do I need before a new employee&apos;s first paycheck?</h3>
				<p>
					At minimum: a completed W-4 (federal withholding elections) and any equivalent
					state withholding form. You&apos;ll also need to complete Form I-9 to verify work
					authorization. For contractors, collect a signed W-9 before the first payment.
				</p>
			</section>

			<section className={styles.narrow}>
				<h2>Ready to sort out your payroll?</h2>
				<p>
					Fernly takes the tax math off your plate for both employees and contractors —
					withholding, filings, year-end forms, and multi-state compliance included. Switching
					takes one afternoon.
				</p>
				<div className={styles.buttons}>
					<Link href="#" className={`${styles.primary} ${guide.getStarted}`}>
						Get started with Fernly
					</Link>
					<Link href="/guides/state-registration-checklist" className={styles.secondary}>
						See the state registration checklist
					</Link>
				</div>
			</section>
		</>
	);
}
