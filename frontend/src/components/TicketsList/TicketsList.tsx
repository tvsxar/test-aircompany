import { Box } from "@mui/material";
import TicketItem from "../TicketItem/TicketItem";
import { Link } from "react-router-dom";
import { Ticket } from '../../types/types';

interface TicketsListProps {
  tickets: Ticket[]
}

function TicketsList({ tickets }: TicketsListProps) {
  return (
    <Box>
      {tickets.map((ticket, index: number) => (
        <Link
          to={"/ticket/" + ticket.id}
          key={ticket.price + index}>
          <TicketItem ticket={ticket} />
        </Link>
      ))}
    </Box>
  );
}

export default TicketsList;
