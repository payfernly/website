import { OG_SIZE, renderFeatureOgImage } from "@/lib/og";

export const alt = "Contractor payroll — Fernly";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
	return renderFeatureOgImage({
		eyebrow: "Contractors",
		title: "Contractor payroll",
		subtitle: "Pay 1099 contractors alongside your employees.",
	});
}
