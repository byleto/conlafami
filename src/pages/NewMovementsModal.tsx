import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { uniqueId } from "lodash";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { firebaseConfig } from "../../firebase.config";
import { FormControlMui } from "../components/FormControlMUI";
import { useGetAccounts } from "../hooks/useGetAccounts";

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

interface IFormMovementsInput {
  id: string;
  accountId: string;
  parnerId: string;
  accountNumber: string;
  quantity: number;
  type: string;
  date: string;
  description: string;
}

const movementsDefaultValues = {
  id: "",
  accountId: "",
  parnerId: "",
  accountNumber: "",
  quantity: 0,
  type: "",
  date: "",
  description: "",
};

export const NewMovementModal = ({
  handleClose,
  isOpen,
}: {
  handleClose: () => void;
  isOpen: boolean;
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: movementsDefaultValues,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const accounts = useGetAccounts(db).map((account) => ({
    id: account.accountNumber,
    name: account.partnerName,
  }));

  const onSubmit: SubmitHandler<IFormMovementsInput> = async (movement) => {
    try {
      const docRef = await setDoc(doc(db, "movements", uniqueId()), movement);
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
          <AddBoxIcon
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
            Nuevo Movimiento
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="accountNumber"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="partner-label">Socio</InputLabel>
                <Select
                  {...field}
                  labelId="partner-label"
                  id="partner-select"
                  label="Socio:"
                >
                  {accounts.map((account) => {
                    return (
                      <MenuItem
                        key={uniqueId()}
                        value={account.id}
                      >{`${account.id} - ${account.name}`}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="accountId"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="dni"
                helperText="Ingrese la cantidad de la transacción"
                label="Cantidad:"
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="date"
                helperText="Ingrese la Fecha de la transacción dd/MM/YYYY"
                label="Fecha de transacción"
              />
            )}
          />
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="type-label">Tipo de transacción</InputLabel>
                <Select
                  {...field}
                  labelId="type-label"
                  id="type-select"
                  label="Tipo:"
                >
                  <MenuItem value={"retiro"}>Retiro</MenuItem>
                  <MenuItem value={"deposito"}>Deposito</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <FormControlMui
                field={field}
                inputName="description"
                label="Descripcion"
                helperText="Descripcion de la transacción"
              />
            )}
          />
          <Box pt="16px">
            <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
              Guardar
            </Button>
          </Box>
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
            El movimiento ha sido guardado exitosamente!
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};
