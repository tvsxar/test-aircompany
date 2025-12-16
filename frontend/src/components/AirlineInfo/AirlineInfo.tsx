import {
  AirlinePaperStyle,
  AirLineGrayText,
  AirlineInfoText,
} from "../../styled/components/AirlineInfoStyles";
import { Paper, Typography } from "@mui/material";
import { Ticket } from '../../types/types';

interface AirlineInfoProps {
  ticket: Ticket
}

const AirlineInfo = ({ ticket }: AirlineInfoProps) => (
  <Paper sx={AirlinePaperStyle}>
    <Typography variant="h6" sx={AirlineInfoText}>
      Об авиакомпании
    </Typography>
    <Typography sx={AirLineGrayText}>{ticket.carrier} Airlines</Typography>
  </Paper>
);

export default AirlineInfo;
