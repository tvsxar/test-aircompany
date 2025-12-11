import {
  AirlinePaperStyle,
  AirLineGrayText,
  AirlineInfoText,
} from "../styled/components/AirlineInfoStyles";
import { Paper, Typography } from "@mui/material";

const AirlineInfo = ({ ticket }) => (
  <Paper sx={AirlinePaperStyle}>
    <Typography variant="h6" sx={AirlineInfoText}>
      Об авиакомпании
    </Typography>
    <Typography sx={AirLineGrayText}>{ticket.carrier} Airlines</Typography>
  </Paper>
);

export default AirlineInfo;
