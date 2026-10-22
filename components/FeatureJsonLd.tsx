const SITE_URL = "https://payfernly.com";

export function FeatureJsonLd({
	name,
	description,
	path,
	lowPrice,
	offerCount,
}: {
	name: string;
	description: string;
	path: string;
	lowPrice: number;
	offerCount: number;
}) {
	const publisher = {
		"@type": "Organization",
		name: "Fernly",
		url: SITE_URL,
		logo: `${SITE_URL}/logo.svg`,
	};

	const data = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name,
		description,
		url: `${SITE_URL}${path}`,
		applicationCategory: "BusinessApplication",
		applicationSubCategory: "Payroll software",
		operatingSystem: "Web",
		image: `${SITE_URL}${path}/opengraph-image`,
		publisher,
		offers: {
			"@type": "AggregateOffer",
			priceCurrency: "USD",
			lowPrice,
			highPrice: 150,
			offerCount,
			url: `${SITE_URL}/pricing`,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}
