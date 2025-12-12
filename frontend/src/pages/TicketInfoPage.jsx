import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { TicketInfoHeader, FlightInfo, AirlineInfo } from "../components";
import {
  ContainerStyle,
  BackButtonStyle,
} from "../styled/pages/TicketInfoPageStyles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function TicketInfoPage() {
  const [selectedTicket, setSelectedTicket] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const tickets = useSelector((state) => state.tickets.tickets);

  useEffect(() => {
    setSelectedTicket(tickets.find((ticket) => ticket.id === id));
  }, [tickets, id]);

  return (
    <Box sx={ContainerStyle}>
      <TicketInfoHeader ticket={selectedTicket} />

      <FlightInfo ticket={selectedTicket} />

      <AirlineInfo ticket={selectedTicket} />

      <Button
        variant="outlined"
        sx={BackButtonStyle}
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>
    </Box>
  );
}

export default TicketInfoPage;
