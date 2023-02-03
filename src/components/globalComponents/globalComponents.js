import { Box, styled, Typography } from "@mui/material";

export const TextH1 = styled(Typography)(({ theme }) => ({
  fontSize: "74px",
  fontWeight: "700",
  lineHeight: "84px",
  letterSpacing: "0.2px",
  maxWidth: "677px",
}));

export const TextH2 = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: "400",
  lineHeight: "55px",
  letterSpacing: "0.2px",
}));

export const TextH3 = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "28px",
  letterSpacing: "0.1px",
}));

export const TextParagraph = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "25px",
  letterSpacing: "0.2px",
}));

export const Container1440 = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
  marginInline: "auto",
}));

export const TagLine = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontWeight: "400",
  letterSpacing: "0.2px",
  fontSize: "28px",
  lineHeight: "40px",
}));

export const CommontText = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "23px",
  letterSpacing: "0.1px",
}));

export const Icons = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));
