const SITE_URL = "https://payfernly.com";

export function OrganizationJsonLd({ description }: { description: string }) {
	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${SITE_URL}/#organization`,
				name: "Fernly",
				url: SITE_URL,
				logo: `${SITE_URL}/logo.svg`,
				description,
				foundingDate: "2021",
				founder: [
					{ "@type": "Person", name: "Priya Raman" },
					{ "@type": "Person", name: "Marcus Lindqvist" },
				],
				address: {
					"@type": "PostalAddress",
					addressLocality: "Portland",
					addressRegion: "OR",
					addressCountry: "US",
				},
				areaServed: "US",
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				name: "Fernly",
				url: SITE_URL,
				publisher: { "@id": `${SITE_URL}/#organization` },
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}
