import type { MetadataRoute } from "next";
import { COMPETITORS } from "@/lib/competitors";
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
	"/glossary",
	"/events/techcrunch-disrupt-2027",
	"/for/agencies",
	"/competitors",
	...COMPETITORS.map((c) => `/competitors/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...PAGES.map((path) => ({ url: `${BASE}${path === "/" ? "" : path}` })),
		...POSTS.map((post) => ({
			url: `${BASE}/blog/${post.slug}`,
			lastModified: post.date,
		})),
	];
}
