const SITE_URL = "https://payfernly.com";

export function OrganizationJsonLd({ description }: { description: string }) {
	const organization = {
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "Fernly",
		legalName: "Fernly, Inc.",
		url: SITE_URL,
		logo: `${SITE_URL}/logo.svg`,
		description,
		foundingDate: "2021",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Portland",
			addressRegion: "OR",
			addressCountry: "US",
		},
	};

	const website = {
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		name: "Fernly",
		url: SITE_URL,
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
