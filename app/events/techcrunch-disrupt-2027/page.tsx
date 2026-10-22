import type { Metadata } from "next";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Fernly at TechCrunch Disrupt 2027",
	description:
		"Meet the Fernly team at TechCrunch Disrupt 2027 in San Francisco. Stop by our booth to see how Fernly handles payroll and benefits for small teams.",
	alternates: { canonical: "/events/techcrunch-disrupt-2027" },
};

export default function TechCrunchDisrupt2027Page() {
	return (
		<>
			<section className={styles.section}>
				<div className={`${styles.hero} ${styles.heroDots}`}>
					<div>
						<p className={styles.eyebrow}>TechCrunch Disrupt 2027</p>
						<h1>Meet Fernly at TechCrunch Disrupt 2027</h1>
						<p className={styles.lede}>
							Come find us at booth [NUMBER] — we&apos;d love to show you how Fernly handles
							payroll and benefits for small teams.
						</p>
						<div className={styles.buttons}>
							<a href="#" className={styles.primary}>
								Book a meeting
							</a>
						</div>
					</div>
					<img
						src="/illustrations/team.svg"
						alt="The Fernly team"
						width={480}
						height={300}
					/>
				</div>
			</section>

			<section className={styles.narrow}>
				<h2>About Fernly</h2>
				<p className={styles.lede}>
					Fernly is payroll and benefits software built for small US businesses. Every customer
					gets a named payroll specialist they can call — no chatbots, no hold music.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Event details</h2>
				<div className={styles.grid2}>
					<div className={styles.card}>
						<h3>Where and when</h3>
						<ul className={styles.list}>
							<li>Booth: [NUMBER]</li>
							<li>Hall: [HALL]</li>
							<li>Dates: October 2027 — San Francisco, CA</li>
							<li>Venue: [VENUE NAME AND ADDRESS]</li>
						</ul>
					</div>
					<div className={styles.card}>
						<h3>Venue map</h3>
						<p>[Venue map and directions to our booth coming soon.]</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>What we&apos;ll be showing</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>A four-minute pay run</h3>
						<p>
							[Placeholder] Watch a full payroll go out, from hours to direct deposit, start to
							finish.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Benefits in the same system</h3>
						<p>
							[Placeholder] See enrollment flow straight into payroll deductions, with no
							spreadsheet in the middle.
						</p>
					</div>
					<div className={styles.card}>
						<h3>Compliance checks before payday</h3>
						<p>
							[Placeholder] Find out how Fernly flags a missing state registration before it
							turns into a penalty.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.narrow}>
				<h2>Book time with us</h2>
				<p className={styles.lede}>
					Want a guaranteed slot at the booth? Tell us a little about your team and we&apos;ll
					set up a time to meet during Disrupt.
				</p>
				<form className={styles.form} action="mailto:hello@payfernly.com" method="post" encType="text/plain">
					<label>
						Your name
						<input name="name" type="text" autoComplete="name" required />
					</label>
					<label>
						Work email
						<input name="email" type="email" autoComplete="email" required />
					</label>
					<label>
						Company
						<input name="company" type="text" autoComplete="organization" />
					</label>
					<label>
						When would you like to meet?
						<textarea name="message" rows={4} />
					</label>
					<button type="submit" className={styles.primary}>
						Request a meeting
					</button>
				</form>
				<p>
					Or email us at <a href="mailto:hello@payfernly.com">hello@payfernly.com</a>.
				</p>
			</section>
		</>
	);
}
