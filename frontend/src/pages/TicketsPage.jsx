import { TicketsList, TicketsFilter, TicketsSortButtons } from "../components";
import { Container, Box, Typography } from "@mui/material";
import {
  containerStyles,
  leftBoxStyles,
  rightBoxStyles,
  loadingBoxStyles,
  loadingTextStyles,
} from "../styled/pages/TicketsPageStyles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function TicketsPage() {
  const dispatch = useDispatch();

  const { tickets, loading } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets || tickets.length === 0) {
      dispatch({ type: "tickets/fetchTickets" });
    }
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={loadingBoxStyles}>
        <Typography variant="h6" sx={loadingTextStyles}>
          Loading tickets...
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Box sx={leftBoxStyles}>
        <TicketsFilter />

        <Box sx={rightBoxStyles}>
          <TicketsSortButtons />
          <TicketsList tickets={tickets} />
        </Box>
      </Box>
    </Container>
  );
}

export default TicketsPage;
