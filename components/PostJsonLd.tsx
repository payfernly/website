import type { Post } from "@/lib/posts";

const SITE_URL = "https://payfernly.com";

export function PostJsonLd({ post }: { post: Post }) {
	const url = `${SITE_URL}/blog/${post.slug}`;

	const data = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.summary,
		url,
		mainEntityOfPage: { "@type": "WebPage", "@id": url },
		author: { "@type": "Person", name: post.author },
		datePublished: post.date,
		dateModified: post.updated ?? post.date,
		publisher: {
			"@type": "Organization",
			name: "Fernly",
			url: SITE_URL,
			logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}
