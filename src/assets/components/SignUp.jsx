import React, { useState } from "react";
import iconList from "../images/icon-list.svg";
import mobileIllustration from "../images/illustration-sign-up-mobile.svg";

function SignUp() {
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

  return isSubmitted ? (
    <div className="container flex lg:justify-center lg:h-screen lg:items-center w-full">
      <div className="flex flex-wrap thankyou-container bg-white lg:rounded-3xl pb-10 lg:p-16  lg:h-fit gap-6">
        <img src={iconList} alt="Check Icon" className="w-14" />
        <h1 className="updated-text font-bold leading-none">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com.</strong> Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button className="rounded-lg my-btn p-4 mt-3 text-white font-bold text-base w-full">
          Dismiss message
        </button>
      </div>
    </div>
  ) : (
    <div className="container flex lg:justify-center lg:h-screen lg:items-center w-full">
      <div className="flex flex-wrap lg:flex-nowrap newsletter-container bg-white lg:rounded-3xl pb-10 lg:pe-6 lg:py-6 lg:h-fit ">
        <img
          className="h-72 w-full object-cover lg:hidden"
          src={mobileIllustration}
          alt="Sign Up Illustration"
        />
        <div className="flex-auto lg:w-7/12 px-6 lg:px-14 lg:py-14 grid gap-6 pt-8">
          <h1 className="updated-text font-bold ">Stay Updated!</h1>
          <p className="text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="text-base">
            <ul className="grid gap-2">
              <li className="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                Product discovery and building what matters
              </li>

              <li className="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                And much more!
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="mt-4 flex justify-between" htmlFor="email">
              <h3 className="font-bold text-xs">Email address</h3>
              {message && (
                <span className="text-red-500 text-xs font-bold inline-flex">
                  {message}
                </span>
              )}
            </label>
            <input
              onChange={handleOnChange}
              id="email"
              value={email}
              type="email"
              className={`form-input my-2 block w-full rounded-lg p-4 ${
                message
                  ? "border-orange-400 focus:ring-orange-400 focus:border-orange-400 bg-orange-50"
                  : "focus:ring-gray-400 focus:border-gray-400"
              }`}
              placeholder="john@example.com"
            />
            <button className="rounded-lg my-btn p-4 mt-3 text-white font-bold text-base">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="hidden lg:block flex-auto lg:w-6/12 bg-cover bg-center illustration-desktop rounded-lg"></div>
      </div>
    </div>
  );
}

export default SignUp;
