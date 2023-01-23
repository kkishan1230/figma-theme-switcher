import React from "react";
import BannerSection from "../components/BannerSection";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import Prototyping from "../components/Prototyping";
import Organise from "../components/Organise";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="banner h-[53.27vw]">
        <div className="container-1440">
          <Navbar />
          <BannerSection />
        </div>
      </div>
      <FeatureSection />
      <Organise />
      <Prototyping />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Home;
