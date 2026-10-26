import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { getTerms } from "@/lib/glossary";

export const metadata: Metadata = {
	title: "Payroll glossary",
	description:
		"Plain-English definitions of the payroll, tax filing and benefits terms small-business owners run into, from FICA to open enrollment.",
	alternates: { canonical: "/glossary" },
};

export default function GlossaryIndexPage() {
	const terms = getTerms();
	return (
		<>
			<section className={styles.narrow}>
				<p className={styles.eyebrow}>Glossary</p>
				<h1>Payroll words, defined.</h1>
				<p className={styles.lede}>
					The payroll, tax and benefits terms you&apos;ll run into while paying a team of 5 to 50,
					each explained in a few plain sentences.
				</p>
			</section>
			<section className={styles.section}>
				<ul className={`${styles.grid3} ${styles.termList}`}>
					{terms.map((term) => (
						<li key={term.slug} className={styles.card}>
							<h3>
								<Link href={`/glossary/${term.slug}`}>{term.title}</Link>
							</h3>
							<p>{term.description}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
