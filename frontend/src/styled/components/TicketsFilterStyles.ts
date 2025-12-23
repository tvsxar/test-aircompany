import { colors, media } from "../globals";

export const ticketFilterPaper = {
  p: 2,
  borderRadius: 1,
  bgcolor: "white",
  maxHeight: "14.5rem",
  minWidth: "15rem",
};

export const titleText = {
  fontSize: "1rem",
  mb: 1,
  color: colors.darkGray,
  [media.xs]: {
    fontSize: "0.875rem",
    mb: 0.5,
  },
  [media.md]: {
    fontSize: "1rem",
    mb: 1,
  },
};

export const formGroup = {
  width: "100%",
};

export const formControlLabel = {
  ...formGroup,
  borderRadius: 1,
  "&:hover": {
    bgcolor: colors.bgHover,
  },
  "& .MuiFormControlLabel-label": {
    fontSize: "1rem",
    [media.xs]: {
      fontSize: "0.875rem",
    },
    [media.md]: {
      fontSize: "1rem",
    },
  },
};

export const checkbox = {
  color: colors.accent,
  "&.Mui-checked": {
    color: colors.accent,
  },
};
