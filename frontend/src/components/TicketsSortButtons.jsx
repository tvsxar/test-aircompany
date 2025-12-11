import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { toggleButtonGroupStyles, toggleButtonStyles } from '../styled/components/TicketSortButtons'

function TicketsSortButtons() {
  const [value, setValue] = useState("cheapest");

  const handleChange = (e, newValue) => {
    if (newValue !== null) setValue(newValue);
  };

  return (
    <ToggleButtonGroup
      fullWidth
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Sort tickets"
      sx={toggleButtonGroupStyles}
    >
      <ToggleButton
        value="cheapest"
        sx={toggleButtonStyles}
      >
        Самый дешёвый
      </ToggleButton>
      <ToggleButton
        value="fastest"
        sx={toggleButtonStyles}
      >
        Самый быстрый
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TicketsSortButtons;
