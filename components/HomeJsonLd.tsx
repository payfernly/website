const SITE_URL = "https://payfernly.com";

export function HomeJsonLd({ description }: { description: string }) {
	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${SITE_URL}/#organization`,
				name: "Fernly",
				legalName: "Fernly, Inc.",
				description,
				url: SITE_URL,
				logo: `${SITE_URL}/logo.svg`,
				email: "hello@payfernly.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "1120 SE Division St, Suite 300",
					addressLocality: "Portland",
					addressRegion: "OR",
					postalCode: "97202",
					addressCountry: "US",
				},
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				name: "Fernly",
				description,
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
