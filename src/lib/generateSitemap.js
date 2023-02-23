import fs from "fs";
import glob from 'fast-glob'

function addPage(page) {
  const path = page.replace('src/pages', '').replace('.js', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  console.log("route", route);
  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
}

export async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await glob([
    'src/pages/**/*{.js,.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}