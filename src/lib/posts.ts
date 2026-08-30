import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content/noticias");

export type PostMeta = { slug: string; title: string; date: string; excerpt: string };

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostMeta(slug: string): Promise<PostMeta> {
  const mod = (await import(`@content/noticias/${slug}.mdx`)) as { meta: Omit<PostMeta, "slug"> };
  return { slug, ...mod.meta };
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const posts = await Promise.all(getPostSlugs().map(getPostMeta));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
