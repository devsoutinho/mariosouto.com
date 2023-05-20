import { PUBLIC_SITE_URL } from "data";
import NextHead from "next/head";
import { withRouter } from "next/router";

export function buildOgImageUrl({
  title,
  ogTitle,
  routePath,
  image,
}) {
  const parsedTitle = (ogTitle || title || "");
  const parsedRoutePath = (routePath || "");
  const parsedImage = btoa(image || "");
  const parsedParams = btoa(parsedTitle + "%%%%" + parsedRoutePath);

const output = image !== undefined
  ? `${PUBLIC_SITE_URL}/api/og.png?bg=${parsedImage}`
  : `${PUBLIC_SITE_URL}/api/og.png?params=${parsedParams}`

return output;
}

export const Head = withRouter(function Head({ imageRoutePath, router, title, ogTitle, description, image, children }) {
  const routePath = imageRoutePath || (router.route === "/" ? "" : router.route);
  const url = "https://mariosouto.com" + routePath;

  const ogImage = buildOgImageUrl({
    title,
    ogTitle,
    routePath,
    image,
  });

  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      {/* URL */}
      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      {/* Image */}
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:image" itemProp="image" content={ogImage} />
      <meta property="og:image:width" content="526" />
      <meta property="og:image:height" content="275" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content="1440432930" />

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
})