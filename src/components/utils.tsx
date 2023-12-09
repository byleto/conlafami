import { GridColDef } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore";
import { partner } from "../dataModel/partners";



const getListOfKeysFromObject = (object: DocumentData) => {
  if (object) {
    return Object.keys(object).toString().split(",");
  }
  return null;
};

export const buildDataColumns = (user: DocumentData): GridColDef[] => {
  const columnNames = getListOfKeysFromObject(user);
  if (columnNames) {
    return columnNames?.map((column) => ({
      field: column,
      headerName: partner.fieldHeaders[column] || column,
      width: 130,
    }));
  }
  return [];
};
