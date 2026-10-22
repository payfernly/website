import type { Metadata } from "next";
import Script from "next/script";
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
			<body>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
				<Script
					src="https://lettervisit.com/v.js"
					data-key="lv_pub_vyyklm2zei0phbxbfpynh5kw"
					strategy="lazyOnload"
				/>
			</body>
		</html>
	);
}
