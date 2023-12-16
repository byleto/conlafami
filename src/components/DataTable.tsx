import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore";
import { DataModel } from "../dataModel/types";
import { buildDataColumns } from "./utils";

export default function DataTable({
  rows,
  dataModel,
}: {
  rows: DocumentData[];
  dataModel: DataModel;
}) {
  const [firstRow] = rows;
  const columns = buildDataColumns(firstRow, dataModel);

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
            columnVisibilityModel: dataModel.hiddenColumns,
          },
          
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection

        
      />
    </Box>
  );
}
