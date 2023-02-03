import { Box, Typography } from "@mui/material";
import React from "react";

const Companies = ({ img_src, padding_y }) => {
  return (
    <Box
      className={`px-[40px] flex flex-col justify-center border-[1px] border-solid border-[#D8D8D8] sm:w-[253px] sm:h-[151px]`}
      style={{
        paddingTop: padding_y,
        paddingBottom: padding_y,
      }}
    >
      <Typography className="client-name" color="secondary">
        Client Name
      </Typography>
      <div className="mt-[15px]">
        <img src={img_src} alt="" />
      </div>
    </Box>
  );
};

export default Companies;
