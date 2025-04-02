import { Suspense } from "react";
import FeriadosTreeView from "../../ui/feriados/feriadosTree";
import { getFeriados } from "@/app/lib/data";

export default async function Feriados() {
  const dataPromise = getFeriados();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeriadosTreeView feriados={dataPromise} />
    </Suspense>
  );
}
