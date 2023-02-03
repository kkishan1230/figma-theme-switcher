import React, { useEffect } from "react";
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
import { Box, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import {
  blueTheme,
  darkPink,
  darkTheme,
} from "../feature/counter/themeChanger";

const Home = () => {
  const customTheme = useSelector((state) => state.themeChanger.value);

  // functions
  const theme = createTheme({
    palette: {
      primary: {
        main:
          customTheme === "blueTheme"
            ? "#FFFFFF"
            : customTheme === "darkTheme"
            ? "#252B42"
            : "#913175",
      },
      secondary: {
        main:
          customTheme === "darkTheme"
            ? "#FFFFFF"
            : customTheme === "blueTheme"
            ? "#252B42"
            : "#FFFFFF",
        lightGrey:
          customTheme === "darkTheme"
            ? "#E9E8E8"
            : customTheme === "blueTheme"
            ? "#252B42"
            : "#E9E8E8",
      },
    },
    typography: {
      a: {
        fontFamily: "Rubik",
      },
    },
  });
  // theme changer actions
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(darkTheme());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeThemedark = () => {
    dispatch(darkTheme());
  };

  const changeThemePink = () => {
    dispatch(darkPink());
  };
  const changeThemeBlue = () => {
    dispatch(blueTheme());
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Box className=" flex gap-[20px] z-20 h-[30px] absolute top-5 left-[50%] translate-x-[-50%]">
          <Box
            className="border-solid border-[2px] w-[30px] h=[30px] rounded-full bg-[#252b42] shadow-[0_0_10px_rgba(255,255,255,1)] cursor-pointer"
            onClick={changeThemedark}
          ></Box>
          <Box
            className="border-solid border-[2px] w-[30px] h=[30px] rounded-full bg-[#2091f9] shadow-[0_0_10px_rgba(255,255,255,1)] cursor-pointer"
            onClick={changeThemeBlue}
          ></Box>
          <Box
            className="border-solid border-[2px] w-[30px] h=[30px] rounded-full bg-[#913175] shadow-[0_0_10px_rgba(255,255,255,1)] cursor-pointer"
            onClick={changeThemePink}
          ></Box>
        </Box>
        <div className="banner h-[53.27vw]  md:h-[847px] lg:h-[620px] xl2:h-[750px] relative">
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
      </Box>
    </ThemeProvider>
  );
};

export default Home;
