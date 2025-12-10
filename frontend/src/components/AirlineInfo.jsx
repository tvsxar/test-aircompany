import {
  AirlinePaperStyle,
  AirLineGrayText,
  AirlineInfoText,
} from "../styled/components/AirlineInfo/AirlineInfoStyles";
import { Box, Paper, Typography } from "@mui/material";

const AirlineInfo = () => (
  <Paper sx={AirlinePaperStyle}>
    <Typography variant="h6" sx={AirlineInfoText}>
      Об авиакомпании
    </Typography>
    <Typography sx={AirLineGrayText}>U7 Airlines</Typography>
  </Paper>
);

export default AirlineInfo;
