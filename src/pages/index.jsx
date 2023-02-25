import React from "react"; 
import config from "@src/config.js";
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@src/components/Button'
import { Card } from '@src/components/Card'
import { Container } from '@src/components/Container'
import {
  GitHubIcon,
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@src/components/SocialIcons'
import logoAirbnb from '@src/images/logos/airbnb.svg'
import logoFacebook from '@src/images/logos/facebook.svg'
import logoPlanetaria from '@src/images/logos/planetaria.svg'
import logoStarbucks from '@src/images/logos/starbucks.svg'
import image1 from '@src/images/photos/image-1.jpg'
import image2 from '@src/images/photos/image-2.jpg'
import image3 from '@src/images/photos/image-3.jpg'
import image4 from '@src/images/photos/image-4.jpg'
import image5 from '@src/images/photos/image-5.jpg'
import { formatDate } from '@src/lib/formatDate'
import { generateRssFeed } from '@src/lib/generateRssFeed'
import { generateSitemap } from "@src/lib/generateSitemap";
import { getAllArticles } from '@src/lib/getAllContent'
import { NavLink } from "@src/components/Footer";
import { Head } from "@src/infra/Head/Head";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/posts/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Ver mais</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  const [emailTouched, setEmailTouched] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const isValidEmail = email.length > 0 && email.indexOf("@") > -1;

  return (
    <form
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      action="https://mariosouto.us8.list-manage.com/subscribe/post?u=8225f161ef3ee7a744fd4a2ba&id=2e2754236e"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Quer saber o que eu ando aprontando?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Seja notificado quando eu publicar algo novo e cancele a inscrição a qualquer momento 😉
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="pessoa@provedor.com"
          aria-label="Endereço de e-mail"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-x500 focus:outline-none focus:ring-4 focus:ring-primary-x500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-x400 dark:focus:ring-primary-x400/10 sm:text-sm"
          name="EMAIL"
          id="mce-EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim().replaceAll(" ", ""))}
          onBlur={() => setEmailTouched(true)}
        />
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_8225f161ef3ee7a744fd4a2ba_2e2754236e"
              tabIndex={-1}
            />
          </div>
        <Button type="submit" id="mc-embedded-subscribe" className="ml-4 flex-none">
          Entrar
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head
        ogTitle={`${config.owner} - Home`}
        title={`${config.owner} - ${config.title}`}
        description={config.description}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {config.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Eu me chamo Mario Souto, acredito na web como plataforma e trabalho para viver uma sempre melhor. Sou{' '}
            <NavLink href="https://developers.google.com/community/experts/directory/profile/profile-mario-souto-silva?hl=pt-br" target="_blank">
              Google Developer Expert (Web Technologies)
            </NavLink>, <NavLink href="https://github.com/omariosouto" target="_blank">
              GitHub Star
            </NavLink>, <NavLink href="https://mvp.microsoft.com/en-us/PublicProfile/5003722?fullName=Mario%20Souto%20Silva" target="_blank">
              Microsoft MVP
            </NavLink> e dono do <NavLink href="https://youtube.com/@DevSoutinho" target="_blank">
              Canal DevSoutinho no YouTube
            </NavLink>
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={config.social.twitter}
              aria-label="Me siga no YouTube"
              icon={YouTubeIcon}
            />
            <SocialLink
              href={config.social.twitter}
              aria-label="Me siga no Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={config.social.instagram}
              aria-label="Me siga no Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={config.social.github}
              aria-label="Me siga no GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={config.social.linkedin}
              aria-label="Me siga no LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateSitemap();
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
