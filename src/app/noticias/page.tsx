import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Notícias e novidades do CRIE — Centro de Integração Especial, Extrema/MG.",
};

export default async function Noticias() {
  const posts = await getAllPostsMeta();

  return (
    <Container className="py-24">
      <Eyebrow color="var(--magenta)">Notícias</Eyebrow>
      <h1 className="m-0 mt-[18px] font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.75rem]">
        O que acontece no CRIE
      </h1>

      <ul className="m-0 mt-14 grid list-none gap-6 p-0 sm:grid-cols-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col gap-[14px] border border-line-200 bg-white px-[30px] pb-[38px] pt-[34px]"
          >
            <span className="font-mono text-xs font-medium tracking-[.12em] text-mute-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", { dateStyle: "long" })}
              </time>
            </span>
            <h2 className="m-0 font-display text-[1.6875rem] font-extrabold leading-[1.1] tracking-[-.02em]">
              <Link
                href={`/noticias/${post.slug}`}
                className="text-ink-800 transition-colors duration-150 hover:text-magenta"
              >
                {post.title}
              </Link>
            </h2>
            <p className="m-0 text-[1.03125rem] leading-[1.55] text-slate-400 text-pretty">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
