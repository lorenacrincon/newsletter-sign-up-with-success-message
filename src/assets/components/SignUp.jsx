import React, { useState } from "react";
import iconList from "../images/icon-list.svg";
import mobileIllustration from "../images/illustration-sign-up-mobile.svg";
import ThankYou from "./ThankYou";

function SignUp({ handleSubmit, email, message, isSubmitted, handleOnChange }) {
  return isSubmitted ? (
    <ThankYou email={email} />
  ) : (
    <div className="container flex lg:justify-center lg:h-screen lg:items-center w-full">
      <div className="flex flex-wrap lg:flex-nowrap newsletter-container bg-white lg:rounded-3xl pb-10 lg:pe-6 lg:py-8 lg:h-fit ">
        <img
          className="h-72 w-full object-cover lg:hidden"
          src={mobileIllustration}
          alt="Sign Up Illustration"
        />
        <div className="flex-auto lg:w-7/12 px-6 lg:px-14 lg:py-10 grid gap-6 ">
          <h1 className="updated-text font-bold">Stay Updated!</h1>
          <p className="text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="text-base">
            <ul className="grid gap-2">
              <li className="flex items-center">
                <img src={iconList} alt="Checkmark Icon" className="mr-5" />
                Product discovery and building what matters
              </li>

              <li className="flex items-center">
                <img src={iconList} alt="Checkmark Icon" className="mr-5" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center">
                <img src={iconList} alt="Checkmark Icon" className="mr-5" />
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
                  : "focus:ring-gray-500 focus:border-gray-500"
              }`}
              placeholder="john@example.com"
            />
            <button className="rounded-lg my-btn p-4 mt-3 text-white font-bold text-base w-full">
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
