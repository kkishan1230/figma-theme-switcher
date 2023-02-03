import open_feature from "../images/openfeature.svg";
import design from "../images/doodle.svg";
import brush from "../images/paint_brush.svg";
import { Box, styled, Typography } from "@mui/material";
import { TagLine, TextH2 } from "./globalComponents/globalComponents";

const Feature_section = () => {
  const TextWhite = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontFamily: "Rubik",
    fontSize: "",
  }));
  const TextLightGrey = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.lightGrey,
  }));
  return (
    <Box className="text-center md:mt-[70px] sm:mt-[110px] mt-[126px]">
      <TextH2
        variant="h2"
        fontFamily="Rubik"
        color="secondary"
        className="mx-auto"
      >
        Features
      </TextH2>
      <TagLine
        className="tag-line mx-auto max-w-[532px] md:text-[24px] sm:max-w-[265px]"
        color="secondary.lightGrey"
      >
        Most calendars are designed for teams.
        <TagLine className="sm:hidden">
          Slate is designed for freelancers
        </TagLine>
      </TagLine>
      <div className="sm:flex sm:flex-col-reverse ">
        <div className="flex text-center gap-[76px] justify-center mt-[97px] md:mt-[50px] md:flex-col md:items-center lg:gap-[40px] lg:max-w-[680px] lg:mx-auto sm:mt-[82px] sm:gap-[82px]">
          <div className="max-w-[231px] ">
            <img
              alt=""
              src={open_feature}
              className="w-[46px] mx-auto mb-[27px]"
            />
            <TextWhite className="mb-[20px] h3 font-bold text-[20px]">
              OpenType features Variable fonts
            </TextWhite>
            <TextLightGrey>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </TextLightGrey>
          </div>
          <div className="max-w-[231px] ">
            <img alt="" src={design} className="w-[50px] mx-auto mb-[27px]" />
            <TextWhite className="mb-[20px] h3 font-bold text-[20px]">
              Design with real data
            </TextWhite>
            <TextLightGrey>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </TextLightGrey>
          </div>
          <div className="max-w-[231px] ">
            <img alt="" src={brush} className="w-[48px] mx-auto mb-[27px]" />
            <TextWhite className="mb-[20px] h3 font-bold text-[20px]">
              Fastest way to take action
            </TextWhite>
            <TextLightGrey>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </TextLightGrey>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Feature_section;
