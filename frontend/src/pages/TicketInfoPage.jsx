import { Box, Paper, Typography, Divider, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const grayStyles = {
  color: "#9a9a9aff",
  fontWeight: 500,
};

const boldStyles = {
  fontWeight: 600,
};

function TicketInfoPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, px: 2 }}>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1e84ebff" }}
          >
            12 000
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            S7 Airlines
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Купить билет
        </Button>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Вылет
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={grayStyles}>WAW → HKT</Typography>
              <Typography sx={boldStyles}>10:45 – 08:00</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <Typography sx={grayStyles}>В пути</Typography>
              <Typography sx={boldStyles}>21ч 15м</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            <Chip label="Пересадка: HKG" />
            <Chip label="Пересадка: JNB" />
          </Box>

          <Divider />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Возврат
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={grayStyles}>HKT → WAW</Typography>
              <Typography sx={boldStyles}>11:20 – 00:50</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <Typography sx={grayStyles}>В пути</Typography>
              <Typography sx={boldStyles}>13ч 30м</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            <Chip label="Пересадка: HKG" />
          </Box>

          <Divider />
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Об авиакомпании
        </Typography>
        <Typography sx={grayStyles}>S7 Airlines</Typography>
      </Paper>

      <Button
        variant="outlined"
        sx={{ mt: 3 }}
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>
    </Box>
  );
}

export default TicketInfoPage;
