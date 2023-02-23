import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { redirects } from './redirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  redirects: () => redirects,
  // add image provider on nextjs
  images: {
    domains: ['github.com'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
