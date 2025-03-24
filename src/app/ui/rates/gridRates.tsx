"use client";

import StatCard from "@/app/components/StatCard";
import Grid from "@mui/material/Grid2";
import { StatCardProps } from "@/app/lib/types";

interface GridRatesProps {
  data: StatCardProps[];
}

export default function GridRates({ data }: GridRatesProps) {
  return (
    <>
      {data.map((card, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard {...card} />
        </Grid>
      ))}
    </>
  );
}
