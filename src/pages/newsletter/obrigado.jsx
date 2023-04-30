import React from "react";
import { Container } from "@src/components/Container";
import { Head } from "@src/infra/Head/Head";
import config from "@src/config.js";

export default function NewsletterSuccess() {
  const [email, setEmail] = React.useState("");

  const title = "Obrigado por se inscrever!";
  const description = "Em breve você irá receber e-mails com minhas novidades";

  return (
    <>
      <Head
        ogTitle={title}
        title={`${title} - ${config.owner} ${config.title}`}
        description={description}
      />
      <Container className="mt-24 text-white flex items-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-center">
          Obrigado por se inscrever!
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center max-w-[500px] mx-auto mb-6">
          {description}
        </p>
      </Container>
    </>
  )
}