import React from "react";
import iconList from "../images/icon-list.svg";

function SignUp() {
  return (
    <div className="container flex justify-center h-screen items-center w-full">
      <div className="flex newsletter-container bg-white rounded-3xl pe-6 py-6 h-fit ">
        <form className="flex-auto w-7/12 px-14 py-14 grid gap-6">
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
              className="form-input mt-2 block w-full rounded-lg p-4"
              placeholder="john@example.com"
            />
          </label>
          <button class="rounded-lg my-btn p-4 text-white font-bold text-base">
            Subscribe to monthly newsletter
          </button>
        </form>
        <div className="flex-auto w-6/12 bg-cover bg-center illustration-desktop rounded-lg"></div>
      </div>
    </div>
  );
}

export default SignUp;
