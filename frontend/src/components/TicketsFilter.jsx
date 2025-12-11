import {
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  ticketFilterPaper,
  titleText,
  formGroup,
  formControlLabel,
  checkbox,
} from "../styled/components/TicketsFilterStyles";

const TicketsFilter = () => (
  <Paper sx={ticketFilterPaper}>
    <Typography variant="h6" sx={titleText}>
      Количество пересадок
    </Typography>

    <FormGroup sx={formGroup}>
      {[
        "Все",
        "Без пересадок",
        "1 пересадка",
        "2 пересадки",
        "3 пересадки",
      ].map((item, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox sx={checkbox} />}
          label={item}
          sx={formControlLabel}
        />
      ))}
    </FormGroup>
  </Paper>
);

export default TicketsFilter;
