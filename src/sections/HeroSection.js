import Image1 from "../assets/images/image1.png";
import Text from "../assets/images/SPUDBUDZ.png";
import Twitter from "../assets/images/twitter.png";
import Discord from "../assets/images/discord.png";
const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
          <div className="mt-8 max-w-xs w-full mx-auto md:max-w-none md:w-1/2">
            <img src={Image1} alt="heroImage" />
          </div>
          <div className="text-primary text-center mt-8 md:mt-20 md:text-left md:w-1/2 md:self-start ">
            <h2 className="text-center text-2xl md:text-left md:text-4xl lg:text-5xl">
              Welcome To
            </h2>
            <div className="my-5 max-w-xs mx-auto md:mx-0 md:max-w-lg ">
              <img src={Text} alt="text" />
            </div>
            <p className="text-xs mb-3 mt-6 md:max-w-xs w-full md:mt-10">
              10000 randomly generated NFTs from 350 traits.
            </p>

            <div className="mt-10 flex  justify-center items-center md:justify-start ">
              <a href="/" className=" bg-white inline-block px-6 py-3">
                <div className="flex items-center ">
                  <div className="mr-2 w-6">
                    <img src={Twitter} alt="icons" />
                  </div>
                  <div className="text-xs capitalize text-twitter">Twitter</div>
                </div>
              </a>
              <a href="/" className=" bg-white inline-block px-6 py-3 ml-6">
                <span className="flex items-center ">
                  <span className="mr-2 w-6">
                    <img src={Discord} alt="icons" />
                  </span>
                  <span className="text-xs capitalize text-discord">
                    Discord
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
