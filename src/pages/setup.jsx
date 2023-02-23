
import { Card } from '@src/components/Card'
import { Section } from '@src/components/Section'
import { SimpleLayout } from '@src/components/SimpleLayout'
import config from "@src/config"
import { Head } from "@src/infra/Head/Head"

const contents = [
  {
    url: "https://amzn.to/3m10ee5",
    author: "",
    date: "2021-09-20",
    slug: "",
    title: "Macbook Pro 13 polegadas, processador M1, 16gb de RAM",
    description: "Eu adorei a máquina, principalmente pela portabilidade e pela bateria que dura o dia todo. NADA a reclamar desse aqui.",
    source: "Setup",
    category: "worksation",
    tags: ["pc", "notebook", "setup", "apple", "afiliado"],
  },
  {
    url: "https://code.visualstudio.com/",
    author: "",
    date: "2018-09-20",
    slug: "",
    title: "Visual Studio Code",
    description: "Eu usava Sublime Text, até conhecer o VSCode e não larguei mais. Terminal integrado, autocomplete e o ecossistema de plugins me fez ficar aqui mesmo algumas vezes já tendo pego licença do WebStorm.",
    source: "Setup",
    category: "development-tools",
    tags: ["pc", "notebook", "setup", "apple"],
  },
  {
    url: "https://www.figma.com/",
    author: "",
    date: "2021-09-20",
    slug: "",
    title: "Figma",
    description: "Hoje pra manter os challenges do canal entre outras coisas, eu uso o Figma. É muito bom pra prototipação e pra trabalhar em equipe (mesmo que eu tenha o plano com uma pessoa só).",
    source: "Setup",
    category: "design",
    tags: ["design", "layout", "prototipação", "figma"],
  },
  {
    url: "https://cleanshot.com/",
    author: "",
    date: "2022-12-01",
    slug: "",
    title: "CleanShot X",
    description: "Simplesmente o MELHOR software para tirar screenshots. Ele tem suporte para OCR, edição rápida, e um monte de outras coisas que eu não uso, mas que são muito úteis.",
    source: "Setup",
    category: "productivity",
    tags: ["pc", "notebook", "setup", "apple"],
  },
];

export default function Uses() {
  const title = "Softwares que eu uso, gadgets que eu amo, e outras coisas que recommendo.";
  const description = "Frequentemente eu recebo perguntas sobre os softwares que eu uso, como eu me mantenho produtivo, ou o que eu compro para me fazer parecer produtivo quando na verdade eu só estou procrastinando. Aqui está uma lista de tudo que eu gosto. \nSe quiser comprar com meu link, eu ganho uma pequena comissão e você ajuda o projeto a continuar existindo. Obrigado!";

  return (
    <>
      <Head
        title={`Setup - ${config.owner}`}
        description={title}
      />

      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            {contents.filter((content) => content.category === "worksation").map((content) => (
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
          <ToolsSection title="Development tools">
            {contents.filter((content) => content.category === "development-tools").map((content) => (
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
          <ToolsSection title="Design">
            {contents.filter((content) => content.category === "design").map((content) => (
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
          <ToolsSection title="Produtividade">
            {contents.filter((content) => content.category === "productivity").map((content) => (
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