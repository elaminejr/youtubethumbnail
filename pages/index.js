import { useState } from "react";
import copy from "copy-to-clipboard";

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
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p
  style={{
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "500px",
    padding: "30px 0", // Add padding to control vertical spacing
    fontSize: "16px",
    marginTop: "50px",
    lineHeight: "1.4", // Adjust the line height to control line spacing
  }}
>
  Download high-quality YouTube thumbnail images at no cost.<br></br> Our application enables you to access thumbnails in various resolutions. Simply insert the video's URL<br></br> in the input field below and click <br></br>Get Thumbnail Image.
</p>

      </header>
      <div className="text-center">
    <div className="input-container"> {/* New container */}
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
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* SEO-optimized paragraphs at the bottom of the home page */}
      <div className="mt-8 paragraph-container">
  <h2 className="text-xl font-semibold mb-4">Why Choose Our Thumbnail Downloader?</h2>
  <p className="paragraph">
    Our YouTube Thumbnail Downloader offers a hassle-free way to access eye-catching thumbnails for your video content needs. We prioritize user convenience and quality, providing a seamless experience for content creators and enthusiasts.
  </p>
  <h2 className="text-xl font-semibold mb-4">Benefits of Using High-Quality Thumbnails</h2>
  <p className="paragraph">
    High-quality thumbnails can significantly impact your video's visibility and viewer engagement. They serve as the first impression of your content, enticing viewers to click and explore. Utilizing vibrant and appealing thumbnails can help your videos stand out in search results and recommendations.
  </p>
  <h2 className="text-xl font-semibold mb-4">Thumbnail Customization Options</h2>
  <p className="paragraph">
    Beyond selecting the resolution, you can further customize your thumbnails to match your branding or video content. Tools like Photoshop can be used to add unique effects, text overlays, or branding elements, making your thumbnails more recognizable and compelling.
  </p>
  <h2 className="text-xl font-semibold mb-4">Legal Considerations for Thumbnail Usage</h2>
  <p className="paragraph">
    While downloading YouTube thumbnails is generally permissible, always respect copyright laws and intellectual property rights. Seek permission from content creators if you plan to use thumbnails for commercial purposes or on platforms with strict copyright policies.
  </p>
  <h2 className="text-xl font-semibold mb-4">Enhance Your Video SEO Strategy</h2>
  <p className="paragraph">
    Thumbnails play a crucial role in video search engine optimization (SEO). Crafting unique and visually appealing thumbnails can improve click-through rates and boost your video's discoverability on search engines like Yandex. Make sure to optimize your video titles and descriptions for better results.
  </p>
      </div>
    </div>
  );
};

export default Index;
