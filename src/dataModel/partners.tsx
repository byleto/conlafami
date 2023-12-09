export type HiddenColumns = { [name: string]: boolean };
type FieldHeaders = { [field: string]: string };

type DataModel = {
  fieldHeaders: FieldHeaders;
  hiddenColumns: HiddenColumns;
};

export const partner: DataModel = {
  fieldHeaders: {
    lastName: "Apellido",
    firstName: "Nombre",
    dni: "DNI",
    email: "Correo electrónico",
    phoneNumber: "Telêfono",
    dateOfBirth: "Fecha de Nacimiento",
  },
  hiddenColumns: {
    id: false,
  },
};
