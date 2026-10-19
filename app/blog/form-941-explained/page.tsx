import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { formatDate, getPost } from "@/lib/posts";

const post = getPost("form-941-explained");

export const metadata: Metadata = {
	title: "Form 941 explained: the quarterly payroll return",
	description: post.summary,
	alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
	return (
		<article className={styles.narrow}>
			<p className={styles.eyebrow}>Taxes</p>
			<h1>{post.title}</h1>
			<p className={styles.postMeta}>
				{post.author} · {formatDate(post.date)}
			</p>

			<p>
				Form 941 is the Employer&apos;s Quarterly Federal Tax Return. Four times a year it tells
				the IRS how much you paid your employees, how much federal income tax you withheld, and
				how much Social Security and Medicare tax you and your employees owe.
			</p>

			<h2>Why it has to match your deposits</h2>
			<p>
				You don&apos;t pay payroll taxes when you file the 941. You pay them as you go, through
				deposits on a monthly or semiweekly schedule. The 941 is the reconciliation: the IRS
				compares the liability you report with the deposits you made. If they don&apos;t match,
				you get a notice, and often a penalty.
			</p>

			<h2>The three mistakes we see most</h2>
			<h3>Reporting bonuses in the wrong quarter</h3>
			<p>
				Wages count in the quarter they&apos;re paid, not the quarter they were earned. A Q4
				bonus paid on January 3 belongs on the Q1 return.
			</p>
			<h3>Forgetting the sick-pay adjustment</h3>
			<p>
				If a third-party insurer paid short-term disability, their share of FICA is reported
				separately on line 8. Leave it off and your numbers won&apos;t tie out.
			</p>
			<h3>Using the wrong deposit schedule</h3>
			<p>
				Your schedule is set by your total liability during a lookback period, not by how often
				you run payroll. New employers are monthly depositors until their liability grows.
			</p>

			<h2>When it&apos;s due</h2>
			<p>
				April 30, July 31, October 31 and January 31. If you made every deposit on time, you get
				until the 10th of the following month.
			</p>

			<p>
				Fernly prepares and files your 941 every quarter on every plan.{" "}
				<Link href="/features/compliance">See everything we file</Link>.
			</p>
		</article>
	);
}
