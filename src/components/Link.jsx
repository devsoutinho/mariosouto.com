import NextLink from "next/link";

export function Link({ underline, href, children }) {
  if(!underline) {
    return (
      <NextLink
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        className="transition hover:text-primary-x500 dark:hover:text-primary-x400"
      >
        {children}
      </NextLink>
    )
  }

  return (
    <NextLink
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className="transition hover:text-primary-x500 dark:hover:text-primary-x400 underline"
    >
      {children}
    </NextLink>
  )
}

Link.defaultProps = {
  underline: true,
}