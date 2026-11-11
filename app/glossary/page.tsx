import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Glossary",
	description:
		"Plain-English definitions of the payroll terms small teams run into: Form 941, paid family and medical leave, state unemployment insurance and new-hire reporting.",
	alternates: { canonical: "/glossary" },
};

type Term = {
	id: string;
	term: string;
	definition: React.ReactNode;
	source: React.ReactNode;
	whyItMatters: React.ReactNode;
	guide: { href: string; label: string };
};

const TERMS: Term[] = [
	{
		id: "form-941",
		term: "Form 941",
		definition: (
			<>
				Form 941 is the Employer&apos;s Quarterly Federal Tax Return. Each quarter it tells the
				IRS what you paid your employees, how much federal income tax and Social Security and
				Medicare tax you withheld from their paychecks, and your own share of Social Security
				and Medicare tax. You pay those taxes through deposits as you go; the 941 is where the
				IRS checks your totals against those deposits.
			</>
		),
		source: (
			<>
				Source: IRS,{" "}
				<a href="https://www.irs.gov/forms-pubs/about-form-941">About Form 941</a>: &ldquo;Employers
				use Form 941 to: Report federal income, social security, and Medicare taxes withheld from
				employee&apos;s paychecks, and Report the employer&apos;s share of social security and
				Medicare taxes.&rdquo;
			</>
		),
		whyItMatters: (
			<>
				If the liability you report doesn&apos;t match the deposits you made, the IRS sends a
				notice, and often a penalty. One of the mistakes we see most is a bonus reported in the
				wrong quarter. Fernly prepares and files your 941 every quarter on every plan.
			</>
		),
		guide: { href: "/blog/form-941-explained", label: "Form 941, explained" },
	},
	{
		id: "paid-family-and-medical-leave",
		term: "Paid family and medical leave",
		definition: (
			<>
				A state-run program that pays employees part of their wages while they take time off
				for qualifying reasons, such as caring for a new child, a family member or their own
				serious health condition. Each state sets its own rules, and programs are usually funded
				through payroll: you deduct employee contributions from each paycheck and send them to
				the state, and in some states the employer pays a share too. It is separate from the
				federal Family and Medical Leave Act, which protects jobs but doesn&apos;t pay wages.
			</>
		),
		source: (
			<>
				Source: our guide to hiring in a new state: &ldquo;Colorado, Washington, Oregon,
				Massachusetts, Connecticut, New Jersey, New York, Rhode Island, California, Delaware,
				Maryland, Maine and Minnesota all run some form of paid leave program funded through
				payroll.&rdquo; For one state&apos;s rules, see{" "}
				<a href="https://paidleave.oregon.gov/">Paid Leave Oregon</a>: &ldquo;If you&apos;re an
				employer with fewer than 25 employees on average, you are considered a small employer.
				You don&apos;t have to pay the employer contribution, you can choose to contribute. You
				must collect and submit your employees&apos; contributions.&rdquo;
			</>
		),
		whyItMatters: (
			<>
				Each program has its own registration, and several add an employer contribution on top
				of the employee deduction. A small-employer break, where a state offers one, may cover
				only your share, not the deductions you collect. When you add someone in a new state,
				Fernly adds that state&apos;s paid-leave program to payroll.
			</>
		),
		guide: {
			href: "/blog/hiring-in-a-new-state",
			label: "Your first hire in a new state",
		},
	},
	{
		id: "state-unemployment-insurance",
		term: "State unemployment insurance (SUI)",
		definition: (
			<>
				The state program that pays temporary benefits to eligible workers who lose their job
				through no fault of their own. Every state runs its own, and in most states it&apos;s
				paid for by a tax on employers. You open a state unemployment account, the state gives
				you a tax rate, and you file returns on what you owe.
			</>
		),
		source: (
			<>
				Source: U.S. Department of Labor,{" "}
				<a href="https://oui.doleta.gov/unemploy/uifactsheet.asp">
					State Unemployment Insurance Benefits
				</a>
				: &ldquo;Each State administers a separate unemployment insurance program within
				guidelines established by Federal law.&rdquo; and &ldquo;In the majority of States,
				benefit funding is based solely on a tax imposed on employers. (Three (3) States require
				minimal employee contributions.)&rdquo;
			</>
		),
		whyItMatters: (
			<>
				It&apos;s a separate agency, account and rate from state income tax withholding, so a
				hire in a new state means a new SUI registration. New employers get a standard rate for
				their first year or two. Fernly files your state unemployment returns every quarter, and
				on the Plus and Premium plans registers the account for you.
			</>
		),
		guide: {
			href: "/blog/hiring-in-a-new-state",
			label: "Your first hire in a new state",
		},
	},
	{
		id: "new-hire-reporting",
		term: "New-hire reporting",
		definition: (
			<>
				Telling the state about each person you hire or rehire, with a few basic details, soon
				after they start. States share these reports with a national directory that child
				support agencies use to find parents who owe support.
			</>
		),
		source: (
			<>
				Source: U.S. Department of Health and Human Services, Office of Child Support,{" "}
				<a href="https://www.acf.hhs.gov/css/employers/employer-responsibilities/new-hire-reporting">
					New Hire Reporting
				</a>
				: &ldquo;Federal law requires employers to report basic information on new and rehired
				employees within 20 days of hire to the state where the new employees work. Some states
				require it sooner.&rdquo;
			</>
		),
		whyItMatters: (
			<>
				It applies to every hire, in every state you pay people, and it&apos;s one of the most
				commonly missed filings we see. On the Plus and Premium plans, Fernly files the new-hire
				report for you.
			</>
		),
		guide: {
			href: "/blog/hiring-in-a-new-state",
			label: "Your first hire in a new state",
		},
	},
];

export default function GlossaryPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>Payroll terms, in plain English.</h1>
			<p className={styles.lede}>
				Fernly runs payroll, benefits and tax filing for US teams of 5 to 50. We started in
				Portland, Oregon in 2021 because small-company payroll is mostly state agencies,
				deadlines and registrations nobody tells you about.
			</p>
			<p>
				Every Fernly customer has a named payroll specialist who knows your company, your states
				and your pay schedule. Every pay run is checked against 140 rules before it can be
				approved, so problems get caught before payday.
			</p>

			<ul className={styles.list} aria-label="Terms on this page">
				{TERMS.map((t) => (
					<li key={t.id}>
						<a href={`#${t.id}`}>{t.term}</a>
					</li>
				))}
			</ul>

			{TERMS.map((t) => (
				<div key={t.id} id={t.id} className={styles.term}>
					<h2>{t.term}</h2>
					<p>{t.definition}</p>
					<p className={styles.postMeta}>{t.source}</p>
					<h3>Why it matters to small teams</h3>
					<p>{t.whyItMatters}</p>
					<p>
						Read the guide: <Link href={t.guide.href}>{t.guide.label}</Link> ·{" "}
						<Link href="/features/compliance">See everything Fernly files</Link>
					</p>
				</div>
			))}

			<Link href="/" className={styles.primary}>
				Back to the home page
			</Link>
		</section>
	);
}
