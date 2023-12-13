import { DataGrid } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore";
import { buildDataColumns } from "./utils";
import { HiddenColumns } from "../dataModel/partners";
import { Box } from "@mui/material";

export default function DataTable({
  rows,
  hiddenColumns,
}: {
  rows: DocumentData[];
  hiddenColumns: HiddenColumns;
}) {
  const [firstRow] = rows;
  const columns = buildDataColumns(firstRow);

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
          columns: {
            columnVisibilityModel: hiddenColumns,
          },
          
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection

        
      />
    </Box>
  );
}
