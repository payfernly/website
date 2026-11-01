import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://payfernly.com"),
	title: {
		default: "Fernly — Payroll for small teams",
		template: "%s — Fernly",
	},
	openGraph: {
		siteName: "Fernly",
		type: "website",
	},
	icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* Visitors, keyed and without async: running A/B tests apply before the first paint. */}
				{/* eslint-disable-next-line @next/next/no-sync-scripts -- blocking on purpose */}
				<script src="https://lettervisit.com/v.js?k=lv_pub_vyyklm2zei0phbxbfpynh5kw" data-key="lv_pub_vyyklm2zei0phbxbfpynh5kw" />
			</head>
			<body>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
