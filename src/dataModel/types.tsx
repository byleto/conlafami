export type HiddenColumns = { [name: string]: boolean };
type FieldHeaders = { [field: string]: string };

export type DataModel = {
  fieldHeaders: FieldHeaders;
  hiddenColumns: HiddenColumns;
};