import { GridColDef } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore";
import { DataModel } from "../dataModel/types";

const getListOfKeysFromObject = (object: DocumentData) => {
  if (object) {
    return Object.keys(object).toString().split(",");
  }
  return null;
};

export const buildDataColumns = (object: DocumentData, model:DataModel): GridColDef[] => {
  const columnNames = getListOfKeysFromObject(object);
  if (columnNames) {
    return columnNames?.map((column) => ({
      field: column,
      headerName: model.fieldHeaders[column] || column,
      width: 150,
    }));
  }
  return [];
};
