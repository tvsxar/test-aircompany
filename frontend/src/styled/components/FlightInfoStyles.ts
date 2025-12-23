import { media, colors } from "../globals";

export const FlightPaperStyle = {
  p: 3,
};

export const FlightBoxStyle = {
  mb: 4,
};

export const FlightTitleStyle = {
  mb: 2,
  [media.xs]: {
    fontSize: "1.1rem",
  },
  [media.sm]: {
    fontSize: "1.2rem",
  },
  [media.md]: {
    fontSize: "1.3rem",
  },
};

export const GrayText = {
  color: colors.lightGray,
  fontWeight: 500,
  [media.xs]: {
    fontSize: "0.9rem",
  },
  [media.sm]: {
    fontSize: "1rem",
  },
  [media.md]: {
    fontSize: "1.1rem",
  },
};

export const BoldText = {
  fontWeight: 600,
  [media.xs]: {
    fontSize: "0.9rem",
  },
  [media.sm]: {
    fontSize: "1rem",
  },
  [media.md]: {
    fontSize: "1.1rem",
  },
};

export const FlightInfoRow = {
  display: "flex",
  justifyContent: "space-between",
  mb: 1,
};

export const FlightColumn = {
  display: "flex",
  flexDirection: "column",
};

export const FlightColumnRight = {
  display: "flex",
  flexDirection: "column",
  textAlign: "right",
};

export const ChipWrapper = {
  display: "flex",
  gap: 1,
  flexWrap: "wrap",
  mb: 2,
  [media.xs]: {
    gap: 0.5,
    flexDirection: "column",
  },
  [media.sm]: {
    gap: 0.75,
    flexDirection: "row",
  },
  [media.md]: {
    gap: 1,
  },
};

export const loadingBoxStyles = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: colors.bgLoading,
  px: 2,
};

export const loadingTextStyles = {
  fontWeight: 600,
  color: colors.lightGray,
};
