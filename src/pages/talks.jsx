import { Card } from '@src/components/Card';
import { Section } from '@src/components/Section';
import { SimpleLayout } from '@src/components/SimpleLayout';
import { formatDate } from '@src/lib/formatDate';
import config from "@src/config";
import { Head } from "@src/infra/Head/Head";
import { getCMSData } from "@src/_data/getCMSData"

export async function getStaticProps() {
  return {
    props: {
      contents: getCMSData(),
    },
  }
}

export default function Speaking({ contents }) {
  const description = "Já palestrei em diversos eventos, e amo participar de podcasts";

  return (
    <>
      <Head
        ogTitle={"Podcasts, participações e palestras"}
        title={`Talks - ${config.owner}`}
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
                event={`${conference.sourceTitle}, ${formatDate(conference.date)}`}
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
                event={`${podcast.sourceTitle}, ${formatDate(podcast.date)}`}
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