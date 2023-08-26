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

          {/* Example text and HTML structure */}
          <div class="ftco-section center">
            <h2 class="title">The Best Youtube Downloader</h2>
            <div class="txt-box">
              <p class="mw70">YT1s YouTube Downloader helps you save Youtube videos to your device. You can choose from a variety of formats and qualities to download.</p>
              <p class="mw70">YT1s.com is a utility website for downloading user-uploaded videos from YouTube. First published in 2020, it has a vast, diverse, worldwide community of users. It is used by journalists and human rights organizations to save eyewitness videos, by educators to save videos for classroom use, by YouTubers to save backup copies of their own uploaded videos, and by users worldwide to watch videos on hardware that can’t run a standard web browser, or to watch videos in their full resolution over slow or unreliable Internet connections. YT1s.com stands in place of a Web browser and performs a similar function with respect to user-uploaded videos. Importantly, YT1s.com does not decrypt video streams that are encrypted with commercial DRM technologies, that are used by subscription video sites.</p>
            </div>
            <ul class="listitem items-more">
              <li>
                <div class="post-image bg1">
                  <img src="https://yt1s.com/statics/image/clock.svg" alt="Fast and easy to use" />
                </div>
                <div class="post-content">
                  <h3>Fast and easy to use</h3>
                  <p>Using our Youtube downloader is the fast and easy way to download and save any YouTube video to MP3 or MP4. Simply copy YouTube URL, paste it on the search box and click on "Convert" button. No register accounts needed. </p>
                </div>
              </li>
              {/* Add other list items here */}
            </ul>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
