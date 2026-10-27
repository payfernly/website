import { renderFeatureOgImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
	return renderFeatureOgImage({
		eyebrow: "Payroll for small US teams",
		title: "Payroll for teams of 5 to 50",
		subtitle: "Payroll that takes four minutes, not your whole Friday.",
	});
}
