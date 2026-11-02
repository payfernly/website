import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Payroll for founders — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "For founders",
		title: "Payroll for founders",
		subtitle: "We make payroll boring. You sign off.",
	});
}
