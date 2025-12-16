import { Paper, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { ticketFilterPaper, titleText, formGroup, formControlLabel, checkbox } from "../../styled/components/TicketsFilterStyles";
import { Formik, Form } from "formik";
import { Filters } from '../../types/types';

const stopsOptions = [
  { label: "Прямой рейс", value: 0 },
  { label: "1 пересадка", value: 1 },
  { label: "2 пересадки", value: 2 },
  { label: "3 пересадки", value: 3 },
];

interface TicketsFilterProps {
  filters: Filters,
  setFilters: (filters: Filters) => void
}

const TicketsFilter = ({ filters, setFilters }: TicketsFilterProps) => (
  <Paper sx={ticketFilterPaper}>
    <Typography variant="h6" sx={titleText}>
      Количество пересадок
    </Typography>

    <Formik<{ stops: number[] }>
      enableReinitialize
      initialValues={{ stops: filters.stops }}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FormGroup sx={formGroup}>
            {stopsOptions.map((stop) => {
              const isChecked = values.stops.includes(stop.value);
              return (
                <FormControlLabel
                  key={stop.value}
                  label={stop.label}
                  sx={formControlLabel}
                  control={
                    <Checkbox
                      checked={isChecked}
                      sx={checkbox}
                      onChange={(e) => {
                        let newStops;
                        if (e.target.checked) {
                          newStops = [...values.stops, stop.value];
                        } else {
                          newStops = values.stops.filter((s: number) => s !== stop.value);
                        }
                        setFieldValue("stops", newStops);
                        setFilters({ ...filters, stops: newStops });
                      }}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </Form>
      )}
    </Formik>
  </Paper>
);

export default TicketsFilter;