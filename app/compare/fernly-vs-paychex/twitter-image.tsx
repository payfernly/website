import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Fernly vs Paychex — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Compare",
		title: "Fernly vs Paychex",
		subtitle: "Payroll for teams of 5 to 50, side by side.",
	});
}
