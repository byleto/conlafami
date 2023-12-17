import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

export const FormControlMui = ({
  field,
  label,
  inputName,
  helperText,
}: {
  field: any; // TODO: use proper type here
  label: string;
  inputName: string;
  helperText?: string;
}) => {
  return (
    <FormControl>
      <InputLabel required variant="filled" htmlFor={inputName}>
        {label}
      </InputLabel>
      <Input
        {...field}
        id={inputName}
        aria-describedby={`${inputName}helper-text`}
      />
      <FormHelperText id={`${inputName}helper-text`}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};
