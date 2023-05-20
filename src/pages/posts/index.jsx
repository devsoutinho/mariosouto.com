import { Card } from '@src/components/Card'
import { SimpleLayout } from '@src/components/SimpleLayout'
import config from "@src/config"
import { Head } from "@src/infra/Head/Head"
import { formatDate } from '@src/lib/formatDate'
import { getAllArticles, getAllMarkdownPosts } from '@src/lib/getAllContent'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Ver mais</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const title = "Escrevendo software, resolvendo problemas e gerando alguns bugs no caminho.";
  const description = "Aqui você vai encontrar em formato de artigos e vídeos alguns dos meus pensamentos sobre tecnologia, programação e desenvolvimento de software.";

  return (
    <>
      <Head
        ogTitle="Artigos, vídeos e postagens de reflexões recentes sobre minha carreira e tecnologia."
        title={`Posts - ${config.owner}`}
        description={description}
      />
      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: [...(await getAllMarkdownPosts()), ...(await getAllArticles())].map(({ component, content, ...meta }) => meta),
    },
  }
}
