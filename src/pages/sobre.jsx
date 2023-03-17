
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@src/components/Container'
import {
  DiscordIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@src/components/SocialIcons'
import portraitImage from '@src/images/portrait.jpg'
import config from "@src/config"
import { Head } from "@src/infra/Head/Head"
import { NavLink } from "@src/components/Footer"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-x500 dark:text-zinc-200 dark:hover:text-primary-x500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-x500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Sobre() {
  return (
    <>
      <Head
        ogTitle={"Conheça um pouco sobre a minha pessoa"}
        title={`Sobre - ${config.owner}`}
        description={`Eu sou Mario Souto, prazer!`}
      />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/images/about/owner.jpg"
                width={400}
                height={400}
                alt=""
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Eu sou Mario Souto, prazer!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Nasci na cidade de São Paulo e atuo como instrutor e desenvolvedor Front End. Sou formado em Análise e Desenvolvimento de Sistemas pela UNIP e técnico em Informática para Internet pela ETEC Parque Belém.
              </p>
              <p>
                Meu primeiro trabalho foi como “tio de festa infantil”, paralelo a isso comecei realmente no mundo da web criando sites para meus servidores de Tibia quando tinha 11 anos. Hoje com 25 estou a um bom tempo já na área de programação, onde 2 foram na Agência Digital Pulso participando de diversos projetos com foco principal como Front End e volta e meia fazendo um papel mais Full Stack.
              </p>
              <p>
                Sou apaixonado por dar aulas e curti muito fazer isso em meio aos projetos que participei no Grupo Caelum desde criar/manter os sites, webapps, criação de cursos (React, JavaScript Moderno para WebApps e o de Angular) até um compilador/executor de código universal que tinhamos por lá.
              </p>
              <p>
                Já palestrei em diversos lugares, Front End Week, faculdades, e tenho como minha maior conquista em palestras a que fiz em 2018 quando realizei o sonho de compartilhar meus experimentos com Houdini CSS na BrazilJS em Porto Alegre e <NavLink href="https://twitter.com/DasSurma/status/1034893725317640192">ajudar o time do chrome a resolver 2 bugs em cima da API da spec</NavLink>.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={config.social.youtube} icon={YouTubeIcon}>
                Se inscreve no YouTube \o
              </SocialLink>
              <SocialLink href={config.social.discord} icon={DiscordIcon} className="mt-4">
                Entra pra minha comunidade no Discord
              </SocialLink>
              <SocialLink href={config.social.twitter} icon={TwitterIcon} className="mt-4">
                Me segue no Twitter
              </SocialLink>
              <SocialLink href={config.social.instagram} icon={InstagramIcon} className="mt-4">
                Me acompanha Instagram
              </SocialLink>
              <SocialLink href={config.social.github} icon={GitHubIcon} className="mt-4">
                Olha meus projetos no GitHub
              </SocialLink>
              <SocialLink href={config.social.linkedin} icon={LinkedInIcon} className="mt-4">
                LinkedIn fica a seu critério
              </SocialLink>
              <SocialLink
                href={`mailto:${config.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {config.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
