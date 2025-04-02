"use client";

import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Rates from "../rates/page";
import Dolar from "../dolar/page";
import Inflation from "../inflation/page";
import Senadores from "../senadores/page";
import Feriados from "../feriados/page";
import Quotes from "../quotes/page";
import Copyright from "@/app/components/Copyright";
import clsx from "clsx";

import { lusitana } from "@/app/ui/fonts";

export default function Dashboard({ status }: { status: string }) {
  return (
    <Box
      className={`${lusitana.className}`}
      sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}
    >
      {/* cards */}
      <span
        className={clsx(
          "inline-flex items-center rounded-full px-2 py-1 text-sm",
          {
            "bg-gray-100 text-gray-500": status === "pending",
            "bg-green-500 text-white": status === "paid",
          }
        )}
      ></span>
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
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}></Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Dolar />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Inflation />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Senadores
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Senadores />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <Feriados />
            <Quotes />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
