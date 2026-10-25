import { POSTS } from "@/lib/posts";
import { BASE_URL, SITE_PAGES, type PageKind } from "@/lib/site";

export const dynamic = "force-static";

type Link = { title: string; url: string; summary: string };

const DESCRIPTION =
	"Fernly runs payroll, files federal, state and local payroll taxes, and keeps benefits deductions in sync for US companies with 5 to 50 employees. It offers unlimited pay runs, contractor payments with year-end 1099-NECs, employee self-service, and a named payroll specialist based in Portland, Oregon on every account.";

function pageLinks(kind: PageKind): Link[] {
	return SITE_PAGES.filter((page) => page.kind === kind).map((page) => ({
		title: page.title,
		url: `${BASE_URL}${page.path}`,
		summary: page.summary,
	}));
}

function section(heading: string, links: Link[]): string {
	if (links.length === 0) return "";
	const lines = links.map((link) => `- [${link.title}](${link.url}): ${link.summary}`);
	return `## ${heading}\n\n${lines.join("\n")}\n`;
}

export function GET() {
	const sections = [
		section("Product", pageLinks("product")),
		section("Pricing", pageLinks("pricing")),
		section("Guides", [
			...pageLinks("guides"),
			...POSTS.map((post) => ({
				title: post.title,
				url: `${BASE_URL}/blog/${post.slug}`,
				summary: post.summary,
			})),
		]),
		section("Optional", pageLinks("company")),
	].filter(Boolean);

	const body = `# Fernly\n\n> ${DESCRIPTION}\n\n${sections.join("\n")}`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
