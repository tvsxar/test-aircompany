import { media, colors } from "../globals";

export const containerStyles = {
  mt: 4,
};

export const leftBoxStyles = {
  display: "flex",
  gap: 2,
  width: "100%",
  flexDirection: "column",
  [media.sm]: {
    flexDirection: "row",
  },
};

export const rightBoxStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  flex: 1,
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
