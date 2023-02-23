import { createPost } from "../infra/createPost";

export const projects = [
  createPost({
    title: "DevSoutinho",
    url: "https://youtube.com/@DevSoutinho",
    image: "/images/projects/devsoutinho-logo.png",
    date: "2022-09-20",
    description: "A mais de 3 anos semanalmente lançando novos vídeos sobre tecnologia com mais de 4 milhões de views e 70 mil inscritos.",
    source: "Projetos",
    category: "WebApp",
    tags: [],
  }),
  createPost({
    title: "Podemisturar?",
    url: "https://podemisturar.com",
    image: "/images/projects/podemisturar-logo.jpg",
    date: "2022-09-20",
    description: "Já ficou com dúvida se na hora de limpar a casa ou até fazer comida, pode misturar A com B? Então esse é o lugar certo pra você!",
    source: "Projetos",
    category: "WebApp",
    tags: [],
  }),
  createPost({
    title: "Tech Guide",
    url: "https://techguide.sh",
    image: "/images/projects/techguide-logo.png",
    date: "2022-09-20",
    description: "Simplesmente o guia de carreira que faltava pra você mergulhar no mundo da programação.",
    source: "Projetos",
    category: "WebApp",
    tags: [],
  }),
];
