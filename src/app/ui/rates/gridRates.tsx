"use client";

import StatCard from "@/app/components/StatCard";
import Grid from "@mui/material/Grid2";
import { StatCardProps } from "@/app/lib/types";
import { use } from "react";

interface GridRatesProps {
  data: StatCardProps[];
}

export default function GridRates({
  data,
}: {
  data: Promise<StatCardProps[]>;
}) {
  const allData = use(data);
  return (
    <>
      {allData.map((card, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard {...card} />
        </Grid>
      ))}
    </>
  );
}
