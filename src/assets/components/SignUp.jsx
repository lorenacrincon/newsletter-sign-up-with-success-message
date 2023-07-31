import React from "react";
import iconList from "../images/icon-list.svg";
import mobileIllustration from "../images/illustration-sign-up-mobile.svg";

function SignUp() {
  return (
    <div className="container flex lg:justify-center lg:h-screen lg:items-center w-full">
      <div className="flex flex-wrap lg:flex-nowrap newsletter-container bg-white lg:rounded-3xl pb-10 lg:pe-6 lg:py-6 lg:h-fit ">
        <img
          class="h-72 w-full object-cover lg:hidden"
          src={mobileIllustration}
          alt="Sign Up Illustration"
        />
        <form className="flex-auto lg:w-7/12 px-6 lg:px-14 lg:py-14 grid gap-6 pt-8">
          <h1 className="updated-text font-bold ">Stay Updated!</h1>
          <p className="text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="text-base">
            <ul className="grid gap-2">
              <li class="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                Product discovery and building what matters
              </li>

              <li class="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                Measuring to ensure updates are a success
              </li>
              <li class="flex items-center">
                <img
                  src={iconList}
                  alt="Checkmark Icon"
                  className="w-4 h-4 mr-5"
                />
                And much more!
              </li>
            </ul>
          </div>
          <label className="mt-4">
            <h3 className="font-bold text-xs">Email address</h3>
            <input
              type="email"
              className="form-input mt-2 block w-full rounded-lg p-4 focus:ring-gray-400 focus:border-gray-400"
              placeholder="john@example.com"
            />
          </label>
          <button class="rounded-lg my-btn p-4 text-white font-bold text-base">
            Subscribe to monthly newsletter
          </button>
        </form>
        <div className="hidden lg:block flex-auto lg:w-6/12 bg-cover bg-center illustration-desktop rounded-lg"></div>
      </div>
    </div>
  );
}

export default SignUp;
