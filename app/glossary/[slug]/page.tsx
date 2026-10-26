import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/page.module.css";
import { Markdown } from "@/components/Markdown";
import { getTerm, getTerms } from "@/lib/glossary";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return getTerms().map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const term = getTerm((await params).slug);
	if (!term) return {};
	return {
		title: `${term.title}: payroll glossary`,
		description: term.description,
		alternates: { canonical: `/glossary/${term.slug}` },
	};
}

export default async function GlossaryTermPage({ params }: Props) {
	const term = getTerm((await params).slug);
	if (!term) notFound();

	return (
		<article className={styles.narrow}>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>{term.title}</h1>
			<Markdown source={term.body} />
			<div className={`${styles.buttons} ${styles.termActions}`}>
				<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
					Compare plans
				</Link>
				<Link href="/glossary" className={styles.secondary}>
					Browse the glossary
				</Link>
			</div>
		</article>
	);
}
