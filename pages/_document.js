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
          {/* Added text */}
          <div>
            <p>YouTube, the second most popular global website, is widely recognized as the top video hosting platform. However, there are limitations to directly downloading videos from YouTube.</p>

            <p>SaveFrom Helper offers a free and unlimited solution for effortlessly downloading YouTube videos in MP4 format at exceptional speeds. Depending on the original quality, you can choose from a range of resolutions including SQ, HD, Full HD, 2k, or 4k. Additionally, the Helper tool simplifies converting YouTube videos to MP3 format.</p>

            <p>At SaveFrom, we are confident that our YouTube downloader provides one of the most user-friendly solutions available today. Give our video downloader a try and enjoy seamless downloading of any YouTube video or audio to your PC or mobile device.</p>

            <div className="widget-content">
              <h1 className="entry-title centered-text">YouTube Thumbnail Downloader</h1>
              <h1 className="entry-title centered-text">&#9655; Save YT Video Thumbnails</h1>
              <div className="entry-content">
                <p>Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. It's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos.</p>
                <h2>What is the use of this YouTube Thumbnail Grabber website?</h2>
                <p>People use this YouTube thumbnail downloader website for getting a thumbnail from any YouTube videos. That can be used in presentation, animation work, or many other activities.</p>
                <h2>How to use this YouTube thumbnail downloader website?</h2>
                <p>I have shared some screenshots in which I have guided you on how you can use this YouTube downloader website. It's quite easy. The first step is to copy any YouTube link whose thumbnail you want. Now paste that URL in the input box, and the moment you paste that link, it will automatically generate different sizes of thumbnails for you. Click on the thumbnail download button, and it will be automatically downloaded to your system.</p>
                <p>If you are using an Android phone, you have to save those images, and if you are using an iPhone, then I don't know how you can do it?</p>
                {/* Continue adding the rest of the content */}
              </div>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
