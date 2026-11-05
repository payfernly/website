import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Glossary",
	description:
		"Fernly runs payroll, benefits and tax filing for US teams of 5 to 50, with a named payroll specialist for every customer.",
	alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Glossary</p>
			<h1>Payroll terms, in plain English.</h1>
			<p className={styles.lede}>
				Fernly runs payroll, benefits and tax filing for US teams of 5 to 50. We started in
				Portland, Oregon in 2021 because small-company payroll is mostly state agencies,
				deadlines and registrations nobody tells you about.
			</p>
			<p>
				Every Fernly customer has a named payroll specialist who knows your company, your states
				and your pay schedule. Every pay run is checked against 140 rules before it can be
				approved, so problems get caught before payday.
			</p>
			<Link href="/" className={styles.primary}>
				Back to the home page
			</Link>
		</section>
	);
}
