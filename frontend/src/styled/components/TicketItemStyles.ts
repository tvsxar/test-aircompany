import { media, colors } from "../globals";

export const ticketPaper = {
  p: 2,
  mb: 2,
  width: "100%",
};

export const ticketHeaderBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 3,
};

export const ticketRowBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  mb: 1,
};

export const columnBox = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const priceText = {
  fontWeight: "bold",
  fontSize: "1.75rem",
  color: colors.accent,
  [media.xs]: {
    fontSize: "1.65rem",
  },
  [media.sm]: {
    fontSize: "1.7rem",
  },
  [media.md]: {
    fontSize: "1.75rem",
  },
};

export const boldText = {
  fontWeight: 600,
  fontSize: '0.85rem',
  [media.xs]: {
    fontSize: "0.75rem",
  },
  [media.sm]: {
    fontSize: "0.8rem",
  },
  [media.md]: {
    fontSize: "0.85rem",
  },
};

export const carrierText = {
  fontWeight: 600,
  color: colors.darkGray,
  fontSize: "1.25rem",
  [media.xs]: {
    fontSize: "1.15rem",
  },
  [media.sm]: {
    fontSize: "1.20rem",
  },
  [media.md]: {
    fontSize: "1.25rem",
  },
};

export const grayText = {
  fontWeight: 600,
  fontSize: "0.75rem",
  color: colors.lightGray,
  [media.xs]: {
    fontSize: "0.65rem",
  },
  [media.sm]: {
    fontSize: "0.7rem",
  },
  [media.md]: {
    fontSize: "0.75rem",
  },
};
