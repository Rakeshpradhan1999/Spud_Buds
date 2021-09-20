import React from "react";
import User from "../assets/images/user.png";

const TwitterSection = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="w-full max-w-4xl mx-auto">
          <div className="w-full bg-white py-5 px-6 relative  font-serif">
            <div className="hidden sm:block social-icon text-twitter text-2xl absolute top-2/4 right-12">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="flex  justify-between items-center">
              <div className="flex gap-2 items-center">
                <div>
                  <img src={User} alt="User" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray text-sm mb-0 inline-block">
                    Axay Devikar
                  </p>
                  <span className="text-lightGray-400 text-xs mt-0 inline-block">
                    @axaydevikar
                  </span>
                </div>
              </div>
              <div className="sm:hidden social-icon text-twitter text-2xl ">
                <i class="fab fa-twitter"></i>
              </div>
            </div>
            <p className="text-gray max-w-md w-full text-sm mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 😊
            </p>
            <ul className="text-lightGray-400 flex flex-col sm:flex-row  sm:gap-5 text-xs mt-5">
              <li className="list-none">4:44PM</li>
              <li className="sm:list-disc">Jan 15,2021 from India</li>
              <li className="sm:list-disc">Twitter for iphone</li>
            </ul>
          </div>

          <ListItem />
          <ListItem title="Announce Giveaways" color="bg-bg2 text-text2" />
          <ListItem title="Potato Video Cutout" color="bg-bg3 text-text3" />
          <ListItem
            title="Presale Contest Announcement"
            color="bg-bg4 text-text4"
          />
          <ListItem title="1000 mints presale" color="bg-bg5 text-text5" />
          <ListItem title="Sale Out" color="bg-bg6 text-text6" />
          <ListItem title="Viral Marketing" color="bg-bg7 text-text7" />
          <ListItem title="Get on Rauity tool and" color="bg-bg8 text-text8" />
          <ListItem title="Get Verified on OpenSea" color="bg-bg9 text-text9" />
        </div>
      </div>
    </section>
  );
};

export default TwitterSection;

const ListItem = ({
  title = "Build Community",
  color = "bg-bg1 text-text1",
}) => (
  <div
    className={`mt-5 bg-bg1 text-text1 ${color}  py-5 px-6 capitalize sm:flex sm:justify-between sm:items-center`}
    style={{ border: "12px solid white" }}
  >
    <div className="flex items-center justify-between w-full">
      <p className=" text-sm">{title}</p>
      <div className=" text-2xl">
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  </div>
);
