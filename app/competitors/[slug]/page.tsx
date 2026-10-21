import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/page.module.css";
import { COMPETITORS, comparisonRows, getCompetitor } from "@/lib/competitors";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const competitor = getCompetitor((await params).slug);
	if (!competitor) return {};
	return {
		title: `Fernly vs. ${competitor.name}`,
		description: competitor.summary,
		alternates: { canonical: `/competitors/${competitor.slug}` },
	};
}

export default async function CompetitorPage({ params }: Props) {
	const competitor = getCompetitor((await params).slug);
	if (!competitor) notFound();

	return (
		<>
			<section className={styles.section}>
				<p className={styles.eyebrow}>Compare</p>
				<h1>Fernly vs. {competitor.name}</h1>
				<p className={styles.lede}>{competitor.intro}</p>
			</section>

			<section className={styles.section}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th></th>
							<th>Fernly</th>
							<th>{competitor.name}</th>
						</tr>
					</thead>
					<tbody>
						{comparisonRows(competitor).map((row) => (
							<tr key={row.label}>
								<td>
									<strong>{row.label}</strong>
								</td>
								<td>{row.fernly}</td>
								<td>{row.competitor}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section className={styles.section}>
				<h2>Bottom line</h2>
				<p className={styles.lede}>{competitor.bottomLine}</p>
				<Link href="/pricing" className={styles.secondary}>
					See pricing
				</Link>
			</section>
		</>
	);
}
