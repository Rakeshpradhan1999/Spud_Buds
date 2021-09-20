import React from "react";
import Timer from "../timer";

const Index = () => {
  return (
    <header className="bg-primary">
      <div className="container p-4">
        <div className=" w-full max-w-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
          <h1 className="text-md sm:text-xl mb-2 ">Mint Days</h1>
          <Timer />
        </div>
      </div>
    </header>
  );
};

export default Index;
