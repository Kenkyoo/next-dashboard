import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { getSenadores } from "./data";

interface FotoCellParams {
  value: string;
}

interface ReemplazoValueGetterParams {
  value: string | null;
}

export const columns: GridColDef[] = [
  {
    field: "foto",
    headerName: "Foto",
    flex: 0.5,
    minWidth: 80,
    renderCell: (params: FotoCellParams) => (
      <img
        src={params.value}
        alt="Foto"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
  },
  { field: "nombre", headerName: "Nombre", flex: 1.5, minWidth: 150 },
  { field: "partido", headerName: "Partido", flex: 1, minWidth: 100 },
  { field: "provincia", headerName: "Provincia", flex: 1, minWidth: 120 },
  {
    field: "reemplazo",
    headerName: "Reemplazo",
    flex: 1,
    minWidth: 100,
    valueGetter: (params: ReemplazoValueGetterParams) => params.value || "N/A", // Si no tiene reemplazo, mostrar "N/A"
  },
  { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
];

export const rows: Promise<GridRowsProp> = getSenadores();
