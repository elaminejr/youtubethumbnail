import React from "react";
import styled from "styled-components"; // Import styled-components

const InfoAndCookies = () => {
  const buttonContainerStyle = {
    marginTop: '2rem',
    textAlign: 'center',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Info & Cookies</h1>
      <p>
        At our website, we use cookies to enhance your browsing experience and provide you with personalized content and services. Cookies are small text files that are placed on your computer or mobile device when you visit a website. They help the website remember your preferences, settings, and login information, and provide you with a more seamless experience.
      </p>
      <p>
        We use several types of cookies on our website, including session cookies, persistent cookies, and third-party cookies. Session cookies are temporary cookies that are deleted when you close your browser, while persistent cookies remain on your device for a set period of time. Third-party cookies are placed by a third-party service provider, such as Google Analytics, to collect data about your browsing behavior and provide analytics to help us improve our website.
      </p>
      <p>
        Our use of cookies and third-party scripts is in accordance with our Privacy Policy, which outlines how we collect, use, and protect your personal information. We only collect data that is necessary to provide you with the best possible user experience and to improve our website's performance.
      </p>
      <p>
        Google Analytics is one third-party script that we use on our website. It helps us to understand how visitors use our site, such as which pages are visited most frequently and for how long. This data is used to improve our website's functionality and content. Google Analytics uses cookies to collect information about your browsing behavior, including your IP address and the pages you visit on our website. This information is stored on Google's servers and may be shared with other Google services.
      </p>
      <p>
        If you do not want Google Analytics to collect data about your browsing behavior, you can opt-out by installing the Google Analytics Opt-out Browser Add-on. The add-on prevents Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.
      </p>
      <p>
        In addition to Google Analytics, we may also use other third-party scripts and services on our website, such as social media plugins and advertising networks. These scripts may also use cookies to collect data about your browsing behavior and may share this information with other third-party services.
      </p>
      <p>
        Overall, our use of cookies and third-party scripts is designed to improve your browsing experience and provide you with personalized content and services. We take your privacy seriously and will only collect data that is necessary to provide you with the best possible user experience. If you have any questions or concerns about our use of cookies or third-party scripts, please contact us through our website.
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

const AboutUs = () => {
  return (
    <InfoAndCookies />
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
