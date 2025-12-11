import { Paper, Typography, Box } from "@mui/material";
import {
  ticketPaper,
  ticketHeaderBox,
  ticketRowBox,
  columnBox,
  priceText,
  carrierText,
  boldText,
  grayText,
} from "../styled/components/TicketItemStyles";

const TicketItem = ({ ticket }) => {
  const formatTime = (dateStr, duration) => {
    const departure = new Date(dateStr);
    const arrival = new Date(departure.getTime() + duration * 60 * 1000);
    return `${departure.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} – ${arrival.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const formatStops = (stops) =>
    stops.length ? stops.join(", ") : "Без пересадок";

  return (
    <Paper sx={ticketPaper}>
      <Box sx={ticketHeaderBox}>
        <Typography sx={priceText} variant="h6">
          ${ticket.price}
        </Typography>
        <Typography sx={carrierText} variant="subtitle1">
          {ticket.carrier} AirLines
        </Typography>
      </Box>

      <Box>
        <Box sx={ticketRowBox}>
          <Box sx={columnBox}>
            <Box>
              <Typography variant="body2" sx={grayText}>
                {ticket.segments[0].origin} → {ticket.segments[0].destination}
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {formatTime(
                  ticket.segments[0].date,
                  ticket.segments[0].duration
                )}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={grayText}>
                {ticket.segments[1].origin} → {ticket.segments[1].destination}
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {formatTime(
                  ticket.segments[1].date,
                  ticket.segments[1].duration
                )}
              </Typography>
            </Box>
          </Box>

          <Box sx={columnBox}>
            <Box>
              <Typography variant="body2" sx={grayText}>
                В ПУТИ
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {Math.floor(ticket.segments[0].duration / 60)}ч{" "}
                {ticket.segments[0].duration % 60}м
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={grayText}>
                В ПУТИ
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {Math.floor(ticket.segments[1].duration / 60)}ч{" "}
                {ticket.segments[1].duration % 60}м
              </Typography>
            </Box>
          </Box>

          <Box sx={columnBox}>
            <Box>
              <Typography variant="body2" sx={grayText}>
                ПЕРЕСАДКИ
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {formatStops(ticket.segments[0].stops)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={grayText}>
                ПЕРЕСАДКИ
              </Typography>
              <Typography variant="body2" sx={boldText}>
                {formatStops(ticket.segments[1].stops)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
export default TicketItem;
