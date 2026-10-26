import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/components/page.module.css";
import { GLOSSARY_TERMS, getGlossaryTerm } from "@/lib/glossary";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return GLOSSARY_TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const term = getGlossaryTerm((await params).slug);
	if (!term) return {};
	return {
		title: `${term.term}: definition`,
		description: term.summary,
		alternates: { canonical: `/glossary/${term.slug}` },
	};
}

export default async function GlossaryTermPage({ params }: Props) {
	const term = getGlossaryTerm((await params).slug);
	if (!term) notFound();

	return (
		<article className={`${styles.narrow} ${styles.term}`}>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>{term.term}</h1>
			<p className={styles.lede}>{term.summary}</p>
			{term.body.map((paragraph) => (
				<p key={paragraph}>{paragraph}</p>
			))}
			{term.related && (
				<p>
					<Link href={term.related.href}>{term.related.label}</Link>
				</p>
			)}
			<p>
				<Link href="/glossary">Back to the glossary</Link>
			</p>
		</article>
	);
}
