import React from "react";
import styled from "styled-components"; // Import styled-components

const AboutUs = () => {
  const buttonContainerStyle = {
    marginTop: '2rem',
    textAlign: 'center',
  };
  return (
    
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p>
        At download video youtube thumbnair, we understand the importance of visual content in today's digital landscape. YouTube videos often feature eye-catching thumbnails that represent the content within. These thumbnails can be valuable assets for various creative projects. That's where we come in, providing a simple and efficient way to download YouTube video thumbnails and store them locally.
      </p>
      <p>
      With our platform, you can easily save YouTube video thumbnails to your device, enabling you to use them offline. Whether you're a designer seeking captivating visuals, a blogger in need of attention-grabbing images, or a content creator looking to enhance your work, our service empowers you to access and utilize YouTube video thumbnails.    
        </p>
      <p>
      Using our website todownload video youtube thumbnair is a straightforward process. Simply locate the YouTube video you're interested in, copy the video's URL, and paste it into the designated area on our site. We'll process the request and provide you with a downloadable thumbnail file to save on your device. This gives you the freedom to incorporate these thumbnails into your various creative endeavors.     
       </p>
       <p>
       We value your time and strive to deliver a fast and efficient experience. Our user-friendly interface ensures a seamless process, allowing you to make the most of YouTube video thumbnails for your personal and professional projects.
       </p>
       <p>
       If you have any questions, feedback, or suggestions, we welcome your input. Please feel free to reach out to us via email at admin@downloadvideoyoutubethumbnail.com. We appreciate your engagement and continuously work to improve our service based on user needs.
       </p>
       <p>
       Please note that our service is intended for personal use only and should not be used for copyright infringement or any illegal activities. We respect intellectual property rights and encourage responsible and ethical use of downloaded YouTube video thumbnails.
       </p>
       <p>
       Thank you for choosing download video youtube thumbnair as your platform for downloading YouTube video thumbnails. Start exploring, downloading, and enhancing your creative works today!
       </p>
       <div className="mt-8" style={buttonContainerStyle}>
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

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#666",
  },
};

export default AboutUs;