import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import {
  Alert,
  Box,
  Button,
  Modal,
  Snackbar,
  Typography
} from "@mui/material";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { firebaseConfig } from "../../firebase.config";
import { FormControlMui } from "../components/FormControlMUI";

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

const partnerDefaultValues = {
  firstName: "",
  lastName: "",
  dni: "",
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
};

export const NewPartnerModal = ({
  handleClose,
  isOpen,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: partnerDefaultValues,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const onSubmit: SubmitHandler<IFormInput> = async (partner) => {
    try {
      const docRef = await setDoc(doc(db, "partners", partner.dni), partner);
      setShowSuccessMessage(true);
      reset();
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
              <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
                Guardar
              </Button>
            </Box>
          }
        </form>
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            El socio ha sido guardado exitosamente!
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};
