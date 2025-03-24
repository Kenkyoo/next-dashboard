import { getDolarData } from "@/app/lib/data";
import DolarChart from "@/app/components/DolarChart";

export default async function Dolar() {
  const data = await getDolarData();

  return <DolarChart series={data} />;
}
