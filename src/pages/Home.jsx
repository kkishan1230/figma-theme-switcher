import React from "react";
import BannerSection from "../components/BannerSection";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import Prototyping from "../components/Prototyping";
import Organise from "../components/Organise";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer-links/Footer";

const Home = () => {
  return (
    <div>
      <div className="banner h-[53.27vw] lg:h-[620px] xl2:h-[750px]">
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
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
