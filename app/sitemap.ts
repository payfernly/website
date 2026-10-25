import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { BASE_URL, SITE_PAGES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...SITE_PAGES.map(({ path }) => ({ url: `${BASE_URL}${path === "/" ? "" : path}` })),
		...POSTS.map((post) => ({
			url: `${BASE_URL}/blog/${post.slug}`,
			lastModified: post.date,
		})),
	];
}
