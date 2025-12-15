import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { TicketInfoHeader, FlightInfo, AirlineInfo } from "../components";
import {
  ContainerStyle,
  BackButtonStyle,
} from "../styled/pages/TicketInfoPageStyles";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";

interface Ticket {
  id: string,
  carrier: string,
  price: number,
  segments: {
    date: string,
    destination: string,
    duration: number,
    origin: string,
    stops: string[]
  }[]
}

function TicketInfoPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tickets = useSelector((state: RootState) => (state.tickets.tickets || []) as Ticket[]);

  useEffect(() => {
    if (id) {
      setSelectedTicket(tickets.find((ticket) => ticket.id === id) || null);
    }
  }, [tickets, id]);

  if (selectedTicket === null) {
    return (
      <Box sx={ContainerStyle}>
        <Typography>Error, please back to Home page</Typography>
        <Button
          variant="outlined"
          sx={BackButtonStyle}
          onClick={() => navigate(-1)}
        >
          To Home page
        </Button>
      </Box>
    );
  }

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
