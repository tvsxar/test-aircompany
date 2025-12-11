import { media } from "../globals";

export const ContainerStyle = {
  maxWidth: 800,
  mx: "auto",
  mt: 4,
  px: 2,
};

export const BackButtonStyle = {
  mt: 3,
  mb: 3,
  [media.xs]: {
    fontSize: "0.8rem",
  },
  [media.sm]: {
    fontSize: "0.9rem",
  },
  [media.md]: {
    fontSize: "1rem",
  },
};
