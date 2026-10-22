import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Benefits administration — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Benefits",
		title: "Benefits administration",
		subtitle: "Benefits your team can enroll in from their phone.",
	});
}
