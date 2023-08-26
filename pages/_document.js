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
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
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
          <Main />
          <NextScript />

          {/* Added text */}
          <div>
            <p>YouTube, the second most popular global website, is widely recognized as the top video hosting platform. However, there are limitations to directly downloading videos from YouTube.</p>

            <p>SaveFrom Helper offers a free and unlimited solution for effortlessly downloading YouTube videos in MP4 format at exceptional speeds. Depending on the original quality, you can choose from a range of resolutions including SQ, HD, Full HD, 2k, or 4k. Additionally, the Helper tool simplifies converting YouTube videos to MP3 format.</p>

            <p>At SaveFrom, we are confident that our YouTube downloader provides one of the most user-friendly solutions available today. Give our video downloader a try and enjoy seamless downloading of any YouTube video or audio to your PC or mobile device.</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
