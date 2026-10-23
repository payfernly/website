import type { Metadata } from "next";
import sitemap from "@/app/sitemap";
import { POSTS } from "@/lib/posts";
import { metadata as home } from "@/app/page";
import { metadata as pricing } from "@/app/pricing/page";
import { metadata as payroll } from "@/app/features/payroll/page";
import { metadata as benefits } from "@/app/features/benefits/page";
import { metadata as compliance } from "@/app/features/compliance/page";
import { metadata as about } from "@/app/about/page";
import { metadata as blog } from "@/app/blog/page";
import { metadata as contact } from "@/app/contact/page";
import { metadata as disrupt } from "@/app/events/techcrunch-disrupt-2027/page";

export const dynamic = "force-static";

const BASE = "https://payfernly.com";

type Kind = "Product" | "Pricing" | "Guides" | "Company" | "Optional";

const SECTIONS: Kind[] = ["Product", "Pricing", "Guides", "Company", "Optional"];

type Entry = { kind: Kind; title: string; description?: string };

function fromMetadata(kind: Kind, meta: Metadata, fallbackDescription?: string): Entry {
	const title =
		typeof meta.title === "string"
			? meta.title
			: meta.title && "absolute" in meta.title
				? meta.title.absolute
				: "";
	return { kind, title, description: meta.description ?? fallbackDescription };
}

const PAGES: Record<string, Entry> = {
	"/pricing": fromMetadata("Pricing", pricing),
	"/features/payroll": fromMetadata("Product", payroll),
	"/features/benefits": fromMetadata("Product", benefits),
	"/features/compliance": fromMetadata("Product", compliance),
	"/blog": fromMetadata("Guides", blog),
	"/about": fromMetadata("Company", about),
	"/contact": fromMetadata("Company", contact, "Talk to the Fernly team or book a demo."),
	"/events/techcrunch-disrupt-2027": fromMetadata("Optional", disrupt),
	...Object.fromEntries(
		POSTS.map((post) => [
			`/blog/${post.slug}`,
			{ kind: "Guides", title: post.title, description: post.summary } satisfies Entry,
		]),
	),
};

export function GET() {
	const grouped = new Map<Kind, string[]>(SECTIONS.map((kind) => [kind, []]));

	for (const { url } of sitemap()) {
		const path = url.slice(BASE.length) || "/";
		const page = PAGES[path];
		if (!page) continue;
		const line = page.description
			? `- [${page.title}](${url}): ${page.description}`
			: `- [${page.title}](${url})`;
		grouped.get(page.kind)!.push(line);
	}

	const lines = ["# Fernly", "", `> ${home.description}`, ""];
	for (const [kind, links] of grouped) {
		if (links.length === 0) continue;
		lines.push(`## ${kind}`, "", ...links, "");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
