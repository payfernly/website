import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { PAGES, absoluteUrl } from "@/lib/site-map";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...PAGES.map((page) => ({ url: absoluteUrl(page.path) })),
		...POSTS.map((post) => ({
			url: absoluteUrl(`/blog/${post.slug}`),
			lastModified: post.date,
		})),
	];
}
