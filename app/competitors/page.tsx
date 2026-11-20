import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { COMPETITORS } from "@/lib/competitors";

export const metadata: Metadata = {
	title: "Compare Fernly",
	description:
		"How Fernly compares with other payroll providers on pricing, human support, benefits, multi-state compliance and year-end filings for teams of 5 to 50.",
	alternates: { canonical: "/competitors" },
};

export default function CompetitorsPage() {
	return (
		<section className={styles.section}>
			<p className={styles.eyebrow}>Compare</p>
			<h1>How Fernly compares.</h1>
			<p className={styles.lede}>
				Plain side-by-side comparisons with other payroll providers, including where they might
				suit you better.
			</p>
			<div className={styles.grid3}>
				{COMPETITORS.map((c) => (
					<div key={c.slug} className={styles.card}>
						<h3>
							<Link href={`/competitors/${c.slug}`}>Fernly vs. {c.name}</Link>
						</h3>
						<p>{c.summary}</p>
					</div>
				))}
			</div>
		</section>
	);
}
