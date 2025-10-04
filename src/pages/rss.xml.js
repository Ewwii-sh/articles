import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");

  return rss({
    title: "Ewwii Articles",
    description: "Welcome to ewwii articles!",
    site: context.site ?? "https://ewwii-sh.github.io/articles",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/en/${article.id}/`,
    })),
  });
}
