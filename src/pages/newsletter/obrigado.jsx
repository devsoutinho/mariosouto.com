import React from "react";
import Script from "next/script"
import { Container } from "@src/components/Container";

export default function NewsletterSuccess() {
  const [email, setEmail] = React.useState("");

  return (
    <Container className="mt-24 text-white flex items-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-center">
        Obrigado por se inscrever!
      </h1>
    </Container>
  )
}