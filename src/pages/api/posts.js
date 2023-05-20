import { getAllMarkdownPosts } from "@src/lib/getAllContent";

export default async function handler(req, res) {
  const posts = (await getAllMarkdownPosts()).map(({content, ...rest}) => ({
    ...rest,
  }));

  res.status(200).json({ posts });
}