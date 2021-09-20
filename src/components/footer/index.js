import React from "react";
import Twitter from "../../assets/images/twitter-1.png";
import Instagram from "../../assets/images/instagram.png";
import Discord from "../../assets/images/dcoder.png";
const Index = () => {
  return (
    <footer className="py-12 text-center ">
      <div className="container sm:flex sm:gap-2">
        <p className="font-serif text-gray mb-5 sm:mb-0">Follow our socials!</p>
        <ul className="flex  w-full items-center justify-center  sm:w-auto">
          <li>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
          <li className="ml-2">
            <a href="/">
              <img src={Discord} alt="discord" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Index;
