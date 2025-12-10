import { Box } from "@mui/material";
import TicketItem from "./TicketItem";
import { Link } from "react-router-dom";

function TicketsList() {
  return (
    <Box>
      <Link to='/ticket'>
        <TicketItem />
      </Link>

      <Link to='/ticket'>
        <TicketItem />
      </Link>

      <Link to='/ticket'>
        <TicketItem />
      </Link>

      <Link to='/ticket'>
        <TicketItem />
      </Link>

      <Link to='/ticket'>
        <TicketItem />
      </Link>
    </Box>
  );
}

export default TicketsList;
