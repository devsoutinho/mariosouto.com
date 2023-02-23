import { createPost } from "../infra/createPost";

export const presentations = [
  createPost({
    title: "O que vem depois do Sênior na Carreira Dev?",
    url: "https://www.alura.com.br/artigos/dev-leaders-conference",
    date: "2022-10-24",
    description: "A palestra aborda o que vem depois do cargo de Sênior na carreira de desenvolvimento de software, e como se preparar para isso.",
    source: "Dev Leaders Conference",
    category: "conference",
    tags: ["carreira", "desenvolvimento"],
  }),
  createPost({
    title: "Chat GPT: a revolução em forma de texto",
    url: "https://jovemnerd.com.br/nerdcast/nerdtech/chat-gpt-a-revolucao-em-forma-de-texto/",
    date: "2023-02-03",
    description: "Vamos falar da evolução do machine learning e como isso está mudando o nosso dia a dia, a partir de avanços como os da OpenAI com o ChatGPT.",
    source: "Nerdcast",
    category: "podcast",
    tags: ["machine learning", "chatbot"],
  }),
];
