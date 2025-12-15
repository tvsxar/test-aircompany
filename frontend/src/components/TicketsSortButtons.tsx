import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  toggleButtonGroupStyles,
  toggleButtonStyles,
} from "../styled/components/TicketSortButtons";

type Filters = {
  stops: number[],
  sort: "cheapest" | "fastest"
}

interface TicketsFilterProps {
  filters: Filters,
  setFilters: (filters: Filters) => void
}

function TicketsSortButtons({ filters, setFilters }: TicketsFilterProps) {
  const handleChange = (e: React.MouseEvent<HTMLElement>, newValue: "cheapest" | "fastest" | null) => {
    if (newValue !== null) setFilters({ ...filters, sort: newValue });
  };

  return (
    <ToggleButtonGroup
      fullWidth
      value={filters.sort}
      exclusive
      onChange={handleChange}
      aria-label="Sort tickets"
      sx={toggleButtonGroupStyles}
    >
      <ToggleButton value="cheapest" sx={toggleButtonStyles}>
        Самый дешёвый
      </ToggleButton>
      <ToggleButton value="fastest" sx={toggleButtonStyles}>
        Самый быстрый
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TicketsSortButtons;
