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
				{/* Letter: counts visitors on every page and turns on Letter Edit (⌘L). Loads async and hides the page at most 1s while an A/B variant is drawn. */}
				<script dangerouslySetInnerHTML={{ __html: "(function(w,d){var h=null;try{var l=w.localStorage,p=JSON.parse(l.getItem(\"lv:vp:\"+\"lv_pub_vyyklm2zei0phbxbfpynh5kw\")||\"[]\"),q=(location.pathname||\"/\").replace(/\\/{2,}/g,\"/\").replace(/(.)\\/+$/,\"$1\");if(!l.getItem(\"lv:seen:\"+\"lv_pub_vyyklm2zei0phbxbfpynh5kw\")||p.indexOf(q)>=0){h=d.createElement(\"style\");h.textContent=\"html{opacity:0!important}\";d.head.appendChild(h)}}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(function(){if(h)w.__lvLate=1;w.__lvReveal()},1000);var s=d.createElement(\"script\");s.src=\"https://lettervisit.com/v.js?k=lv_pub_vyyklm2zei0phbxbfpynh5kw\";s.async=true;s.setAttribute(\"data-key\",\"lv_pub_vyyklm2zei0phbxbfpynh5kw\");s.onerror=w.__lvReveal;d.head.appendChild(s)})(window,document)" }} />
			</head>
			<body data-letter-edit>
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
