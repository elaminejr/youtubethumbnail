import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Analytics } from '@vercel/analytics/react';

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... rest of your component ... */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Download Video Youtube Thumbnail</h1>
        <p
        
          style={{
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "500px",
            padding: "30px 0",
            fontSize: "16px",
            marginTop: "50px",
            lineHeight: "1.4",
          }}
           >
          Download video youtube thumbnail in multiple sizes and quality options. Supports HD, HQ, 1080p, 4K formats without any sign up.
        </p>      
      </header>
      <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
We use cookies to enhance your user experience. By using our website, you agree to our use of cookies. Read more about how we use cookies{" "}
  <span style={{ fontSize: "10px" }}></span>
</CookieConsent>
      {/* Ad - Left */}
      <div style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '160px', height: '600px' }}
          data-ad-client="ca-pub-6225203432253385"
          data-ad-slot="4909364750"></ins>
      </div>

      {/* Ad - Right */}
      <div style={{ position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '160px', height: '600px' }}
          data-ad-client="ca-pub-6225203432253385"
          data-ad-slot="4909364750"></ins>
      </div>

      <div className="text-center">
        <div className="input-container">
          <input
            type="text"
            className="custom-input"
            placeholder="Enter YouTube URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button
            className="btn-blue mt-2"
            onClick={() => getYouTubeThumbnail(videoURL)}
          >
            Download Thumbnails
          </button>
        </div>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <div className="button-container">
                  <button
                    className="btn-blue mt-2"
                    onClick={() => {
                      // Open the thumbnail in a new page
                      window.open(option.url, '_blank');
                    }}
                  >
                    Open Thumbnail
                  </button>
                  <button
                    className="btn-blue mt-2"
                    onClick={() => {
                      // Trigger the download using an anchor element
                      const anchor = document.createElement('a');
                      anchor.href = option.url;
                      anchor.download = `thumbnail_${index + 1}.jpg`;
                      anchor.click();
                    }}
                  >
                    Download Thumbnail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8 paragraph-container">
      <h2 className="text-xl font-semibold mb-4">Full HD </h2>
      <img
    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX1BlEbbhevxrZUZkhLOcypCnaRmBZaiMYsEtPxGv_gWVuHEjJRpih3S4mHRzw-a6GALYh1DueVwpDjaL_BrCGHEhS9rBqkCBpG1YKFpHfIBiPl7zDwyycuoqllrJESGNzCIe_T06VbJMipp7D4pQk5erv4Jsq4qcySHHErCufy1AJZZIYZZaGaYvKJUp0/s1600/Untitled-1.png"
    alt="Image 1"
    width="1080"
    height="607"
  />
  <div className="image-card">
        <h2 className="text-xl font-semibold mb-4">Medium</h2>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX1BlEbbhevxrZUZkhLOcypCnaRmBZaiMYsEtPxGv_gWVuHEjJRpih3S4mHRzw-a6GALYh1DueVwpDjaL_BrCGHEhS9rBqkCBpG1YKFpHfIBiPl7zDwyycuoqllrJESGNzCIe_T06VbJMipp7D4pQk5erv4Jsq4qcySHHErCufy1AJZZIYZZaGaYvKJUp0/s1600/Untitled-1.png"
          alt="Image 1"
          className="image"
        />
      </div>
  <h2 className="text-xl font-semibold mb-4">1. About download video youtube thumbnail:</h2>
  <p className="paragraph">
    Are you looking for a convenient way to download YouTube thumbnails quickly and effortlessly? Our YouTube Thumbnail Downloader, known as YouThumbnail, offers a simple, online solution. No need to install any applications, and it's completely free for all users. Discover how easy it is to access eye-catching YouTube thumbnails in various resolutions.
  </p>

  <h2 className="text-xl font-semibold mb-4">2. What Exactly Are YouTube Thumbnails?</h2>
  <p className="paragraph">
    YouTube thumbnails play a crucial role as they serve as the cover image of a video, providing viewers with a sneak peek of its content. There are two primary types: automatically generated by YouTube and custom thumbnails uploaded by video creators. These visual teasers are valuable elements in attracting viewers to your content.
  </p>

  <h2 className="text-xl font-semibold mb-4">3. How Many Thumbnails Does a YouTube Video Have?</h2>
  <p className="paragraph">
    Each YouTube video can feature up to nine thumbnails, although not every video utilizes all nine. Seven thumbnail variants are guaranteed:
  </p>
  <p className="paragraph">
    Player Background (480x360), Start (120x90), Middle (120x90), End (120x90), High-Quality (480x360), Medium Quality (320x180), Normal Quality (120x90)
  </p>
  <p className="paragraph">
    Additionally, high-definition videos come with two more sizes:
  </p>
  <p className="paragraph">
    Standard Definition (640x480), Maximum Resolution (1920x1080)
  </p>
  <p className="paragraph">
    However, the most commonly used sizes are High-Quality, Medium Quality, and full size. Hence, our YouThumbnail Downloader provides downloads in these three sizes for your convenience. Should you require other sizes, we'll guide you on obtaining them later.
  </p>

  <h2 className="text-xl font-semibold mb-4">4. The Significance of Downloading Thumbnails:</h2>
  <p className="paragraph">
    YouTube video thumbnails serve as vital metadata, and creators invest considerable effort in designing them. This results in visually appealing and engaging video covers on YouTube. The captivating nature of these thumbnails prompts many users to download and save them for various purposes, such as:
  </p>
  <p className="paragraph">
    Personal use as wallpapers, Sharing on blogs or social media platforms, Utilizing them as a wellspring of inspiration for their video covers.
  </p>

  <h2 className="text-xl font-semibold mb-4">5. Why You Need a Thumbnail Downloader:</h2>
  <p className="paragraph">
    As previously mentioned, YouTube thumbnail image links are not readily visible, making it challenging to save these appealing video covers. While some tools can extract thumbnails, none are as user-friendly as the YouThumbnail Downloader. Its simplicity sets it apart from other methods.
  </p>

  <h2 className="text-xl font-semibold mb-4">6. Finding YouTube Video Links:</h2>
  <p className="paragraph">
    Our Thumbnail Downloader operates by downloading via video links. Therefore, you must locate the video link before proceeding. To do this, open the video you wish to download in your browser or the YouTube app. Click the "share" button beneath the video, and the YouTube video link will appear in the pop-up interface.
  </p>

  <h2 className="text-xl font-semibold mb-4">7. Key Features of Our YouTube Thumbnail Downloader:</h2>
  <p className="paragraph">
    Our YouThumbnail Downloader serves as a valuable companion for YouTube creators, offering the following key features:
  </p>
  <p className="paragraph">
    Effortless extraction of YouTube thumbnails online, Quick access to high-definition thumbnails that may not be visible on YouTube's standard pages, Instant retrieval of YouTube video thumbnail image links, Simple downloading and saving of thumbnails to your device.
  </p>

  <h2 className="text-xl font-semibold mb-4">8. How to Use Our YouThumbnail Downloader:</h2>
  <p className="paragraph">
    Gaining access to captivating YouTube thumbnails with our downloader is a breeze:
  </p>
  <p className="paragraph">
    Copy and paste the video URL into the search box above, Our YouThumbnail Downloader will automatically retrieve three different thumbnail sizes for your selection, We recommend downloading HD thumbnails for the best visual impact.
  </p>

  <h2 className="text-xl font-semibold mb-4">9. How to Obtain All Thumbnail Sizes:</h2>
  <p className="paragraph">
    If you seek all nine thumbnail sizes for a video, you'll first need to understand what a video ID is. The YouTube video ID is a unique identifier found at the end of a video URL, like the examples below:
  </p>
  <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dy6Hj0Kk-CA"
        title="YouTube Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
  <p className="paragraph">
    https://www.youtube.com/watch?v=dy6Hj0Kk-CA,<br></br> https://youtu.be/dy6Hj0Kk-CA
  </p>
  <p className="paragraph">
    The character string "dy6Hj0Kk-CA" is the video ID. To access all nine thumbnail image links for a video, simply replace "VIDEO-ID" in the following URLs with your video's unique ID:
  </p>
  <p className="paragraph">
    480x360: https://i1.ytimg.com/vi/VIDEO-ID/0.jpg<br></br> 120x90: https://i1.ytimg.com/vi/VIDEO-ID/1.jpg <br></br>120x90: https://i1.ytimg.com/vi/VIDEO-ID/2.jpg<br></br> 120x90: https://i1.ytimg.com/vi/VIDEO-ID/3.jpg <br></br> 480x360: https://i1.ytimg.com/vi/VIDEO-ID/hqdefault.jpg<br></br> 320x180: https://i1.ytimg.com/vi/VIDEO-ID/mqdefault.jpg<br></br> 120x90: https://i1.ytimg.com/vi/VIDEO-ID/default.jpg<br></br> 640x480: https://i1.ytimg.com/vi/VIDEO-ID/sddefault.jpg <br></br> 1920x1080: https://i1.ytimg.com/vi/VIDEO-ID/maxresdefault.jpg
  </p>

  <h2 className="text-xl font-semibold mb-4">10. Can You Use Downloaded Thumbnails on YouTube?</h2>
  <p className="paragraph">
    It's essential to respect copyright when it comes to using downloaded thumbnails. Thumbnail copyright belongs to the creator or designer. Without their permission, using these thumbnails can lead to reporting and legal consequences. However, you can utilize downloaded thumbnails as creative inspiration for designing your unique thumbnails.
  </p>

  {/* Add more sections as needed... */}
</div>



      <div className="mt-8">
        <a href="/privacy-policy" className="btn-blue">
          Privacy & Policy
        </a>
        <a href="/about-us" className="btn-blue">
          About Us
        </a>
        <a href="/contact-us" className="btn-blue">
          Contact Us
        </a>
        <a href="/InfoAndCookies" className="btn-blue">
        InfoAndCookies
        </a>
      </div>
    </div>
  );
};

export default Index;
