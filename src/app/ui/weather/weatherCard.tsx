"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { use } from "react";

export default function WeatherCard({
  dataPromise,
}: {
  dataPromise: Promise<any>;
}): JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const allData = use(dataPromise);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: "600" }}
        >
          {allData.name}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "8px" }}>
          {allData.weather[0].description}
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth={isSmallScreen}
        >
          {allData.main.temp}°C
        </Button>
      </CardContent>
    </Card>
  );
}
