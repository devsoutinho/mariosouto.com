import Image from 'next/image'

import { Card } from '@src/components/Card'
import { SimpleLayout } from '@src/components/SimpleLayout'
import config from "@src/config"
import { Head } from "@src/infra/Head/Head"

import { getCMSData } from "@src/_data/getCMSData"

export async function getStaticProps() {
  return {
    props: {
      contents: getCMSData(),
    },
  }
}

export default function Projects({ contents }) {
  const title = 'Confira meus projetos e cursos';
  const description = 'A lista aqui é tem as coisas que eu mais gostei de trabalhar, e se você explorar os links podem ter cupons de desconto 😜';
  return (
    <>
      <Head
        ogTitle={"Conheça meus cursos e projetos"}
        title={`Cursos e Projetos - ${config.owner}`}
        description={description}
      />
      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="space-y-20">
          <div>
            <h2
              id="cursos"
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
            >
              <a href="#cursos">
                Cursos
              </a>
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-10"
            >
              {contents.filter((content) => content.source === "cursos").map((content) => (
                <Card as="li" key={content.slug}>
                  <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={content.image}
                      alt={`Logo de ${content.title}`}
                      width={112}
                      height={112}
                      className="h-28 w-28 rounded-full"
                      unoptimized
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={content.url}>{content.title}</Card.Link>
                  </h2>
                  <Card.Description>{content.description}</Card.Description>
                  <p className="items-center relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-x500 dark:text-zinc-200">
                    <span className="mr-2">Quero aprender</span>
                    <ChevronRightIcon className="h-6 w-6 flex-none stroke-current" />
                  </p>
                </Card>
              ))}
            </ul>
          </div>
          <div>
            <h2
              id="challenges"
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
            >
              <a
                href="#challenges"
              >
                #DevSoutinhoChallenges
              </a>
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-10"
            >
              {contents.filter((content) => content.source === "challenges").map((content) => (
                <Card as="li" key={content.slug}>
                  <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={content.image}
                      alt={`Logo de ${content.title}`}
                      width={112}
                      height={112}
                      className="h-28 w-28 rounded-full"
                      unoptimized
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={content.url}>{content.title}</Card.Link>
                  </h2>
                  <Card.Description>{content.description}</Card.Description>
                  <p className="items-center relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-x500 dark:text-zinc-200">
                    <span className="ml-2">Quero praticar</span>
                    <ChevronRightIcon className="h-6 w-6 flex-none stroke-current" />
                  </p>
                </Card>
              ))}
            </ul>
          </div>
          <div>
            <h2
              id="projetos"
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
            >
              <a href="#projetos">
                Projetos
              </a>
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-10"
            >
              {contents.filter((content) => content.source === "projetos").map((content) => (
                <Card as="li" key={content.slug}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={content.image}
                      alt={`Logo de ${content.title}`}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                      unoptimized
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={content.url}>{content.title}</Card.Link>
                  </h2>
                  <Card.Description>{content.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-x500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{content.url.split("//")[1]}</span>
                  </p>
                </Card>
              ))}
            </ul>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}