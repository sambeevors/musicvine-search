import { Html, Head, Main, NextScript } from "next/document";
import Header from "~/components/layout/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/mid5ujv.css" />
        <meta name="theme-color" content="#F23D75" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="141409067700997" />
        <meta
          property="og:image"
          content="https://cdn.uppbeat.io/images/opengraph-20210118.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:url" content="https://uppbeat.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UppbeatOfficial" />
        <meta
          name="twitter:image"
          content="https://cdn.uppbeat.io/images/uppbeat-social-share-20210118.jpg"
        />
        <meta name="twitter:image:alt" content="Uppbeat" />
        <meta
          name="description"
          content="Free music for creators. No copyright claims. Your favorite beatmakers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-brand-main-bg text-brand-main-text flex min-h-svh flex-col items-stretch antialiased">
        <Header />
        <main className="flex-grow p-4 sm:p-8">
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
