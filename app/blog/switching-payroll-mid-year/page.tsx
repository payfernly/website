import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { BlogPostingJsonLd } from "@/components/BlogPostingJsonLd";
import { formatDate, getPost } from "@/lib/posts";

const post = getPost("switching-payroll-mid-year");

export const metadata: Metadata = {
	title: post.title,
	description: post.summary,
	alternates: { canonical: `/blog/${post.slug}` },
};

export default function Post() {
	return (
		<article className={styles.narrow}>
			<BlogPostingJsonLd post={post} />
			<p className={styles.eyebrow}>Switching</p>
			<h1>{post.title}</h1>
			<p className={styles.postMeta}>
				{post.author} · {formatDate(post.date)}
			</p>

			<p>
				People assume you have to wait until January. You don&apos;t. What matters is that your
				new provider has accurate year-to-date totals for every employee, so W-2s come out right
				and wage-base limits are applied correctly.
			</p>

			<h2>Switch at a quarter boundary if you can</h2>
			<p>
				If you switch on July 1, your old provider files Q1 and Q2 returns and your new one files
				Q3 and Q4. Clean split, no amended returns. Switching mid-quarter works too, but someone
				has to file a combined return, and that someone is usually the new provider.
			</p>

			<h2>The checklist</h2>
			<ol>
				<li>Download pay registers for every pay run this year.</li>
				<li>Download your federal and state tax deposit history.</li>
				<li>Write down every state and local tax account number and its current rate.</li>
				<li>Export employee bank details, W-4s and state withholding forms.</li>
				<li>List every deduction: benefits, 401(k), garnishments, loans.</li>
				<li>Run one parallel payroll and compare it line by line before going live.</li>
				<li>Tell your old provider the last pay date they&apos;ll handle — in writing.</li>
			</ol>

			<h2>What Fernly does for you</h2>
			<p>
				Send us the registers and tax history, and we import year-to-date totals, verify them
				against your deposits and run the parallel payroll with you. Most teams are live within a
				week. <Link href="/contact">Book a 20-minute call</Link> and we&apos;ll give you a date.
			</p>
		</article>
	);
}
