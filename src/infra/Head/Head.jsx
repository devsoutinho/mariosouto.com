import NextHead from "next/head";

export function Head({ title, description, children }) {
  return (
    <NextHead>
      <title>
        {title}
      </title>
      <meta
        name="description"
        content={description}
      />
      {children}
    </NextHead>
  );
}