'use client'

// Importa useState desde React
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item label="Name">
        {/* Usa el evento 'e' para obtener el valor */}
        <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Email">
        {/* Usa el evento 'e' para obtener el valor */}
        <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Message">
        {/* Usa el evento 'e' para obtener el valor */}
        <Input.TextArea
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      autoSize={{ minRows: 4, maxRows: 10 }}
      placeholder="Enter your message here"
    />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Send
      </Button>
    </Form>
  );
};

export default ContactForm;
