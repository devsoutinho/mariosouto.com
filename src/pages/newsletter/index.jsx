import React from "react";
import Script from "next/script"
import config from "@src/config.js";
import { Container } from "@src/components/Container";
import { Head } from "@src/infra/Head/Head";

export default function NewsletterSuccess() {
  const [email, setEmail] = React.useState("");

  const description = "Acompanha meu trabalho e quer ficar por dentro das novidades do que eu ando fazendo? Assine a minha newsletter e receba os conteúdos em primeira mão!";

  return (
    <>
      <Head
        ogTitle={"Newsletter do DevSoutinho"}
        title={`Newsletter do DevSoutinho - ${config.owner} ${config.title}`}
        description={description}
      />
      <Container className="mt-24 text-white flex items-center">
        <style global jsx>{`#email + div { display: none !important; }`}</style>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-center">
          Newsletter DevSoutinho
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center max-w-[500px] mx-auto mb-6">
          {description}
        </p>
        <form
          id="sib-form"
          method="POST"
          action="https://1096123a.sibforms.com/serve/MUIEAAWNz-t-N2bjbRJ_Jo1wmVABegttSjvJlzohwI09O2COyKOwRAywZjfl6MTDVvMa0nwrnfrgI5URno23eWnBzYwdpXoR6j30WAA8m8vb9gg3cpxLQKjq-nC-TPK5q8g30io2Ac87chGu00Ta8yam_23hhxOFdojjqnsmQg744jvarMK1L0qkBegbXwJam2HMoOLFo8Eo13AU"
          className="flex flex-col gap-2 max-w-[300px] mx-auto"
        >
          <input
            type="text"
            id="EMAIL"
            name="EMAIL"
            autoComplete="off"
            data-required="true"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-x500 focus:outline-none focus:ring-4 focus:ring-primary-x500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-x400 dark:focus:ring-primary-x400/10 sm:text-sm"
          />

          <button className="g-recaptcha inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-primary-x500 font-semibold text-zinc-100 hover:bg-primary-x400 active:bg-primary-x800 active:text-zinc-100/7 flex-none">
            Inscrever-se
          </button>

          <input
            type="checkbox"
            className="input_replaced"
            defaultValue="1"
            defaultChecked
            id="OPT_IN"
            name="OPT_IN"
            style={{ position: "absolute", left: "-50000px" }}
            tabIndex={-1}
          />

          <div style={{ position: "absolute", left: "-50000px" }} aria-hidden="true">
            <input type="text" name="email_address_check" defaultValue="" className="input--hidden" />
            <input type="hidden" name="locale" defaultValue="pt" />
            <input type="hidden" name="html_type" defaultValue="simple" />
          </div>
        </form>
      </Container>
    </>
  )
}

