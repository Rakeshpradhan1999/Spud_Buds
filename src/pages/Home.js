import React from "react";
import { Layout } from "../components";
import {
  HeroSection,
  CountSection,
  TwitterSection,
  PotatosSection,
  LastSection,
} from "../sections";
const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <CountSection />
        <TwitterSection />
        <PotatosSection />
        <LastSection />
      </Layout>
    </div>
  );
};

export default Home;
