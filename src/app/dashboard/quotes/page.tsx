import { getQuotes } from "@/app/lib/data";
import QuotesChart from "../../ui/quotes/quotesChart";
import { Suspense } from "react";

export default async function Quotes() {
  const dataPromise = getQuotes();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuotesChart dataPromise={dataPromise} />
    </Suspense>
  );
}
