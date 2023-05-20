import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getAllArticles, getAllMarkdownPosts } from './getAllContent'
import config from "@src/config"
import { buildOgImageUrl } from "@src/infra/Head/Head"
import { PUBLIC_SITE_URL } from "data"
import PostPage from "@src/pages/posts/[slug]"

export async function generateRssFeed() {
  let articles = await getAllArticles();
  let posts = await getAllMarkdownPosts();
  let siteUrl = (PUBLIC_SITE_URL)?.replace("http://", "https://");
  let author = {
    name: config.nickname ? `${config.owner} (${config.nickname})` : config.owner,
    email: config.email,
  }

  let feed = new Feed({
    title: author.name,
    description: config.description,
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon/favicon.png`,
    favicon: `${siteUrl}/favicon/favicon.ico`,
    copyright: `Todos os direitos reservados ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let post of posts) {
    const path = `/posts/${post.slug}`;
    let url = `${siteUrl}${path}`
    const {content, ...meta } = post;
    let html = ReactDOMServer.renderToStaticMarkup(
      <PostPage content={content} meta={meta} isRssFeed />
    );

    const image = buildOgImageUrl({
      title: post.title,
      image: post.image,
      routePath: path,
    });

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      ...(image && { image })
    });
  }
  for (let article of articles) {
    const path = `/posts/${article.slug}`;
    let url = `${siteUrl}${path}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <article.component isRssFeed />
    )

    const image = buildOgImageUrl({
      title: article.title,
      image: article.image,
      routePath: path,
    });

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
      ...(image && { image })
    });
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
