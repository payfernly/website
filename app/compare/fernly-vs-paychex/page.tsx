import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import local from "./compare.module.css";

export const metadata: Metadata = {
	title: "Fernly vs Paychex for teams of 5 to 50",
	description:
		"Fernly vs Paychex for a small US team: published pricing, who you can call, tax filing, benefits and HR, and switching, with Paychex's details sourced from its own pages.",
	alternates: { canonical: "/compare/fernly-vs-paychex" },
};

const READ_ON = "November 26, 2026";

const SOURCES = {
	compare: {
		url: "https://www.paychex.com/payroll/compare-payroll-solutions",
		label: "Paychex, Compare payroll solutions",
	},
	smallBusiness: {
		url: "https://www.paychex.com/payroll/small-business-payroll",
		label: "Paychex, Small business payroll",
	},
	payroll: {
		url: "https://www.paychex.com/payroll",
		label: "Paychex, Payroll",
	},
	home: {
		url: "https://www.paychex.com/",
		label: "Paychex home page",
	},
} as const;

type SourceKey = keyof typeof SOURCES;

function Source({ keys }: { keys: SourceKey[] }) {
	return (
		<small className={local.source}>
			Source:{" "}
			{keys.map((key, i) => (
				<span key={key}>
					{i > 0 ? "; " : ""}
					<a href={SOURCES[key].url} rel="noopener" target="_blank">
						{SOURCES[key].label}
					</a>
				</span>
			))}
			, read {READ_ON}
		</small>
	);
}

const ROWS: { label: string; fernly: string; paychex: string; sources: SourceKey[] }[] = [
	{
		label: "Pricing",
		fernly:
			"Every plan is published: $8, $12 or $18 per person a month, plus a $40, $80 or $150 monthly base. No setup fee, no per-pay-run charge, no year-end W-2 fee.",
		paychex:
			"“Plans starting at $65/mo + $8 per employee.” Its four packages, Basic, Foundations, Advanced and Complete, each show “Request Pricing.”",
		sources: ["compare"],
	},
	{
		label: "Who you can call",
		fernly:
			"A named payroll specialist on every account. Email and chat support on Essentials, phone support on Plus, priority phone support on Premium.",
		paychex:
			"Unlimited payroll processing “with the option to work with a dedicated payroll specialist.” HR business partners answer compliance questions. A 24/7 online portal and mobile app.",
		sources: ["compare", "smallBusiness"],
	},
	{
		label: "Tax filing",
		fernly:
			"Federal, state and local tax filing, W-2s and 1099-NECs on every plan. Multi-state payroll and registrations on Plus. Tax notice resolution on Premium.",
		paychex:
			"Automatically calculates, withholds and files federal, state and local taxes through its tax service, Taxpay. W-2 and 1099 year-end processing, garnishment payment services, and an SUI service add-on.",
		sources: ["compare", "smallBusiness"],
	},
	{
		label: "Benefits and HR",
		fernly:
			"Benefits administration and deductions, plus PTO policies, on Plus. Certified HR advisors on Premium. Not a PEO, an HRIS or a recruiting suite.",
		paychex:
			"Payroll, HR, recruiting, 401(k) and business insurance in one platform. HR extras such as compliance reporting, handbooks and labor law posters, and add-ons such as applicant tracking, learning management and time and attendance.",
		sources: ["home", "compare"],
	},
	{
		label: "Switching",
		fernly:
			"No charge to switch mid-year. We import your year-to-date totals.",
		paychex: "“No long-term commitment.” Set-up options: Self, Assisted and Managed.",
		sources: ["compare"],
	},
	{
		label: "Built for",
		fernly:
			"US teams of 5 to 50. We'll tell you honestly when you've outgrown us.",
		paychex:
			"Plans for businesses of any size, including midsize to enterprise. Paychex says it serves “~840,000 businesses” and that “1 in 11 U.S. private-sector workers get paid through Paychex.”",
		sources: ["payroll", "home"],
	},
];

export default function FernlyVsPaychexPage() {
	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs Paychex, for teams of 5 to 50.</h1>
				<p className={styles.lede}>
					Both run payroll and file your federal, state and local taxes. The differences are in
					how the price is shown, who you talk to, and how much else comes in the box. Here&apos;s
					a plain side-by-side, with every Paychex detail taken from Paychex&apos;s own pages.
				</p>
				<div className={styles.buttons}>
					<Link href="/contact" className={`${styles.primary} ${styles.primaryDeep}`}>
						Talk to our team
					</Link>
					<Link href="/pricing" className={styles.secondary}>
						See pricing
					</Link>
				</div>
				<p className={local.readDate}>
					Paychex details were read on paychex.com on {READ_ON}. Prices and packages change, so
					check the linked pages before you decide.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Side by side</h2>
				<table className={`${styles.table} ${local.table}`}>
					<thead>
						<tr>
							<th></th>
							<th>Fernly</th>
							<th>Paychex</th>
						</tr>
					</thead>
					<tbody>
						{ROWS.map((row) => (
							<tr key={row.label}>
								<td>
									<strong>{row.label}</strong>
								</td>
								<td data-label="Fernly">{row.fernly}</td>
								<td data-label="Paychex">
									{row.paychex}
									<Source keys={row.sources} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>What you&apos;ll pay, and how sure you can be of it</h2>
				<div className={local.body}>
					<p>
						Fernly publishes every plan on our <Link href="/pricing">pricing page</Link>: a
						monthly base plus a flat price per person. Contractors count as people only in the
						months you pay them, and if you pay annually the monthly base is waived.
					</p>
					<p>
						Paychex publishes a starting price, “Plans starting at $65/mo + $8 per employee,” and
						shows “Request Pricing” for each of its four packages.
						<Source keys={["compare"]} />
					</p>
					<p>Here&apos;s what that looks like for a team of 12.</p>
				</div>
				<table className={`${styles.table} ${local.table}`}>
					<thead>
						<tr>
							<th>Option</th>
							<th>How it adds up</th>
							<th>Monthly total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>Fernly Essentials</strong>
							</td>
							<td data-label="How it adds up">$40 base + 12 × $8</td>
							<td data-label="Monthly total">$136</td>
						</tr>
						<tr>
							<td>
								<strong>Fernly Plus</strong>
							</td>
							<td data-label="How it adds up">$80 base + 12 × $12</td>
							<td data-label="Monthly total">$224</td>
						</tr>
						<tr>
							<td>
								<strong>Fernly Premium</strong>
							</td>
							<td data-label="How it adds up">$150 base + 12 × $18</td>
							<td data-label="Monthly total">$366</td>
						</tr>
						<tr>
							<td>
								<strong>Paychex starting price</strong>
							</td>
							<td data-label="How it adds up">$65 + 12 × $8</td>
							<td data-label="Monthly total">$161 (starting-price figure)</td>
						</tr>
					</tbody>
				</table>
				<p className={local.tableNote}>
					The Paychex line is simple arithmetic on its published starting price, not a quote. It
					covers a starting plan whose inclusions differ from any Fernly plan, so the two
					aren&apos;t a like-for-like total. To compare properly, get a Paychex quote for your
					headcount and set it next to the Fernly plan that covers the same things.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Who picks up when you have a question</h2>
				<div className={local.body}>
					<p>
						Every Fernly account has a named payroll specialist. How you reach support depends on
						the plan: email and chat on Essentials, phone on Plus, and priority phone on Premium,
						which also adds access to certified HR advisors.
					</p>
					<p>
						Paychex&apos;s payroll services include unlimited payroll processing “with the option
						to work with a dedicated payroll specialist.” It also says its HR business partners
						answer compliance questions, and it offers a 24/7 online portal and mobile app. If a
						dedicated specialist matters to you, ask Paychex which package includes it.
						<Source keys={["compare", "smallBusiness"]} />
					</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Which taxes get filed</h2>
				<div className={local.body}>
					<p>
						On every Fernly plan we file your federal, state and local payroll taxes and prepare
						W-2s and 1099-NECs. Plus adds multi-state payroll and state registrations, for when
						you hire outside your home state. Premium adds tax notice resolution and a quarterly
						compliance review. Garnishments are covered too: upload the order and we set up the
						deduction and send payments to the agency. More on our{" "}
						<Link href="/features/payroll">payroll page</Link>.
					</p>
					<p>
						Paychex automatically calculates, withholds and files federal, state and local taxes,
						through an automatic tax administration service it calls Taxpay. It also lists W-2 and
						1099 year-end processing and garnishment payment services, with an SUI service
						available as an add-on.
						<Source keys={["compare", "smallBusiness"]} />
					</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Benefits and HR</h2>
				<div className={local.body}>
					<p>
						This is where Paychex goes wider. It offers payroll, HR, recruiting, 401(k) and
						business insurance in one platform, HR extras such as compliance reporting, handbooks
						and labor law posters, and add-ons such as applicant tracking, learning management,
						time and attendance and job costing.
						<Source keys={["home", "compare"]} />
					</p>
					<p>
						Fernly is narrower on purpose: payroll, tax filing and benefits. On Plus we handle
						benefits administration and deductions, and those deductions sync from enrollment
						straight into payroll, with no spreadsheet in the middle. Premium adds certified HR
						advisors and custom pay rules and job costing. Fernly isn&apos;t a PEO, an HRIS or a
						recruiting suite, and we don&apos;t run international payroll.
					</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Switching</h2>
				<div className={local.body}>
					<p>
						There&apos;s no charge to switch to Fernly mid-year. We import your year-to-date
						totals and file the quarterly returns for the quarters we cover; your old provider
						files the ones before that. Our guide to{" "}
						<Link href="/blog/switching-payroll-mid-year">switching payroll mid-year</Link> has
						the checklist.
					</p>
					<p>
						Paychex says there&apos;s “No long-term commitment,” and offers three set-up options:
						Self, Assisted and Managed.
						<Source keys={["compare"]} />
					</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Who should pick which</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Paychex is likely the better fit if</h3>
						<ul className={styles.list}>
							<li>
								You want payroll, HR, recruiting, 401(k) and business insurance from one
								provider.
							</li>
							<li>
								You&apos;re past 50 people, or expect to be soon, and want to keep the same
								platform as you grow.
							</li>
							<li>
								You need add-ons like applicant tracking, learning management or time and
								attendance. Fernly isn&apos;t a recruiting suite or a time-tracking tool.
							</li>
							<li>You&apos;d like to choose how hands-on your setup is.</li>
						</ul>
					</div>
					<div className={styles.card}>
						<h3>Fernly is likely the better fit if</h3>
						<ul className={styles.list}>
							<li>You&apos;re a US team of 5 to 50 people.</li>
							<li>
								You want to see the full price for your headcount before you talk to anyone.
							</li>
							<li>You want a named payroll specialist on your account.</li>
							<li>
								You want benefits deductions to flow from enrollment into payroll without a
								spreadsheet.
							</li>
							<li>
								You&apos;re switching mid-year and want your year-to-date totals brought over at
								no charge.
							</li>
						</ul>
					</div>
				</div>
				<p className={local.tableNote}>
					If you&apos;re somewhere in between, tell us about your team. If we&apos;re not the
					right fit, we&apos;ll say so.
				</p>
			</section>

			<section className={styles.section}>
				<h2>See what your team would pay</h2>
				<p className={styles.lede}>
					Check the plans for your headcount, or talk to our team and we&apos;ll price your
					exact headcount.
				</p>
				<div className={styles.buttons}>
					<Link href="/contact" className={`${styles.primary} ${styles.primaryDeep}`}>
						Talk to our team
					</Link>
					<Link href="/pricing" className={styles.secondary}>
						See pricing
					</Link>
				</div>
			</section>

			<section className={`${styles.section} ${local.closing}`} id="sources">
				<h2>Sources</h2>
				<ul className={local.sources}>
					{Object.values(SOURCES).map((source) => (
						<li key={source.url}>
							<a href={source.url} rel="noopener" target="_blank">
								{source.label}
							</a>
							<span>
								{source.url} · read {READ_ON}
							</span>
						</li>
					))}
					<li>
						<Link href="/pricing">Fernly pricing</Link>
						<span>payfernly.com/pricing</span>
					</li>
					<li>
						<Link href="/features/payroll">Fernly payroll</Link>
						<span>payfernly.com/features/payroll</span>
					</li>
				</ul>
			</section>
		</>
	);
}
