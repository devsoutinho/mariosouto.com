
import { Card } from '@src/components/Card'
import { Section } from '@src/components/Section'
import { SimpleLayout } from '@src/components/SimpleLayout'
import config from "@src/config"
import { Head } from "@src/infra/Head/Head"
import { slugify } from "@src/infra/string/slugify/slugify"
import { getCMSData } from "@src/_data/getCMSData"

export async function getStaticProps() {
  return {
    props: {
      contents: getCMSData(),
    },
  }
}

export default function Uses({ contents }) {
  const title = "Softwares que eu uso, gadgets que eu amo, e outras coisas que recommendo.";
  const description = "Frequentemente eu recebo perguntas sobre os softwares que eu uso, como eu me mantenho produtivo, ou o que eu compro para me fazer parecer produtivo quando na verdade eu só estou procrastinando. Aqui está uma lista de tudo que eu gosto. \nSe quiser comprar com meu link, eu ganho uma pequena comissão e você ajuda o projeto a continuar existindo. Obrigado!";

  return (
    <>
      <Head
        ogTitle={"DevSoutinho - Setup"}
        title={`Setup - ${config.owner}`}
        description={title}
      />

      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="space-y-20">
          {["Workstation", "Development tools", "Design", "Produtividade"].map((category) => (
            <ToolsSection key={category} title={category}>
              {contents.filter((content) => content.category === slugify(category)).map((content) => (
                <Tool
                  key={content.url}
                  title={content.title}
                  href={content.url}
                  cta={content.tags.includes("afiliado") ? "Compre com meu link" : "Ver mais"}
                >
                  {content.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, cta, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
      <Card.Cta>{cta || "Ver mais"}</Card.Cta>
    </Card>
  )
}