import React from "react";

const CountSection = () => {
  return (
    <section className="py-20 ">
      <div className="container flex flex-col  sm:flex-row">
        <TextBox />
        <TextBox num="1000" text="pre sell supply" />
        <TextBox num="0.0777" text="mint price" />
        <TextBox num="350 TRAITS" text="total TRAITS" />
      </div>
    </section>
  );
};

export default CountSection;

const TextBox = ({ num = "10,000", text = "total supply" }) => (
  <div
    className=" bg-white text-center py-5 my-4 md:my-0 mr-0 sm:w-1/2 sm:mr-8"
    style={{ border: "3px solid #FBC677" }}
  >
    <h6 className="text-gray text-xl">{num}</h6>
    <p className="text-lightGray-400 font-serif font-thin text-xs uppercase">
      {text}
    </p>
  </div>
);
