import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { initializeApp } from "firebase/app";
import {
  DocumentData,
  Firestore,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { uniqueId } from 'lodash';
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../firebase.config";
import DataTable from "../components/DataTable";
import { accountModel } from "../dataModel/accountModel";

async function getAccounts(db: Firestore) {
  const accountsCollection = collection(db, "accounts");
  const accountSnapshot = await getDocs(accountsCollection);
  return accountSnapshot.docs.map((doc) => doc.data());
}

export const AccountListPage = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [accounts, setAccounts] = useState<DocumentData[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAccounts(db);
      setAccounts(data.map((account) => ({ ...account, id: uniqueId() })));
    };
    fetchData();
  }, []);

  return (
    <Box pt="32px">
      <CssBaseline />
      <Container sx={{ width: "100%" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Cuentas</Typography>
        </Breadcrumbs>

        <Box>
          <Box
            sx={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography color="#1976d2" variant="h6" gutterBottom>
              Cuentas
            </Typography>
            <Button
              onClick={handleOpen}
              variant="contained"
              endIcon={<AddBoxIcon />}
            >
              Nueva
            </Button>
          </Box>

          <DataTable rows={accounts} dataModel={accountModel} />
        </Box>
      </Container>
    </Box>
  );
};
