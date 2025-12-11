import { media, colors } from "../globals";

export const AirlinePaperStyle = {
  p: 3,
  mt: 4,
};

export const AirlineInfoText = {
  mb: 2,
  [media.xs]: {
    fontSize: "1.05rem",
  },
  [media.sm]: {
    fontSize: "1.15rem",
  },
  [media.md]: {
    fontSize: "1.25rem",
  },
};

export const AirLineGrayText = {
  color: colors.lightGray,
  fontWeight: 500,
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
