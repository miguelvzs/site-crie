import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
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
  return { title: `${loaded.meta.title} | CRIE/APAE Extrema`, description: loaded.meta.excerpt };
}

export default async function NoticiaPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loaded = await loadPost(slug);
  if (!loaded) notFound();

  const { meta, Post } = loaded;

  return (
    <Section className="pt-16 sm:pt-24 max-w-3xl">
      <p className="text-sm text-foreground/60 mb-2">
        <time dateTime={meta.date}>
          {new Date(meta.date).toLocaleDateString("pt-BR", { dateStyle: "long" })}
        </time>
      </p>
      <article>
        <Post />
      </article>
    </Section>
  );
}
