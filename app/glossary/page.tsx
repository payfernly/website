import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { glossaryByLetter } from "@/lib/glossary";

export const metadata: Metadata = {
	title: "Payroll glossary",
	description:
		"Plain-English definitions of the payroll, tax and benefits terms small-business owners run into, from the Fernly team.",
	alternates: { canonical: "/glossary" },
};

export default function GlossaryIndexPage() {
	const groups = glossaryByLetter();

	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>Payroll terms, defined.</h1>
			<p className={styles.lede}>
				Short, plain-English definitions of the payroll, tax and benefits terms that show up on
				pay stubs, tax forms and agency letters. Written for founders and operations leads at
				small companies who run payroll on top of everything else.
			</p>
			{groups.map((group) => (
				<div key={group.letter} id={group.letter}>
					<h2>{group.letter}</h2>
					<ul className={styles.postList}>
						{group.terms.map((term) => (
							<li key={term.slug} className={styles.card}>
								<h3>
									<Link href={`/glossary/${term.slug}`}>{term.term}</Link>
								</h3>
								<p>{term.summary}</p>
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
