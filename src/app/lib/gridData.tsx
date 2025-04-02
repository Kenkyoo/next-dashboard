import { GridRowsProp } from "@mui/x-data-grid";
import { getSenadores } from "./data";

export async function getRows(): Promise<GridRowsProp> {
  const data = await getSenadores();

  return data.map((senador) => ({
    id: senador.id,
    nombre: senador.nombre,
    partido: senador.partido,
    provincia: senador.provincia,
    reemplazo: senador.reemplazo || "N/A",
    foto: senador.foto,
  }));
}
