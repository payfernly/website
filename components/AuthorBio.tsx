import styles from "@/components/page.module.css";
import { getAuthor } from "@/lib/posts";

export default function AuthorBio({ name }: { name: string }) {
	const author = getAuthor(name);

	return (
		<aside className={styles.authorBio} aria-label="About the author">
			<p className={styles.eyebrow}>About the author</p>
			<h3>{author.name}</h3>
			{author.role && <p className={styles.authorRole}>{author.role}</p>}
			<p>{author.bio}</p>
		</aside>
	);
}
