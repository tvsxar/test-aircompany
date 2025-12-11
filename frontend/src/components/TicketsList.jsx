import { Box } from "@mui/material";
import TicketItem from "./TicketItem";
import { Link } from "react-router-dom";

function TicketsList({ tickets }) {
  return (
    <Box>
      {tickets.map((ticket, index) => (
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
