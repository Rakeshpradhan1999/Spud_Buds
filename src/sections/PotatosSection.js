import React from "react";
import All from "../assets/images/all.png";
const PotatosSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center pb-6 text-xl sm:text-3xl text-gray">
          Some of Amazing Potatoes
        </h2>
        <img src={All} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default PotatosSection;
