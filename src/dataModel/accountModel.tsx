import { DataModel } from "./types";

export const accountModel: DataModel = {
  fieldHeaders: {
    accountNumber: "Número de cuenta",
    balance: "Saldo",
    type: "Tipo de cuenta",
    partnerName: "Nombre de socio",
    deposits: "Depositos",
    withdraw: "Retiros",
  },
  hiddenColumns: {
    id: false,
    userId: false,
  },
};
