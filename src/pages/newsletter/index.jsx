import React from "react";
import Script from "next/script"
import { Container } from "@src/components/Container";

export default function NewsletterSuccess() {
  const [email, setEmail] = React.useState("");

  return (
    <Container className="mt-24 text-white flex items-center">
      <Script src="https://send.klickpages.com.br/static/js/recaptcha.min.js" />
      <style global jsx>{`#email + div { display: none !important; }`}</style>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-center">
        Newsletter DevSoutinho
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center max-w-[500px] mx-auto mb-6">
        Acompanha meu trabalho e quer ficar por dentro das novidades do que eu ando fazendo? Assine a minha newsletter e receba os conteúdos em primeira mão!
      </p>
      <form
        klicksend-form-id='QXuEYKn'
        method="post"
        action="https://handler.klicksend.com.br/subscription/QXuEYKn"
        className="flex flex-col gap-2 max-w-[300px] mx-auto"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-x500 focus:outline-none focus:ring-4 focus:ring-primary-x500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-x400 dark:focus:ring-primary-x400/10 sm:text-sm"
        />
        <button class="g-recaptcha inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-primary-x500 font-semibold text-zinc-100 hover:bg-primary-x400 active:bg-primary-x800 active:text-zinc-100/7 flex-none">
          Inscrever-se
        </button>

        <input
          type="checkbox"
          name="gdpr"
          id="gdpr"
          placeholder="Concordo em receber os e-mails"
          value="Concordo em receber os e-mails"
          required
          defaultChecked
          style={{ position: "absolute", left: "-50000px" }}
          tabIndex={-1}
        />
        <div style={{ position: "absolute", left: "-50000px" }} aria-hidden="true">
          <input type="text" name="b_QXuEYKn" tabIndex={-1} value="" />
        </div>
      </form>
    </Container>
  )
}