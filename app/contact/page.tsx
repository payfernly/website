import type { Metadata } from "next";
import styles from "@/components/page.module.css";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Book a 20-minute Fernly demo priced for your exact headcount, or reach customer support by email or phone, 6 a.m. to 6 p.m. Pacific, Monday to Friday.",
	alternates: { canonical: "/contact" },
};

export default function ContactPage() {
	return (
		<section className={styles.narrow}>
			<p className={styles.eyebrow}>Contact</p>
			<h1>Talk to a person who knows payroll.</h1>
			<p className={styles.lede}>
				Tell us a little about your team and we&apos;ll get back to you within one business day.
				Demos are 20 minutes and we&apos;ll price your exact headcount on the call.
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
					How many people do you pay?
					<select name="headcount" defaultValue="5-15">
						<option value="1-4">1 to 4</option>
						<option value="5-15">5 to 15</option>
						<option value="16-30">16 to 30</option>
						<option value="31-50">31 to 50</option>
						<option value="50+">More than 50</option>
					</select>
				</label>
				<label>
					Anything we should know?
					<textarea name="message" rows={4} />
				</label>
				<button type="submit" className={styles.primary}>
					Send
				</button>
			</form>

			<h2>Other ways to reach us</h2>
			<p>
				Sales: <a href="mailto:hello@payfernly.com">hello@payfernly.com</a>
				<br />
				Customer support: <a href="mailto:support@payfernly.com">support@payfernly.com</a> or
				(503) 555-0148, 6 a.m. to 6 p.m. Pacific, Monday to Friday
				<br />
				Mail: Fernly, Inc., 1120 SE Division St, Suite 300, Portland, OR 97202
			</p>
		</section>
	);
}
