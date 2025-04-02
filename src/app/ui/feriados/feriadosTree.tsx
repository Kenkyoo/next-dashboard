"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import { use } from "react";

interface FeriadosTreeViewProps {
  feriados: TreeViewBaseItem[];
}
export default function FeriadosTreeView({ feriados }: FeriadosTreeViewProps) {
  const allFeriados = use(feriados);
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <RichTreeView items={allFeriados} getItemId={(item) => item.id} />
    </Box>
  );
}
