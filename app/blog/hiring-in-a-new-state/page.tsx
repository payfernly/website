import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import styles from "@/components/page.module.css";
import { formatDate, getPost } from "@/lib/posts";

const post = getPost("hiring-in-a-new-state");

export const metadata: Metadata = {
	title: post.title,
	description: post.summary,
	alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
	return (
		<article className={`${styles.narrow} ${styles.post}`}>
			<ArticleJsonLd post={post} />
			<p className={styles.eyebrow}>Compliance</p>
			<h1>{post.title}</h1>
			<p className={styles.postMeta}>
				{post.author} · {formatDate(post.date)}
			</p>

			<p>
				You found the right person, they said yes, and they live in Colorado. Your company has
				only ever paid people in Oregon. Before their first paycheck, you probably need to
				register with at least five agencies. Here they are, in the order we do them.
			</p>

			<h2>1. State income tax withholding</h2>
			<p>
				Most states with an income tax require you to register before you withhold a single
				dollar. Registration is online in almost every state, but the account number can take
				anywhere from a few minutes (Colorado) to three weeks (New York). Start the day the offer
				is signed.
			</p>

			<h2>2. State unemployment insurance</h2>
			<p>
				Separate agency, separate account, separate rate. New employers get a standard rate for
				their first year or two, usually between 1% and 3.4% of the first chunk of each
				employee&apos;s wages.
			</p>

			<h2>3. Paid family and medical leave</h2>
			<p>
				Colorado, Washington, Oregon, Massachusetts, Connecticut, New Jersey, New York, Rhode
				Island, California, Delaware, Maryland, Maine and Minnesota all run some form of paid
				leave program funded through payroll. Each has its own registration, and several have
				employer contributions on top of the employee deduction.
			</p>

			<h2>4. Local taxes</h2>
			<p>
				Some cities and counties have their own payroll taxes: Denver&apos;s Occupational
				Privilege Tax, Philadelphia&apos;s wage tax, every school district in Ohio and
				Pennsylvania. These are easy to miss because they depend on the exact address.
			</p>

			<h2>5. New-hire reporting</h2>
			<p>
				Every state requires you to report new hires, usually within 20 days. It feeds child
				support enforcement, and it&apos;s one of the most commonly missed filings we see.
			</p>

			<h2>Rather not do it yourself?</h2>
			<p>
				The agency, the form and the typical wait time differ for every registration in every
				state. Let Fernly do it: on the Plus and Premium plans, we file every one of these
				registrations for you.{" "}
				<Link href="/features/compliance">See everything Fernly files for you</Link>.
			</p>
		</article>
	);
}
