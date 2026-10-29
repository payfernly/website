import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Your named payroll specialist — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Your specialist",
		title: "Your named payroll specialist",
		subtitle: "Payroll help from someone who already knows your company.",
	});
}
