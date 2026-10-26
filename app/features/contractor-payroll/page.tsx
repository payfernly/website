import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/page.module.css";
import { FeatureJsonLd } from "@/components/FeatureJsonLd";

const title = "Contractor payroll";
const description =
	"Pay 1099 contractors in the same Fernly pay run as your W-2 employees. We prepare their 1099-NECs at year end, on every plan, with no year-end fee.";

export const metadata: Metadata = {
	title,
	description,
	alternates: { canonical: "/features/contractor-payroll" },
};

export default function ContractorPayrollPage() {
	return (
		<>
			<FeatureJsonLd
				name="Fernly Contractor payroll"
				description={description}
				path="/features/contractor-payroll"
				lowPrice={40}
				offerCount={3}
			/>
			<section className={styles.section}>
				<div className={styles.hero}>
					<div>
						<p className={styles.eyebrow}>Contractors</p>
						<h1>Pay 1099 contractors alongside your employees.</h1>
						<p className={styles.lede}>
							Your contractors go in the same pay run as your W-2 team. One review, one
							approval, and we prepare their 1099-NECs at year end.
						</p>
					</div>
					<img
						src="/illustrations/run-payroll.svg"
						alt="Three steps of a Fernly pay run: review hours, preview taxes, approve"
						width={480}
						height={300}
						fetchPriority="high"
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Built for teams that mix W-2s and 1099s</h2>
				<div className={styles.grid3}>
					<div className={styles.card}>
						<h3>One pay run for everyone</h3>
						<p>
							Employees and contractors are paid in the same run, so you approve one payroll
							instead of keeping a second system for the people you pay on a 1099.
						</p>
					</div>
					<div className={styles.card}>
						<h3>1099-NECs, prepared for you</h3>
						<p>
							Pay 1099 contractors alongside employees and we&apos;ll prepare their 1099-NECs at
							year end.
						</p>
					</div>
					<div className={styles.card}>
						<h3>A real person to ask</h3>
						<p>
							Every account gets a named payroll specialist. When a contractor question comes
							up, you call someone who already knows your account.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>You only pay for contractors you pay</h2>
				<p className={styles.lede}>
					Contractors count as people only in the months you pay them. 1099-NECs are included on
					every plan, with no year-end fee.
				</p>
				<Link href="/pricing" className={`${styles.primary} ${styles.primaryDeep}`}>
					Compare plans
				</Link>
			</section>
		</>
	);
}
