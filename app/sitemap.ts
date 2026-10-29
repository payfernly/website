import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://payfernly.com";

const PAGES = [
	"/",
	"/pricing",
	"/features/payroll",
	"/features/benefits",
	"/features/compliance",
	"/about",
	"/blog",
	"/contact",
	"/events/techcrunch-disrupt-2027",
];

const GLOSSARY_LASTMOD = "2026-10-29";

const GLOSSARY_PAGES = ["/glossary"];

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...PAGES.map((path) => ({ url: `${BASE}${path === "/" ? "" : path}` })),
		...GLOSSARY_PAGES.map((path) => ({
			url: `${BASE}${path}`,
			lastModified: GLOSSARY_LASTMOD,
		})),
		...POSTS.map((post) => ({
			url: `${BASE}/blog/${post.slug}`,
			lastModified: post.date,
		})),
	];
}
