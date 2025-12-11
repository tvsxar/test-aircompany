import {
  FlightPaperStyle,
  FlightBoxStyle,
  FlightTitleStyle,
  GrayText,
  BoldText,
  FlightInfoRow,
  FlightColumn,
  ChipWrapper,
  FlightColumnRight,
  loadingBoxStyles,
  loadingTextStyles,
} from "../styled/components/FlightInfoStyles";
import { Box, Paper, Typography, Divider, Chip } from "@mui/material";

const FlightInfo = ({ ticket }) => {
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

  if (!ticket || !ticket.segments || ticket.segments.length < 2) {
    return (
      <Box sx={loadingBoxStyles}>
        <Typography variant="h6" sx={loadingTextStyles}>
          Loading ticket info...
        </Typography>
      </Box>
    );
  }

  return (
    <Paper sx={FlightPaperStyle}>
      <Box sx={FlightBoxStyle}>
        <Typography variant="h6" sx={FlightTitleStyle}>
          Вылет
        </Typography>

        <Box sx={FlightInfoRow}>
          <Box sx={FlightColumn}>
            <Typography sx={GrayText}>
              {ticket.segments[0].origin} → {ticket.segments[0].destination}
            </Typography>
            <Typography sx={BoldText}>
              {formatTime(ticket.segments[0].date, ticket.segments[0].duration)}
            </Typography>
          </Box>
          <Box sx={FlightColumnRight}>
            <Typography sx={GrayText}>Время в пути</Typography>
            <Typography sx={BoldText}>
              {Math.floor(ticket.segments[0].duration / 60)}ч{" "}
              {ticket.segments[0].duration % 60}м
            </Typography>
          </Box>
        </Box>

        <Box sx={ChipWrapper}>
          {ticket.segments[0].stops.map((stop, index) => (
            <Chip key={index} label={`Пересадка: ${stop}`} />
          ))}
        </Box>

        <Divider />
      </Box>

      <Box sx={FlightBoxStyle}>
        <Typography variant="h6" sx={FlightTitleStyle}>
          Возврат
        </Typography>

        <Box sx={FlightInfoRow}>
          <Box sx={FlightColumn}>
            <Typography sx={GrayText}>
              {ticket.segments[1].origin} → {ticket.segments[1].destination}
            </Typography>
            <Typography sx={BoldText}>
              {formatTime(ticket.segments[1].date, ticket.segments[1].duration)}
            </Typography>
          </Box>
          <Box sx={FlightColumnRight}>
            <Typography sx={GrayText}>Время в пути</Typography>
            <Typography sx={BoldText}>
              {Math.floor(ticket.segments[1].duration / 60)}ч{" "}
              {ticket.segments[1].duration % 60}м
            </Typography>
          </Box>
        </Box>

        <Box sx={ChipWrapper}>
          {ticket.segments[1].stops.map((stop, index) => (
            <Chip key={index} label={`Пересадка: ${stop}`} />
          ))}
        </Box>

        <Divider />
      </Box>
    </Paper>
  );
};

export default FlightInfo;
