import { getRatesData } from "@/app/lib/data";
import GridRates from "./gridRates";

export default async function Rates() {
  const data = await getRatesData();

  return <GridRates data={data} />;
}
