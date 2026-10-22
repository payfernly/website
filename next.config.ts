import type { NextConfig } from "next";

const LONG_CACHE = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	experimental: {
		inlineCss: true,
	},
	async headers() {
		return [
			{ source: "/illustrations/:path*", headers: LONG_CACHE },
			{ source: "/logo.svg", headers: LONG_CACHE },
		];
	},
};

export default nextConfig;
