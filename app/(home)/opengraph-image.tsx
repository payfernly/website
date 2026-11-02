import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Fernly — Payroll for teams of 5 to 50";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Payroll for small US teams",
		title: "Payroll for teams of 5 to 50",
		subtitle: "Unlimited pay runs, no setup fee.",
	});
}
