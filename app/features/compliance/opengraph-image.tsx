import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Payroll tax compliance — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Compliance",
		title: "Payroll tax compliance",
		subtitle: "Hire in a new state without opening a new tab.",
	});
}
