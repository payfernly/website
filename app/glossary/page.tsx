import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/components/page.module.css";
import glossary from "./glossary.module.css";

const SITE_URL = "https://payfernly.com";

export const metadata: Metadata = {
	title: "Glossary",
	description:
		"Payroll terms in plain English for US teams of 5 to 50: Form 941, FUTA and Colorado FAMLI, with the official source for each and what it means for a small team.",
	alternates: { canonical: "/glossary" },
};

type Term = {
	id: string;
	name: string;
	aka: string;
	summary: string;
	definition: ReactNode;
	sources: { quote: string; title: string; url: string }[];
	relevance: ReactNode;
	related: { href: string; label: string }[];
};

const TERMS: Term[] = [
	{
		id: "form-941",
		name: "Form 941",
		aka: "Employer's Quarterly Federal Tax Return",
		summary:
			"The quarterly federal payroll return that reports wages paid, federal income tax withheld, and Social Security and Medicare tax owed by both the employer and employees.",
		definition: (
			<>
				<p>
					Form 941 is the federal payroll return employers file every quarter. It tells the IRS what
					you paid your employees, how much federal income tax you withheld from their paychecks,
					and how much Social Security and Medicare tax is owed, both the employees&apos; share and
					yours.
				</p>
				<p>
					Filing the 941 isn&apos;t how you pay those taxes. You deposit them as you go, and the
					return has to match what you deposited. It&apos;s due April 30, July 31, October 31 and
					January 31, or the 10th of the following month if every deposit was made on time.
				</p>
			</>
		),
		sources: [
			{
				quote:
					"Employers use Form 941 to: Report federal income, social security, and Medicare taxes withheld from employee's paychecks, and Report the employer's share of social security and Medicare taxes.",
				title: "IRS, About Form 941, Employer's Quarterly Federal Tax Return",
				url: "https://www.irs.gov/forms-pubs/about-form-941",
			},
		],
		relevance: (
			<p>
				Once you have employees on payroll, a 941 is usually due every quarter. (The IRS tells some
				very small employers to file the annual Form 944 instead.) Two things to get right: wages
				count in the quarter they&apos;re paid, and the return must match your deposits. Fernly prepares and files your 941 every quarter on every plan.
			</p>
		),
		related: [
			{
				href: "/blog/form-941-explained",
				label: "Form 941, explained for people who never wanted to learn it",
			},
			{ href: "/features/compliance", label: "Everything Fernly files for you" },
			{
				href: "/blog/switching-payroll-mid-year",
				label: "Switching payroll providers mid-year: who files which quarter",
			},
		],
	},
	{
		id: "futa",
		name: "FUTA",
		aka: "Federal Unemployment Tax Act, reported on Form 940",
		summary:
			"The federal unemployment tax. Only the employer pays it, on the first $7,000 of each employee's wages a year, and it's reported annually on Form 940.",
		definition: (
			<>
				<p>
					FUTA is the federal unemployment tax. Alongside each state&apos;s unemployment insurance,
					it funds benefits for people who lose their jobs. Only the employer pays it: it never
					comes out of an employee&apos;s paycheck.
				</p>
				<p>
					The IRS sets the rate at 6.0% of the first $7,000 you pay each employee in a year. Most
					employers get a credit of up to 5.4% for paying their state unemployment tax, which brings
					it to 0.6%, but only if the state tax was paid in full and on time, and less if your state
					is a &ldquo;credit reduction&rdquo; state that owes the federal government money. You
					report FUTA once a year on Form 940, due January 31 (or February 10 if every deposit was
					on time).
				</p>
			</>
		),
		sources: [
			{
				quote:
					"The Federal Unemployment Tax Act (FUTA), with state unemployment systems, provides for payments of unemployment compensation to workers who have lost their jobs. Most employers pay both a Federal and a state unemployment tax. … Only the employer pays FUTA tax; it is not deducted from the employee's wages.",
				title: "IRS, Federal unemployment tax",
				url: "https://www.irs.gov/individuals/international-taxpayers/federal-unemployment-tax",
			},
			{
				quote:
					"The FUTA tax rate is 6.0%. The tax applies to the first $7,000 you paid to each employee as wages during the year. … If you're entitled to the maximum 5.4% credit, the FUTA tax rate after credit is 0.6%.",
				title: "IRS, Topic no. 759, Form 940 filing and deposit requirements",
				url: "https://www.irs.gov/taxtopics/tc759",
			},
		],
		relevance: (
			<p>
				For a small team, FUTA is usually a modest line on the employer side of payroll, but it
				depends on your state unemployment account being set up and paid on time. If you pay people
				in more than one state, Form 940 also needs Schedule A, which lists each state. Fernly files
				your Form 940 every year.
			</p>
		),
		related: [
			{ href: "/features/compliance", label: "Everything Fernly files for you" },
			{
				href: "/blog/hiring-in-a-new-state",
				label: "Your first hire in a new state: registering for state unemployment insurance",
			},
		],
	},
	{
		id: "famli",
		name: "FAMLI",
		aka: "Colorado Family and Medical Leave Insurance",
		summary:
			"Colorado's paid family and medical leave program, funded by premiums that employers collect and send in through payroll each quarter.",
		definition: (
			<>
				<p>
					FAMLI is Colorado&apos;s paid family and medical leave program. It pays benefits to
					workers who take time off for reasons such as their own serious health condition, caring
					for a family member or bonding with a new child. It&apos;s funded by premiums calculated
					as a percentage of each employee&apos;s gross wages, which the state can recalculate each
					year.
				</p>
				<p>
					Any business with at least one qualifying employee in Colorado has to register with the
					FAMLI Division, report wages every quarter and send in premiums. Employers may deduct up
					to half the premium from paychecks; employees never pay more than half. Employers with ten
					or more employees (counted over the previous year) also pay the employer share, and that
					count includes people who work outside Colorado. Other states run similar programs under
					their own names, such as Paid Family and Medical Leave (PFML) in Massachusetts.
				</p>
			</>
		),
		sources: [
			{
				quote:
					"Employers and their employees both fund the program and may split the cost 50/50. … All businesses with at least one qualified employee are required to register with the FAMLI Division.",
				title: "Colorado Division of Family and Medical Leave Insurance, Employers",
				url: "https://famli.colorado.gov/employers",
			},
			{
				quote: "Massachusetts's PFML law is funded through employer and employee contributions.",
				title: "Mass.gov, Paid Family and Medical Leave (PFML) overview and benefits",
				url: "https://www.mass.gov/info-details/paid-family-and-medical-leave-pfml-overview-and-benefits",
			},
		],
		relevance: (
			<p>
				This is the one that catches small teams by surprise. Hire your first person in Colorado and
				you owe FAMLI premiums from their first paycheck; the state doesn&apos;t let you collect
				missed premiums from employees later. Because headcount is nationwide, a 12-person company
				with one Colorado hire pays the employer share too. When you add someone in a new state,
				Fernly adds that state&apos;s paid-leave program to payroll.
			</p>
		),
		related: [
			{
				href: "/blog/hiring-in-a-new-state",
				label: "Your first hire in a new state: the five registrations nobody mentions",
			},
			{
				href: "/features/compliance",
				label: "How Fernly keeps up with paid-leave and payroll rule changes",
			},
		],
	},
];

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "DefinedTermSet",
	name: "Fernly payroll glossary",
	url: `${SITE_URL}/glossary`,
	hasDefinedTerm: TERMS.map((term) => ({
		"@type": "DefinedTerm",
		"@id": `${SITE_URL}/glossary#${term.id}`,
		name: term.name,
		alternateName: term.aka,
		description: term.summary,
		url: `${SITE_URL}/glossary#${term.id}`,
	})),
};

export default function GlossaryPage() {
	return (
		<section className={styles.narrow}>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
			/>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>Payroll terms, in plain English.</h1>
			<p className={styles.lede}>
				Fernly runs payroll, benefits and tax filing for US teams of 5 to 50. We started in
				Portland, Oregon in 2021 because small-company payroll is mostly state agencies, deadlines
				and registrations nobody tells you about.
			</p>
			<p>
				Every Fernly customer has a named payroll specialist who knows your company, your states and
				your pay schedule. Every pay run is checked against 140 rules before it can be approved, so
				problems get caught before payday.
			</p>

			<nav aria-label="Terms on this page">
				<ul className={glossary.index}>
					{TERMS.map((term) => (
						<li key={term.id}>
							<a href={`#${term.id}`}>{term.name}</a>
						</li>
					))}
				</ul>
			</nav>

			<div className={glossary.terms}>
				{TERMS.map((term) => (
					<article key={term.id} id={term.id} className={glossary.term}>
						<h2>{term.name}</h2>
						<p className={glossary.aka}>{term.aka}</p>
						{term.definition}

						<p className={glossary.label}>From the source</p>
						{term.sources.map((source) => (
							<blockquote key={source.url} cite={source.url} className={glossary.source}>
								<p>&ldquo;{source.quote}&rdquo;</p>
								<footer>
									<a href={source.url} rel="noopener">
										{source.title}
									</a>
								</footer>
							</blockquote>
						))}

						<p className={glossary.label}>Why it matters for a team of 5 to 50</p>
						{term.relevance}

						<p className={glossary.label}>Read next</p>
						<ul className={glossary.related}>
							{term.related.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<Link href="/" className={styles.primary}>
				Back to the home page
			</Link>
		</section>
	);
}
