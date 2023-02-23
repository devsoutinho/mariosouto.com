import { Card } from '@src/components/Card';
import { Section } from '@src/components/Section';
import { SimpleLayout } from '@src/components/SimpleLayout';
import { formatDate } from '@src/lib/formatDate';
import config from "@src/config";
import { Head } from "@src/infra/Head/Head";

const conferences = [
  {
    url: "https://www.alura.com.br/artigos/dev-leaders-conference",
    author: "",
    date: "2022-10-24",
    slug: "",
    title: "O que vem depois do Sênior na Carreira Dev?",
    description: "A palestra aborda o que vem depois do cargo de Sênior na carreira de desenvolvimento de software, e como se preparar para isso.",
    source: "Dev Leaders Conference",
    category: "conference",
    tags: ["carreira", "desenvolvimento"],
  }
];

const podcasts = [
  {
    url: "https://jovemnerd.com.br/nerdcast/nerdtech/chat-gpt-a-revolucao-em-forma-de-texto/",
    author: "",
    date: "2023-02-03",
    slug: "",
    title: "Chat GPT: a revolução em forma de texto",
    description: "Vamos falar da evolução do machine learning e como isso está mudando o nosso dia a dia, a partir de avanços como os da OpenAI com o ChatGPT.",
    source: "Nerdcast",
    category: "podcast",
    tags: ["machine learning", "chatbot"],
  }
];

const contents = [
  ...podcasts,
  ...conferences,
];


export default function Speaking() {
  const description = "Já palestrei em diversos eventos, e amo participar de podcasts";

  return (
    <>
      <Head
        title={`Apresentações - ${config.owner}`}
        description={description}
      />

      <SimpleLayout
        title={description}
        intro="Uma das minhas maneiras favoritas de compartilhar minhas ideias é ao vivo no palco, onde tem ali pessoas assistindo, as reações individuais... e adoro entrevistas em podcast porque me dão a oportunidade de responder a perguntas em vez de apenas apresentar minhas opiniões."
      >
        <div className="space-y-20">
          <SpeakingSection title="Eventos">
            {contents.filter((content) => content.category === "conference").map((conference) => (
              <Appearance
                key={conference.url}
                href={conference.url}
                title={conference.title}
                description={conference.description}
                event={`${conference.source}, ${formatDate(conference.date)}`}
                cta="Ver mais sobre"
              />
            ))}
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            {contents.filter((content) => content.category === "podcast").map((podcast) => (
              <Appearance
                key={podcast.url}
                href={podcast.url}
                title={podcast.title}
                description={podcast.description}
                event={`${podcast.source}, ${formatDate(podcast.date)}`}
                cta="Ouvir o podcast"
              />
            ))}
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}