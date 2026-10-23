import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { STATES } from "@/lib/states";

export const metadata: Metadata = {
	title: "State payroll guide: compliance in all 50 states",
	description:
		"What triggers a state payroll registration, what changes from state to state, what a missed registration costs, and how Fernly catches it before payday. Tax filing in all 50 states for teams of 5 to 50.",
	alternates: { canonical: "/state-payroll-guide" },
};

export default function StatePayrollGuidePage() {
	return (
		<>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroLight}`}>
					<div>
						<p className={styles.eyebrow}>State payroll guide</p>
						<h1>Payroll is math. States aren&apos;t.</h1>
						<p className={styles.lede}>
							The math in small-business payroll is the easy part. The real risk is state and
							local compliance: the registration you didn&apos;t know you needed, the program
							that started this year. Fernly handles payroll tax filing in all 50 states for
							teams of 5 to 50.
						</p>
						<div className={styles.buttons}>
							<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
								See pricing
							</Link>
							<Link href="/features/compliance" className={styles.secondary}>
								What Fernly files for you
							</Link>
						</div>
					</div>
					<img
						src="/illustrations/states.svg"
						alt="A grid of US states with the ones where a company is registered highlighted"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>What triggers a state payroll registration</h2>
				<p className={styles.lede}>
					You don&apos;t register with a state because you want to. You register because
					something you did gave you an obligation there.
				</p>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>Nexus</h3>
						<p>
							Having people working in a state usually means that state expects you to withhold
							its income tax and pay into its unemployment fund, even if your company is based
							somewhere else.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Remote hires</h3>
						<p>
							Payroll generally follows where the employee works, not where your office is. One
							remote hire in a new state can mean a new set of accounts.
						</p>
					</div>
					<div className={styles.card}>
						<h3>The first paycheck</h3>
						<p>
							Most states want you registered before you withhold a single dollar. Some issue an
							account number in minutes; others take weeks. Start the day the offer is signed.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>What changes from state to state</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Item</th>
							<th>What varies</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Unemployment insurance</td>
							<td>
								Separate agency, separate account and your own rate. New employers get a
								standard rate at first, set by each state.
							</td>
						</tr>
						<tr>
							<td>Paid family and medical leave (FAMLI, PFL)</td>
							<td>
								A growing list of states, including Colorado, Washington, Oregon, New York and
								California, fund paid leave through payroll. Each has its own registration and
								contribution rules.
							</td>
						</tr>
						<tr>
							<td>Local taxes</td>
							<td>
								Some cities, counties and school districts levy their own payroll taxes, like
								Denver&apos;s Occupational Privilege Tax or Philadelphia&apos;s wage tax. They
								depend on the exact address.
							</td>
						</tr>
						<tr>
							<td>New-hire reporting</td>
							<td>Every state requires it, usually within 20 days of hire.</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>What a missed registration costs</h2>
				<p className={styles.lede}>
					A missed registration rarely shows up on payday. It shows up months later, as a notice
					from a state agency.
				</p>
				<ul className={styles.list}>
					<li>
						<strong>Penalties and interest.</strong> States can charge for late registration,
						late filing and late deposits.
					</li>
					<li>
						<strong>Back taxes.</strong> The contributions you should have been paying are
						still due, often for every pay period since the obligation started.
					</li>
					<li>
						<strong>Cleanup time.</strong> Amended returns, corrected W-2s and calls with the
						agency, usually during the busiest part of your year.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Fernly catches it before payday, not after</h2>
				<p className={styles.lede}>
					Catching a missing FAMLI registration on a Tuesday beats a penalty notice in April.
					When you add someone in a state you haven&apos;t paid in before, Fernly registers your
					withholding and unemployment accounts, files the new-hire report and adds the
					state&apos;s paid-leave program to payroll. Registrations are included on Plus and
					Premium.
				</p>
				<p className={styles.lede}>
					When rules change, our compliance team applies the update to your payroll before the
					effective date and tells you what changed. If you have questions, your named payroll
					specialist is a phone call away.
				</p>
				<div className={styles.buttons}>
					<Link href="/features/compliance" className={styles.secondary}>
						See everything Fernly files for you
					</Link>
					<Link href="/blog/hiring-in-a-new-state" className={styles.secondary}>
						Read: your first hire in a new state
					</Link>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Every state we run payroll in</h2>
				<p className={styles.lede}>
					All 50 of them. Fernly calculates, pays and files payroll taxes wherever your people
					work.
				</p>
				<ul className={styles.stateGrid}>
					{STATES.map((state) => (
						<li key={state.code} className={styles.stateTile}>
							{state.guide ? (
								<Link href={state.guide}>{state.name}</Link>
							) : (
								<strong>{state.name}</strong>
							)}
							<span>{state.guide ? "Read the state guide" : "Tax filing covered"}</span>
						</li>
					))}
				</ul>
			</section>

			<section className={styles.section}>
				<h2>See what it costs for your team</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. No setup fee and no year-end
					surprises.
				</p>
				<div className={styles.buttons}>
					<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
						See pricing
					</Link>
					<Link href="/contact" className={styles.secondary}>
						Talk to us
					</Link>
				</div>
			</section>
		</>
	);
}
