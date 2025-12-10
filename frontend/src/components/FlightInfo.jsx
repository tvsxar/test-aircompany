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
} from "../styled/components/FlightInfo/FlightInfoStyles";
import { Box, Paper, Typography, Divider, Chip } from "@mui/material";

const FlightInfo = () => (
  <Paper sx={FlightPaperStyle}>
    <Box sx={FlightBoxStyle}>
      <Typography variant="h6" sx={FlightTitleStyle}>
        Вылет
      </Typography>

      <Box sx={FlightInfoRow}>
        <Box sx={FlightColumn}>
          <Typography sx={GrayText}>WAW → HKT</Typography>
          <Typography sx={BoldText}>10:45 – 08:00</Typography>
        </Box>
        <Box sx={FlightColumnRight}>
          <Typography sx={GrayText}>Время в пути</Typography>
          <Typography sx={BoldText}>21ч 15м</Typography>
        </Box>
      </Box>

      <Box sx={ChipWrapper}>
        <Chip label="Пересадка: HKG" />
        <Chip label="Пересадка: JNB" />
      </Box>

      <Divider />
    </Box>

    <Box sx={FlightBoxStyle}>
      <Typography variant="h6" sx={FlightTitleStyle}>
        Возврат
      </Typography>

      <Box sx={FlightInfoRow}>
        <Box sx={FlightColumn}>
          <Typography sx={GrayText}>HKT → WAW</Typography>
          <Typography sx={BoldText}>11:20 – 00:50</Typography>
        </Box>
        <Box sx={FlightColumnRight}>
          <Typography sx={GrayText}>Время в пути</Typography>
          <Typography sx={BoldText}>13ч 30м</Typography>
        </Box>
      </Box>

      <Box sx={ChipWrapper}>
        <Chip label="Пересадка: HKG" />
      </Box>

      <Divider />
    </Box>
  </Paper>
);

export default FlightInfo;
