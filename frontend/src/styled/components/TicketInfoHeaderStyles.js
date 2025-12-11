import { media, colors } from "../globals";

export const PaperStyles = {
  p: 3,
  mb: 4,
};

export const titlePrice = {
  fontWeight: "bold",
  fontSize: '2rem',
  color: colors.accent,
  [media.xs]: {
    fontSize: "1.75rem",
  },
  [media.sm]: {
    fontSize: "1.9rem",
  },
  [media.md]: {
    fontSize: "2rem",
  },
};

export const airlineName = {
  color: colors.darkGray,
  [media.xs]: {
    fontSize: "1.35rem",
  },
  [media.sm]: {
    fontSize: "1.5rem",
  },
  [media.md]: {
    fontSize: "1.6rem",
  },
};

export const boxSpaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2,
};

export const ButtonStyle = {
  bgсolor: colors.accent,
  [media.xs]: {
    fontSize: "0.75rem",
  },
  [media.sm]: {
    fontSize: "0.9rem",
  },
  [media.md]: {
    fontSize: "1rem",
  },
};
