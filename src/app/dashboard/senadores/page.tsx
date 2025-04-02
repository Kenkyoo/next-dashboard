import SenadoresDataGrid from "../../ui/senadores/senadoresTable";
import { Suspense } from "react";
import { getRows } from "@/app/lib/gridData";

export default function Senadores() {
  const rowsPromise = getRows(); // ✅ Pasamos la promesa

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SenadoresDataGrid rowsPromise={rowsPromise} />
    </Suspense>
  );
}
