import { media, colors } from "../globals";

export const toggleButtonGroupStyles = {
  bgcolor: "white",
  borderRadius: 1.5,
  overflow: "hidden",
  display: "flex",
  width: "100%",
  boxShadow: 1,
};

export const toggleButtonStyles = {
  flexGrow: 1,
  fontSize: "1rem",
  fontWeight: 500,
  height: "3rem",
  border: "none",
  bgcolor: "white",
  color: "black",
  borderRadius: 0,
  color: colors.darkGray,
  "&.Mui-selected": {
    bgcolor: colors.accent,
    color: "white",
  },
  "&:hover": {
    bgcolor: "white",
  },
  "&.Mui-selected:hover": {
    bgcolor: colors.accent,
  },
  "&:focus-visible": {
    outline: "none",
  },
  ".MuiTouchRipple-root": {
    display: "none",
  },
  "&.MuiButtonBase-root:focus": {
    outline: "none",
  },
  [media.xs]: {
    fontSize: "0.75rem",
  },
  [media.sm]: {
    fontSize: "0.875rem",
  },
  [media.md]: {
    fontSize: "1rem",
  },
};
