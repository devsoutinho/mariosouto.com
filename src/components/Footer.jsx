import Link from 'next/link'
import config from "@src/config.js"

import { Container } from '@src/components/Container'

export function NavLink({ underline, href, children }) {
  if(!underline) {
    return (
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        className="transition hover:text-primary-x500 dark:hover:text-primary-x400"
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className="transition hover:text-primary-x500 dark:hover:text-primary-x400 underline"
    >
      {children}
    </Link>
  )
}

NavLink.defaultProps = {
  underline: true,
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink underline={false} href="/sobre">Sobre</NavLink>
                <NavLink underline={false} href="/projetos">Projetos</NavLink>
                <NavLink underline={false} href="/apresentacoes">Apresentações</NavLink>
                <NavLink underline={false} href="/setup">Setup</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} {config.owner}. Todos os direitos reservados.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
