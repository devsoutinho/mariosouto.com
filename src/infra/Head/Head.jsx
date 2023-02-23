import NextHead from "next/head";

export function Head({ title, description, children }) {
  const url = "https://mariosouto.com";
  const ogImage = "https://mariosouto.com/metadata/og.jpg";

  return (
    <NextHead>
      <title>{title}</title>
      {/* SEO Stuff */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Og Image */}
      <meta property="og:image" itemProp="image" content={ogImage} />
      <meta property="og:image:width" content="526" />
      <meta property="og:image:height" content="275" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:updated_time" content="1440432930" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" /> 
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f9703e" />
      <meta name="msapplication-TileColor" content="#da532c" />
      {/* Children */}
      {children}
    </NextHead>
  );
}