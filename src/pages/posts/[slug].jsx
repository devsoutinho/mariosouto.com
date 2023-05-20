import { ArticleLayout } from '@src/components/content'
import { getAllMarkdownPosts } from "@src/lib/getAllContent";
import Markdown from 'markdown-to-jsx';
import { getYoutubeId } from "@src/infra/string/getYouTubeId/getYouTubeId";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "bla",
        },
      },
    ],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const posts = await getAllMarkdownPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const { content, ...meta } = post;

  return {
    props: {
      meta,
      content,
    },
  }
}


export default function PostPage({ meta, content, ...props }) {
  return (
    <ArticleLayout meta={meta} {...props}>
      <RenderPost content={content} />
      <hr />
    </ArticleLayout>
  )
}

export function RenderPost({ content }) {
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: Link
          },
        },
      }}
    >
      {content}
    </Markdown>
  )
}

function Link({ children, ...props }) {
  const href = props.href;
  const isPureLink = children[0].startsWith('http');
  if (isPureLink && href.includes('www.youtube.com')) {
    const youtubeId = getYoutubeId(href);
    return (
      <iframe
        className="w-full aspect-[16/9]"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }
  return <a {...props}>{children}</a>
}