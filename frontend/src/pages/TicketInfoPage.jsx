import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TicketInfoHeader, FlightInfo, AirlineInfo } from "../components";
import {
  ContainerStyle,
  BackButtonStyle,
} from "../styled/pages/TicketInfoPage/TicketInfoPageStyles";

function TicketInfoPage() {
  const navigate = useNavigate();

  return (
    <Box sx={ContainerStyle}>
      <TicketInfoHeader />

      <FlightInfo />

      <AirlineInfo />

      <Button variant="outlined" sx={BackButtonStyle} onClick={() => navigate(-1)}>
        Назад
      </Button>
    </Box>
  );
}

export default TicketInfoPage;
