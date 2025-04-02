import { getInflationMonth } from "@/app/lib/data";
import InflationChart from "../../ui/inflation/inflationChart";
import { Suspense } from "react";

export default async function Inflation() {
  const dataPromise = getInflationMonth();
  console.log(dataPromise);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InflationChart data={dataPromise} />
    </Suspense>
  );
}
