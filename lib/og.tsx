import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export async function renderFeatureOgImage({
	eyebrow,
	title,
	subtitle,
}: {
	eyebrow: string;
	title: string;
	subtitle: string;
}) {
	const logo = await readFile(join(process.cwd(), "public/logo.svg"));
	const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "72px 80px",
					background: "#faf8f5",
					color: "#001c64",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={logoSrc} width={64} height={64} alt="" />
					<div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em" }}>Fernly</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							fontSize: 24,
							fontWeight: 700,
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							color: "#0070e0",
							marginBottom: 24,
						}}
					>
						{eyebrow}
					</div>
					<div
						style={{
							fontSize: 84,
							fontWeight: 700,
							lineHeight: 1.08,
							letterSpacing: "-0.03em",
							marginBottom: 28,
						}}
					>
						{title}
					</div>
					<div style={{ fontSize: 34, lineHeight: 1.35, color: "#515f76" }}>
						{subtitle}
					</div>
				</div>
				<div style={{ fontSize: 26, color: "#515f76" }}>payfernly.com</div>
			</div>
		),
		OG_SIZE,
	);
}
