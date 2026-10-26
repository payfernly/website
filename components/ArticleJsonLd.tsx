import type { Post } from "@/lib/posts";

const SITE_URL = "https://payfernly.com";

export function ArticleJsonLd({ post }: { post: Post }) {
	const url = `${SITE_URL}/blog/${post.slug}`;

	const data = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		name: post.title,
		headline: post.title,
		description: post.summary,
		url,
		mainEntityOfPage: url,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			"@type": "Person",
			name: post.author,
		},
		publisher: {
			"@type": "Organization",
			name: "Fernly",
			url: SITE_URL,
			logo: `${SITE_URL}/logo.svg`,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}
