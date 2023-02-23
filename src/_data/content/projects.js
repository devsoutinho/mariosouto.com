import { createPost } from "../infra/createPost";

export const projects = [
  createPost({
    title: "Como criar um jogo com JavaScript?",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej&index=2",
    image: "/images/courses/flappy-bird-logo.png",
    date: "2022-09-20",
    description: "Já parou pra pensar como é fazer um jogo do ZERO, sem nenhuma engine? Nesse curso você vai aprender a criar um jogo do zero com JavaScript e HTML5.",
    source: "Cursos",
    category: "Iniciante",
    tags: [],
  }),
  createPost({
    title: "Git e GitHub para sobreviência",
    url: "https://www.youtube.com/watch?v=BAmvmaKQklQ&list=PLh2Y_pKOa4Uf-cUQOVNGlz_GVHx8QYoE6&index=2",
    image: "/images/courses/github-para-sobrevivencia-logo.png",
    date: "2022-09-20",
    description: "Já parou pra pensar como é fazer um jogo do ZERO, sem nenhuma engine? Nesse curso você vai aprender a criar um jogo do zero com JavaScript e HTML5.",
    source: "Cursos",
    category: "Iniciante",
    tags: [],
  }),
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
