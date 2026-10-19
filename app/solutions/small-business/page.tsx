import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Small Business Payroll for Teams of 5 to 50",
	description:
		"Fernly runs payroll, files federal and state taxes, and handles benefits deductions for established small businesses ready to leave DIY tools or bloated enterprise software behind.",
	alternates: { canonical: "/solutions/small-business" },
};

export default function SmallBusinessPage() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Small business</p>
						<h1>Small Business Payroll for Teams of 5 to 50</h1>
						<p className={styles.lede}>
							You&apos;ve outgrown the spreadsheet, the DIY tool or the big-name provider that was
							built for someone else. Fernly makes payroll fast, keeps the cost predictable and
							puts real people on the other end of the line.
						</p>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="A small team of people standing together"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h1>Everything an established small business needs</h1>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Transparent per-person pricing</h3>
						<p>
							A monthly base and a flat price per person. No setup fee, no charge per pay run and
							no surprise fees at year-end.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Unlimited pay runs</h3>
						<p>
							Regular payroll, bonuses, commissions or a final paycheck. Run payroll as often as
							you need to on every plan.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Federal and state tax filing</h3>
						<p>
							We calculate, pay and file your federal and state payroll taxes, so you stop
							tracking deadlines in a spreadsheet.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits deductions handled</h3>
						<p>
							Health, dental, vision and 401(k) deductions come out of each paycheck
							automatically and stay in sync with payroll.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Contractors too</h3>
						<p>
							Pay 1099 contractors alongside employees from the same account, without a second
							tool to manage.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A named specialist who answers the phone</h3>
						<p>
							Every account gets a named payroll specialist based in Portland, Oregon. Call them
							and a real person picks up.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Payroll that fits the size of your team</h2>
				<p className={styles.lede}>
					One monthly base, then a flat price per person. See exactly what you&apos;ll pay for your
					team before you sign up.
				</p>
				<Link href="/pricing" className={styles.primary}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
