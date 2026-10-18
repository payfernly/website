import Link from "next/link";
import styles from "@/components/page.module.css";

export default function NotFound() {
	return (
		<section className={styles.narrow}>
			<h1>We couldn&apos;t find that page.</h1>
			<p className={styles.lede}>It may have moved, or the link may be out of date.</p>
			<Link href="/" className={styles.primary}>
				Back to the home page
			</Link>
		</section>
	);
}
