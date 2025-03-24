"use client";

import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import Rates from "../rates/rates";
import Dolar from "../dolar/dolar";

export default function Dashboard() {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Rates />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <p>Hello</p>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Dolar />
      </Grid>
    </Box>
  );
}
