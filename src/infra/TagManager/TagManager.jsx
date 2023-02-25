import Script from "next/script";

const GA_ID = "G-6WPRBC2XSW";
export function TagManager() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-script">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${GA_ID}');
  `}</Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel">{`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1383755055752725');
      fbq('track', 'PageView');
  `}</Script>
      <noscript><img height="1" width="1" style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1383755055752725&ev=PageView&noscript=1"
      /></noscript>
    </>
  );
}