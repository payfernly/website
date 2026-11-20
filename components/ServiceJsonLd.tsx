const SITE_URL = "https://payfernly.com";

export function ServiceJsonLd({
	name,
	description,
	path,
	serviceType,
	audience,
}: {
	name: string;
	description: string;
	path: string;
	serviceType: string;
	audience: string;
}) {
	const data = {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		url: `${SITE_URL}${path}`,
		serviceType,
		areaServed: { "@type": "Country", name: "United States" },
		audience: { "@type": "BusinessAudience", audienceType: audience },
		provider: {
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
