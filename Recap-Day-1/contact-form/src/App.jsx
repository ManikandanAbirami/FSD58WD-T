import React from "react";
import ContactProvider from "./ContactContext";
import ContactForm from "./ContactForm";


function App() {

  return (
    <ContactProvider>
      <ContactForm />
    </ContactProvider>
  )
}

export default App
