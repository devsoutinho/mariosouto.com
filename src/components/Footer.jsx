import Link from 'next/link'
import config from "@src/config.js"

import { Container } from '@src/components/Container'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary-x500 dark:hover:text-primary-x400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">Sobre</NavLink>
                <NavLink href="/projects">Projetos</NavLink>
                <NavLink href="/speaking">Apresentações</NavLink>
                <NavLink href="/uses">Gadgets</NavLink>
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
