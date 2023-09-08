import React, { useState } from "react";
import styled from "styled-components";

// Define styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid #ccc;
  font-size: 120%;
  background: #eee;
  color: #444;
  padding: 8px;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  font-size: 120%;
  background: #eee;
  color: #444;
  padding: 8px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 36px;
  border: 1px solid #496f85;
  font-size: 120%;
  background: #d2dfe2;
  color: #111;
  float: right;
`;

const ContactUs = () => {
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to send the form data to a server or perform other actions
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Paragraph>
        If you have any questions or inquiries, feel free to contact us using
        the information provided below:
      </Paragraph>
      <UnorderedList>
        <ListItem>Email: contact@example.com</ListItem>
        <ListItem>Phone: +1 (123) 456-7890</ListItem>
        <ListItem>Address: 123 Main Street, City, Country</ListItem>
      </UnorderedList>

      {/* Contact Form */}
      <h2>Contact Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default ContactUs;
