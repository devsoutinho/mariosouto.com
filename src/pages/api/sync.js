import fs from 'fs';
import { getAllArticles } from '@src/lib/getAllContent';
import { slugify } from "@src/infra/string/slugify/slugify";
import { getYoutubeId } from "@src/infra/string/getYouTubeId/getYouTubeId";

export default async function handler(req, res) {
  if(req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  if(process.env.NODE_ENV !== 'development') {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  const videosToSync = 1;

  const videos = await getAllVideos();
  const articles = await getAllArticles();

  // remove videos that are already in the articles by URL
  const videosToCreate = videos.filter((video) => {
    const isAlreadyInArticles = articles.find((article) => article.url === video.url);
    return !isAlreadyInArticles;
  }).slice(0, videosToSync);

  videosToCreate.forEach(video => {
    console.log("date", );
    const date = new Date(video.date);
    const postDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart("2", "0")}-${(date.getDate()).toString().padStart("2", "0")}`;
    const template = `
import { Video, Link, ArticleLayout } from '@src/components/content'

export const meta = {
  url: "${video.url}",
  image: 'https://i.ytimg.com/vi/${getYoutubeId(video.url)}/maxresdefault.jpg',
  author: 'Mario Souto',
  date: '${postDate}',
  slug: '${slugify(video.title)}',
  title: '${video.title}',
  description: '${video.excerpt}',
  source: 'devsoutinho',
  category: '${video.title.includes("shorts") ? "shorts" : "video"}',
  tags: ['javascript', 'variável', 'programação'],
  comments: true,
}

export default (props) => <ArticleLayout meta={meta} {...props} />

${video.excerpt}

<Video videoId="${getYoutubeId(video.url)}" youtube />

---

Link para assistir direto e compartilhar: https://youtu.be/${getYoutubeId(video.url)}

---
    `;
    console.log('video', video);
    const fileName = slugify(video.title);
    fs.writeFileSync(`./src/pages/posts/${fileName}.mdx`, template.trim());
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ videosToCreate }))
}

// ====================

async function getAllVideos() {
  const query = `
  {
    posts(input: { limit: 200 }) {
      title
      url
      image
      excerpt
      date
    }
  }
  `;
  const { data } = await fetch("https://mariosouto-com-monorepo-api-mariosouto-com.vercel.app/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());

  return data.posts;
}