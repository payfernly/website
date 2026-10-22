import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Payroll — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Payroll",
		title: "Payroll",
		subtitle: "Review, preview, approve. That's a pay run.",
	});
}
