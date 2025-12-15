import { Box } from "@mui/material";
import TicketItem from "./TicketItem";
import { Link } from "react-router-dom";

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
