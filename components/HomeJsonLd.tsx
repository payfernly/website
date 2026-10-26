const SITE_URL = "https://payfernly.com";

export function HomeJsonLd({ description }: { description: string }) {
	const organization = {
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "Fernly",
		legalName: "Fernly, Inc.",
		url: SITE_URL,
		logo: `${SITE_URL}/logo.svg`,
		description,
		email: "hello@payfernly.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "1120 SE Division St, Suite 300",
			addressLocality: "Portland",
			addressRegion: "OR",
			postalCode: "97202",
			addressCountry: "US",
		},
	};

	const website = {
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		name: "Fernly",
		url: SITE_URL,
		description,
		publisher: { "@id": `${SITE_URL}/#organization` },
	};

	const data = {
		"@context": "https://schema.org",
		"@graph": [organization, website],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}
