import React from "react";
import iconList from "../images/icon-list.svg";

function ThankYou({ email }) {
  return (
    <div className="container flex lg:justify-center lg:h-screen lg:items-center w-full">
      <div className="flex flex-wrap content-between thankyou-container bg-white lg:rounded-3xl p-6 lg:p-14 h-screen lg:h-fit lg:gap-6">
        <div className="flex flex-wrap gap-8 pt-24 lg:pt-0">
          <img src={iconList} alt="Check Icon" className="w-14 h-fit" />
          <h1 className="updated-text font-bold leading-none h-fit">
            Thanks for subscribing!
          </h1>
          <p className="h-fit">
            A confirmation email has been sent to <strong>{email}.</strong>{" "}
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button className="rounded-lg my-btn lg:p-4 mt-3 text-white font-bold text-base h-fit py-4 w-full">
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
