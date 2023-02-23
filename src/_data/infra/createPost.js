
// create doc block for type source
/**
 * @typedef {"Workstation" | "Development Tools" | "Produtividade" | "Design"} Category 
 * @typedef {"javascript" | "react"} Tag
 * @typedef {"Setup" | "Nerdcast" | "Hipsters" | "Alura" | "Dev Leaders Conference"} Source
 * @typedef {Tag[]} Tags
 * @typedef {Category[]} Categories
*/

import { slugify } from "@src/infra/string/slugify/slugify";

/**
 * Create a post object
 * @param {{
 *  title: string,
 *  url: string,
 *  author?: string,
 *  slug?: string,
 *  date: string,
 *  description: string,
 *  source: Source,
 *  category: Categories,
 *  tags: Tags,
 * }}
 * @returns {{
 *  title: string,
 *  url: string,
 *  author: string,
 *  date: string,
 *  slug: string,
 *  description: string,
 *  sourceTitle: Source,
 *  source: string,
 *  category: Categories,
 *  tags: Tags,
 * }}
*/
export function createPost({
  url,
  author,
  date,
  slug,
  title,
  description,
  source,
  category,
  tags,
}) {
  return {
    url,
    author: author || "",
    date,
    slug: slug || slugify(title),
    title,
    description,
    sourceTitle: source,
    source: slugify(source),
    category: slugify(category),
    tags,
  };
}