import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

function inline(text: string): ReactNode[] {
	const out: ReactNode[] = [];
	let last = 0;
	for (const m of text.matchAll(INLINE)) {
		const index = m.index ?? 0;
		if (index > last) out.push(text.slice(last, index));
		if (m[1] !== undefined) {
			const href = m[2];
			out.push(
				href.startsWith("/") ? (
					<Link key={index} href={href}>
						{m[1]}
					</Link>
				) : (
					<a key={index} href={href}>
						{m[1]}
					</a>
				),
			);
		} else {
			out.push(<strong key={index}>{m[3]}</strong>);
		}
		last = index + m[0].length;
	}
	if (last < text.length) out.push(text.slice(last));
	return out;
}

export function Markdown({ source }: { source: string }) {
	const blocks = source.split(/\n\s*\n/);
	return (
		<>
			{blocks.map((block, i) => {
				const lines = block.trim().split("\n");
				if (lines[0].startsWith("### ")) return <h3 key={i}>{inline(lines[0].slice(4))}</h3>;
				if (lines[0].startsWith("## ")) return <h2 key={i}>{inline(lines[0].slice(3))}</h2>;
				if (lines.every((line) => line.startsWith("- "))) {
					return (
						<ul key={i} className={styles.list}>
							{lines.map((line, j) => (
								<li key={j}>{inline(line.slice(2))}</li>
							))}
						</ul>
					);
				}
				return <p key={i}>{inline(lines.join(" "))}</p>;
			})}
		</>
	);
}
