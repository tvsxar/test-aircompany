import { TicketsList, TicketsFilter, TicketsSortButtons } from "../../components";
import { Container, Box, Typography } from "@mui/material";
import {
  containerStyles,
  leftBoxStyles,
  rightBoxStyles,
  loadingBoxStyles,
  loadingTextStyles,
} from "../../styled/pages/TicketsPageStyles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from '../../redux/store';
import { Ticket, Filters } from '../../types/types';

function TicketsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { tickets, loading } = useSelector<RootState, { tickets: Ticket[]; loading: boolean }>(
    (state) => state.tickets
  );
  const [displayedTickets, setDisplayedTickets] = useState<Ticket[]>([]);
  const [filters, setFilters] = useState<Filters>({
    stops: [],
    sort: "cheapest"
  });

  useEffect(() => {
    if (!tickets || tickets.length === 0) {
      dispatch({ type: "tickets/fetchTickets" });
    }
  }, [dispatch]);

  useEffect(() => {
    const sortedTickets =
      filters.sort === "cheapest"
        ? [...tickets].sort((a, b) => a.price - b.price)
        : [...tickets].sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        );

    const filteredTickets = sortedTickets.filter((ticket) =>
      !filters.stops.length
        ? true
        : filters.stops.some(
          (stop) =>
            ticket.segments[0].stops.length === stop &&
            ticket.segments[1].stops.length === stop
        )
    );

    setDisplayedTickets(filteredTickets);
  }, [tickets, filters]);

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
        <TicketsFilter filters={filters} setFilters={setFilters} />

        <Box sx={rightBoxStyles}>
          <TicketsSortButtons filters={filters} setFilters={setFilters} />

          <TicketsList tickets={displayedTickets} />
        </Box>
      </Box>
    </Container>
  );
}

export default TicketsPage;
