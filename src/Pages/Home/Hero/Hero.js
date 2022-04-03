import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-pattern  bg-cover bg-fixed flex flex-col items-center">
      <div className=" text-gray-700 w-3/4 text-center py-4">
        <h2 className="text-7xl font-semibold py-4">
          The future of tech is here
        </h2>
        <p className="text-2xl font-light py-4">
          Holisticly incentivize revolutionary collaboration and idea sharing
          before cost effective users. Actual focused services before highly
          efficient human capital.
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
      <img
        src="https://demo.web3canvas.com/themeforest/proland/images/apple-watch.png"
        alt="Eye Watch"
      />
    </div>
  );
};

export default Hero;
