import Link from "next/link";
import styles from "./SiteHeader.module.css";

const NAV = [
	{ href: "/features/payroll", label: "Payroll" },
	{ href: "/features/benefits", label: "Benefits" },
	{ href: "/features/compliance", label: "Compliance" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/blog", label: "Blog" },
];

export function SiteHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Link href="/" className={styles.brand}>
					<img src="/logo.svg" alt="Fernly" width={28} height={28} />
					<span>Fernly</span>
				</Link>
				<nav className={styles.nav} aria-label="Main">
					{NAV.map((item) => (
						<Link key={item.href} href={item.href}>
							{item.label}
						</Link>
					))}
				</nav>
				<div className={styles.actions}>
					<Link href="/contact" className={styles.login}>
						Talk to us
					</Link>
					<Link href="/pricing" className={styles.cta}>
						Get started
					</Link>
				</div>
			</div>
		</header>
	);
}
