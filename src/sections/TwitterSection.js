import React from "react";

const TwitterSection = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="w-full max-w-4xl mx-auto">
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
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  </div>
);
