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
				{/* Visitors (Setup's tag): loads v.js async and holds the page only until the A/B variant is drawn, at most 1s, so Letter being down never holds the page. */}
				<script dangerouslySetInnerHTML={{ __html: "(function(w,d){var h=null;try{var l=w.localStorage;if(!l.getItem(\"lv:seen:\"+\"lv_pub_vyyklm2zei0phbxbfpynh5kw\")||l.getItem(\"lv:vx:\"+\"lv_pub_vyyklm2zei0phbxbfpynh5kw\")){h=d.createElement(\"style\");h.textContent=\"html{opacity:0!important}\";d.head.appendChild(h)}}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(w.__lvReveal,1000);var s=d.createElement(\"script\");s.src=\"https://lettervisit.com/v.js?k=lv_pub_vyyklm2zei0phbxbfpynh5kw\";s.async=true;s.setAttribute(\"data-key\",\"lv_pub_vyyklm2zei0phbxbfpynh5kw\");d.head.appendChild(s)})(window,document)" }} />
			</head>
			<body>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
