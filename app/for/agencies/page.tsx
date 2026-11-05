import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll for agencies",
	description:
		"Fernly runs payroll, files your federal and state payroll taxes, and keeps benefits deductions in sync for agencies with 5 to 50 people.",
	alternates: { canonical: "/for/agencies" },
};

export default function AgenciesPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Fernly for agencies</p>
			<h1>Payroll your agency never has to think about.</h1>
			<p className={styles.lede}>
				Fernly pays your people, files every federal and state payroll tax form, and keeps
				benefits deductions in sync — built for teams of 5 to 50. Pay 1099 contractors alongside
				employees, and we&apos;ll prepare their 1099-NECs at year end.
			</p>
			<p>
				One of our founders spent six years running payroll and HR at a 30-person design studio,
				so we know how agency teams work. Every account gets a named payroll specialist in
				Portland, Oregon, who knows your company, your states and your pay schedule.
			</p>
			<p>
				<Link href="/">Back to the homepage</Link>
			</p>
		</section>
	);
}
