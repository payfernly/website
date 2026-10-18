import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { POSTS, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Plain-English guides to payroll taxes, state registrations and running payroll at a small company, from the Fernly team.",
	alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Blog</p>
			<h1>Payroll, in plain English.</h1>
			<p className={styles.lede}>
				Notes from our payroll specialists on the questions small-company operators ask us every
				week.
			</p>
			<ul className={styles.postList}>
				{POSTS.map((post) => (
					<li key={post.slug} className={styles.card}>
						<h3>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</h3>
						<p>{post.summary}</p>
						<p className={styles.postMeta}>
							{post.author} · {formatDate(post.date)}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
