import {
  PaperStyles,
  boxSpaceBetween,
  titlePrice,
  airlineName,
  ButtonStyle,
} from "../../styled/components/TicketInfoHeaderStyles";
import { Box, Paper, Typography, Button } from "@mui/material";
import { Ticket } from '../../types/types';

interface TicketInfoHeaderProps {
  ticket: Ticket
}

const TicketInfoHeader = ({ ticket }: TicketInfoHeaderProps) => (
  <Paper sx={PaperStyles}>
    <Box sx={boxSpaceBetween}>
      <Typography variant="h4" sx={titlePrice}>
        ${ticket.price}
      </Typography>
      <Typography variant="h6" sx={airlineName}>
        {ticket.carrier} Airlines
      </Typography>
    </Box>
    <Button variant="contained" sx={ButtonStyle}>
      Купить билет
    </Button>
  </Paper>
);

export default TicketInfoHeader;
