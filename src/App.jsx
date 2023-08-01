import "./App.css";
import Attribution from "./assets/components/Attribution";
import SignUp from "./assets/components/SignUp";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
    if (regEx.test(email)) {
      setIsSubmitted(true);
    } else if (email === "") {
      setMessage("Please enter email");
    } else if (!regEx.test(email)) {
      setMessage("Valid email required");
    } else {
      setMessage("");
    }
  };
  return (
    <>
      <SignUp
        email={email}
        handleSubmit={handleSubmit}
        message={message}
        isSubmitted={isSubmitted}
        handleOnChange={handleOnChange}
      />
      <Attribution />
    </>
  );
}

export default App;
