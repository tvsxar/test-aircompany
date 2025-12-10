import {
  PaperStyles,
  boxSpaceBetween,
  titlePrice,
  airlineName,
  ButtonStyle,
} from "../styled/components/TicketInfoHeader/TicketInfoHeaderStyles";
import { Box, Paper, Typography, Button } from "@mui/material";

const TicketInfoHeader = () => (
  <Paper sx={PaperStyles}>
    <Box sx={boxSpaceBetween}>
      <Typography variant="h4" sx={titlePrice}>
        12 000
      </Typography>
      <Typography variant="h6" sx={airlineName}>
        S7 Airlines
      </Typography>
    </Box>
    <Button variant="contained" sx={ButtonStyle}>
      Купить билет
    </Button>
  </Paper>
);

export default TicketInfoHeader;
