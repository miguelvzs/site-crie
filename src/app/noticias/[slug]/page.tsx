import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/primitives";
import { getPostSlugs, getPostMeta } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

async function loadPost(slug: string) {
  try {
    const [meta, mod] = await Promise.all([
      getPostMeta(slug),
      import(`@content/noticias/${slug}.mdx`) as Promise<{ default: ComponentType }>,
    ]);
    return { meta, Post: mod.default };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) return {};
  return { title: loaded.meta.title, description: loaded.meta.excerpt };
}

export default async function NoticiaPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) notFound();

  const { meta, Post } = loaded;

  return (
    <Container className="max-w-[820px] py-24">
      <p className="m-0 mb-3 font-mono text-xs font-medium tracking-[.12em] text-mute-400">
        <time dateTime={meta.date}>
          {new Date(meta.date).toLocaleDateString("pt-BR", { dateStyle: "long" })}
        </time>
      </p>
      <article>
        <Post />
      </article>
    </Container>
  );
}
