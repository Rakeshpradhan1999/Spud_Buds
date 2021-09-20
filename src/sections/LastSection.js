import React from "react";
import Image2 from "../assets/images/image2.png";
const LastSection = () => {
  return (
    <section className="mt-6">
      <div className="container">
        <div className="sm:flex sm:items-center">
          <div className="sm:w-1/2">
            <h6 className="text-gray text-xl sm:text-5xl text-center mb-8  leading-relaxed  mx-auto sm:mx-0 sm:text-left">
              Wanna see then rarest Potatoes?
            </h6>
          </div>
          <div className="max-w-xs md:max-w-lg mx-auto sm:w-1/2">
            <img src={Image2} alt="image2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
