import { DataModel } from "./types";

export const movementModel: DataModel = {
  fieldHeaders: {
    accountNumber: "Número de cuenta",
    quantity: "Cantidad",
    type: "Tipo de movimiento",
    date: "Fecha",
    description: "Descripción"
  },
  hiddenColumns: {
    id: false,
    accountId: false,
  },
};
