import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notícias | CRIE/APAE Extrema",
  description: "Últimas notícias e novidades do CRIE/APAE Extrema.",
};

export default async function Noticias() {
  const posts = await getAllPostsMeta();

  return (
    <Section className="pt-16 sm:pt-24">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-10">Notícias</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Card>
              <p className="text-sm text-foreground/60 mb-1">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("pt-BR", { dateStyle: "long" })}
                </time>
              </p>
              <h2 className="font-bold text-lg mb-2">
                <Link href={`/noticias/${post.slug}`} className="hover:text-brand-blue underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-foreground/80">{post.excerpt}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
