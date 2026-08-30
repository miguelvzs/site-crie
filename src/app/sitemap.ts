import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { getAllPostsMeta } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsMeta();

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/noticias`, lastModified: new Date() },
    ...posts.map((post) => ({
      url: `${SITE_URL}/noticias/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
