import { GridColDef } from "@mui/x-data-grid";
import {
  DocumentData,
  Firestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { DataModel } from "../dataModel/types";

const getListOfKeysFromObject = (object: DocumentData) => {
  if (object) {
    return Object.keys(object).toString().split(",");
  }
  return null;
};

export const buildDataColumns = (
  object: DocumentData,
  model: DataModel
): GridColDef[] => {
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

export async function getPartners(db: Firestore) {
  const partnersCollection = collection(db, "partners");
  const partnerSnapshot = await getDocs(partnersCollection);
  const partnerList = partnerSnapshot.docs.map((doc) => doc.data());
  return partnerList;
}

export async function getAccounts(db: Firestore) {
  const accountsCollection = collection(db, "accounts");
  const accountSnapshot = await getDocs(accountsCollection);
  return accountSnapshot.docs.map((doc) => doc.data());
}
