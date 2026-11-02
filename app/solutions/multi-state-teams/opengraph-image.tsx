import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Payroll for multi-state teams — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "For multi-state teams",
		title: "Payroll for multi-state teams",
		subtitle: "Payroll for teams in more than one state.",
	});
}
