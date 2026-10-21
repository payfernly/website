import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://payfernly.com";

const PAGES = [
	"/",
	"/pricing",
	"/features/payroll",
	"/features/benefits",
	"/features/compliance",
	"/industries/dental",
	"/about",
	"/blog",
	"/contact",
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
