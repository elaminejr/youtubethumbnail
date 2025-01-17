import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your AdSense script here with your publisher ID */}
          <script
            data-ad-client="pub-6225203432253385"
            async
            rc="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6225203432253385"
     crossorigin="anonymous"></script>
          {/* Other head elements */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
