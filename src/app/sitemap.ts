import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { getAllPostsMeta } from "@/lib/posts";

const STATIC_ROUTES = ["", "/quem-somos", "/areas-de-atuacao", "/doe", "/noticias", "/contato"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = await getAllPostsMeta();
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/noticias/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}
