import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Modal,
  Typography,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../../firebase.config";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IFormInput {
  dni: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
}

const partner = {
  dni: "0801-1990-01282",
  firstName: "Francisco Josue",
  lastName: "Torres",
  dateOfBirth: "23/12/2023",
  phoneNumber: "98401202",
  email: "franciscotorres23@gmail.com",
};

const FormControlMui = ({
  field,
  label,
  inputName,
  helperText,
}: {
  field: any;
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

export const NewPartnerModal = ({
  handleClose,
  isOpen,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dni: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
    },
  });

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const onSubmit: SubmitHandler<IFormInput> = async (partner) => {
    try {
      const docRef = await setDoc(doc(db, "partners", partner.dni), partner);
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "inline-flex" }}>
          <PersonAddIcon
            sx={{ marginRight: "16px" }}
            fontSize="large"
            color="primary"
          />
          <Typography
            sx={{ color: "#1665C0" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Nuevo Socio
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="dni"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="dni"
                helperText="Ingrese el DNI con guiones"
                label="DNI"
              />
            )}
          />
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="firstName"
                helperText="Ingrese el primer nombre"
                label="Nombre"
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="lastName"
                helperText="Ingrese el apellido"
                label="Apellido"
              />
            )}
          />
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="dateOfBirth"
                helperText="Ingrese la Fecha de Nacimiento dd/MM/YYYY"
                label="Fecha de Nacimiento"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="email"
                label="Correo electronico"
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="phoneNumber"
                label="Número de Teléfono"
                helperText="Ingrese el número de teléfono con area de país"
              />
            )}
          />
          {
            <Box pt="16px">
              <Button
                type="submit"
                variant="contained"
                endIcon={<SaveIcon />}
              >
                Guardar
              </Button>
            </Box>
          }
        </form>
      </Box>
    </Modal>
  );
};
