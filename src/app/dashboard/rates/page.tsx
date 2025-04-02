import { getRatesData } from "@/app/lib/data";
import GridRates from "../../ui/rates/gridRates";
import { Suspense } from "react";

export default async function Rates() {
  const dataPromise = getRatesData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GridRates data={dataPromise} />
    </Suspense>
  );
}
