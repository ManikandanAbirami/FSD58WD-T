import React, { createContext } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const sendContactEmail = async (contactData) => {
    try {
      await axios.post("http://localhost:3000/send", contactData);
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email.");
    }
  };

  return (
    <ContactContext.Provider value={{ sendContactEmail }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
