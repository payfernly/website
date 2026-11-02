import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Payroll for operations leads — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "For operations leads",
		title: "Payroll for operations leads",
		subtitle: "Payroll, taxes, benefits. On time.",
	});
}
