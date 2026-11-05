import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Payroll for startups",
	description:
		"Fernly runs payroll, files your federal and state payroll taxes, and keeps benefits deductions in sync for startups with 5 to 50 employees.",
	alternates: { canonical: "/for/startups" },
};

export default function ForStartupsPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Fernly for startups</p>
			<h1>Payroll for fast-growing teams, handled by a real person.</h1>
			<p className={styles.lede}>
				Fernly pays your people, files every federal and state payroll tax form, and keeps
				benefits deductions in sync — built for companies with 5 to 50 employees. You get
				unlimited pay runs, and your team can download pay stubs and update their own details.
			</p>
			<p>
				Every account gets a named payroll specialist based in Portland, Oregon, who knows your
				company, your states and your pay schedule. As you hire in new places, we flag missing
				tax registrations before they turn into penalty notices.
			</p>
			<p>
				<Link href="/">Back to the Fernly homepage</Link>
			</p>
		</section>
	);
}
