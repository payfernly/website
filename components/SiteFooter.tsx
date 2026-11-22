import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.col}>
					<strong>Fernly</strong>
					<p>Payroll, benefits and tax filings for US teams of 5 to 50.</p>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Product</span>
					<Link href="/features/payroll">Payroll</Link>
					<Link href="/features/benefits">Benefits</Link>
					<Link href="/features/compliance">Compliance</Link>
					<Link href="/pricing">Pricing</Link>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Company</span>
					<Link href="/about">About</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<div className={styles.col}>
					<span className={styles.heading}>Compare</span>
					<Link href="/compare/rippling">Fernly vs Rippling</Link>
				</div>
			</div>
			<p className={styles.legal}>
				© 2022 Fernly, Inc. · Fernly is not a bank. Payroll funds are held by our banking
				partner, Lakeshore Community Bank, Member FDIC.
			</p>
		</footer>
	);
}
