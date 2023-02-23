import { createPost } from "../infra/createPost";

export const setup = [
  createPost({
    title: "Macbook Pro 13 polegadas, processador M1, 16gb de RAM",
    url: "https://amzn.to/3m10ee5",
    date: "2021-09-20",
    description: "Eu adorei a máquina, principalmente pela portabilidade e pela bateria que dura o dia todo. NADA a reclamar desse aqui.",
    source: "Setup",
    category: "workstation",
    tags: ["pc", "notebook", "setup", "apple", "afiliado"],
  }),
  createPost({
    title: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    date: "2018-09-20",
    description: "Eu usava Sublime Text, até conhecer o VSCode e não larguei mais. Terminal integrado, autocomplete e o ecossistema de plugins me fez ficar aqui mesmo algumas vezes já tendo pego licença do WebStorm.",
    source: "Setup",
    category: "Development Tools",
    tags: [],
  }),
  createPost({
    title: "Figma",
    url: "https://www.figma.com/",
    date: "2021-09-20",
    description: "Hoje pra manter os challenges do canal entre outras coisas, eu uso o Figma. É muito bom pra prototipação e pra trabalhar em equipe (mesmo que eu tenha o plano com uma pessoa só).",
    source: "Setup",
    category: "Design",
    tags: ["design", "layout", "prototipação", "figma"],
  }),
  createPost({
    title: "CleanShot X",
    url: "https://cleanshot.com/",
    date: "2022-12-01",
    description: "Simplesmente o MELHOR software para tirar screenshots. Ele tem suporte para OCR, edição rápida, e um monte de outras coisas que eu não uso, mas que são muito úteis.",
    source: "Setup",
    category: "Produtividade",
    tags: [],
  })
];