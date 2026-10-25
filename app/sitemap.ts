import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE_PAGES, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...SITE_PAGES.map((page) => ({ url: absoluteUrl(page.path) })),
		...POSTS.map((post) => ({
			url: absoluteUrl(`/blog/${post.slug}`),
			lastModified: post.date,
		})),
	];
}
