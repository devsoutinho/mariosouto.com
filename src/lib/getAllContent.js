import glob from 'fast-glob';
import fs from 'fs/promises';
import * as path from 'path';
import * as matter from 'gray-matter';

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/posts/${articleFilename}`
  )

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/posts'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

// =========================

async function importPosts(postFilename) {
  const filePath = path.join(process.cwd(), 'posts', postFilename);
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { data: meta, content } = matter(fileContent);

  const date = Array
    .from(postFilename.substring(0, 8))
    .reduce((acc, curr, index) => {
      if (index === 4 || index === 6) {
        return acc + '-' + curr;
      }
      return acc + curr;
    }, '');
  const slug = postFilename.substring(9, postFilename.length - 3);

  return {
    date,
    slug,
    author: 'Mario Souto',
    comments: true,
    ...meta,
    content,
  }
}

export async function getAllMarkdownPosts() {
  let postFilenames = await glob(['*.md'], {
    cwd: path.join(process.cwd(), 'posts'),
  })

  let posts = await Promise.all(postFilenames.map(importPosts))

  return posts.sort((a, z) => new Date(z.date) - new Date(a.date))
}