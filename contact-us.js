import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px'
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  };

  const buttonContainerStyle = {
    marginTop: '2rem',
    textAlign: 'center'
  };
  

  return (
    <div style={containerStyle}>
      <div>
      <p>
          Welcome to our contact us page! Whether you have a business inquiry or need assistance with any bugs or issues, we're here to help. You can easily reach out to us by email at  admin@downloadvideoyoutubethumbnail.com, you can directly connect with our dedicated team. We highly encourage you to share your questions, feedback, or any business-related matters you wish to discuss.
        </p>
        <p>
          When you reach out to us, we make it our priority to respond as soon as possible. Our team is committed to ensuring a timely and personalized reply to each inquiry we receive. Rest assured that your message will be reviewed with attention and care.
        </p>
        <p>
          In addition to addressing business-related inquiries, we are here to assist you with any bugs or issues you may encounter. If you come across a problem while using our services or accessing our website, please let us know by sending an email to admin@downloadvideoyoutubethumbnail.com. Our technical experts will be promptly notified and will work diligently to fix any issues you report.
        </p>
        <p>
          We understand that technical glitches can be frustrating, and we appreciate your patience as we work to resolve them. By providing detailed information about the bug or issue you encountered, you can assist our team in identifying and resolving it more efficiently. Our goal is to ensure a seamless user experience for all our customers, and your feedback is invaluable in helping us achieve that.
        </p>
        <p>
          In the event that you need immediate assistance or have an urgent matter to discuss, please indicate the nature of your inquiry in the subject line of your email. This will help us prioritize your message and expedite our response. While we strive to respond promptly, please note that response times may vary depending on the volume of inquiries we receive. Nevertheless, we assure you that we will do our best to address your needs in a timely manner.
        </p>
        <p>
          We appreciate your interest in contacting us and look forward to hearing from you. Our team is dedicated to providing exceptional customer service and resolving any concerns or inquiries you may have. By reaching out to us via email at admin@downloadvideoyoutubethumbnail.com, you are taking the first step towards a productive and efficient communication process.
        </p>
        <p>
          Thank you for considering Thumbnail Downloader. We value your feedback, and your input plays a vital role in helping us improve our services. We are committed to ensuring your satisfaction and will make every effort to address your business inquiries or bug-related issues promptly and effectively.
        </p>
      </div>
      <div style={buttonContainerStyle} className="mt-8">
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

export default ContactForm;
