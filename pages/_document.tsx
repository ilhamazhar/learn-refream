import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="title" content="web-profile" />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:type" content="website" />

          <meta property="og:title" content="web-profile" />
          <meta property="og:description" content="Web profile template" />
          <meta property="description" content="Web profile template" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:image" content="/img/web-profile-logo.png" />
          <meta property="image" content="/img/web-profile-logo.png" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>

          {/* --- Twitter Meta Tags --- */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://example.com" />
          <meta property="twitter:url" content="https://example.com" />
          <meta name="twitter:title" content="web-profile" />
          <meta name="twitter:description" content="Web profile template" />
          <meta
            name="twitter:image"
            content="https://example.comimg/web-profile-logo.png"
          />
          {/* --- Twitter Meta Tags ends --- */}

          {/* --- Fonts start --- */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
            rel="stylesheet"
          />
          {/* --- Fonts end --- */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

