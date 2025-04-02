import { getDolarData } from "@/app/lib/data";
import DolarChart from "@/app/ui/dolar/DolarChart";
import { Suspense } from "react";

export default async function Dolar() {
  const dataPromise = getDolarData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DolarChart series={dataPromise} />
    </Suspense>
  );
}
