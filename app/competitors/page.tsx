import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { COMPETITORS } from "@/lib/competitors";

export const metadata: Metadata = {
	title: "Compare Fernly",
	description:
		"Side-by-side comparisons of Fernly and other payroll providers on pricing, human support, benefits, multi-state compliance and year-end filings.",
	alternates: { canonical: "/competitors" },
};

export default function CompetitorsIndexPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Compare</p>
			<h1>How Fernly compares.</h1>
			<p className={styles.lede}>
				Weighing up payroll providers? Here&apos;s how we stack up on the things a team of 5 to 50
				actually feels: price, support, benefits and state compliance.
			</p>
			<ul className={styles.postList}>
				{COMPETITORS.map((competitor) => (
					<li key={competitor.slug} className={styles.card}>
						<h3>
							<Link href={`/competitors/${competitor.slug}`}>Fernly vs. {competitor.name}</Link>
						</h3>
						<p>{competitor.summary}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
