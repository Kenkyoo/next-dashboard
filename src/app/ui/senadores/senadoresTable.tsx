"use client";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { use } from "react";

// ✅ Definimos las columnas aquí (en el cliente)
const columns: GridColDef[] = [
  {
    field: "foto",
    headerName: "Foto",
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => (
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
    valueGetter: (params) => params.value || "N/A",
  },
  { field: "id", headerName: "ID", flex: 1, minWidth: 150 },
];

export default function SenadoresDataGrid({
  rowsPromise,
}: {
  rowsPromise: Promise<GridRowsProp>;
}) {
  const rows = use(rowsPromise);

  return (
    <DataGrid
      checkboxSelection
      rows={rows}
      columns={columns} //
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
    />
  );
}
