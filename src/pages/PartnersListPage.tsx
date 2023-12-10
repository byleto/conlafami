import { Box, Button, Grid, Modal } from "@mui/material";
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
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../firebase.config";
import DataTable from "../components/UsersDataTable";
import { partner } from "../dataModel/partners";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { NewPartnerModal } from "./NewPartnersModal";

async function getPartners(db: Firestore) {
  const partnersCollection = collection(db, "partners");
  const partnerSnapshot = await getDocs(partnersCollection);
  const partnerList = partnerSnapshot.docs.map((doc) => doc.data());
  return partnerList;
}

export const PartnersListPage = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [partners, setPartners] = useState<DocumentData[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPartners(db);
      setPartners(data.map((user) => ({ ...user, id: user.dni })));
    };
    fetchData();
  }, []);

  return (
    <>
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
          <Typography color="text.primary">Socios</Typography>
        </Breadcrumbs>
        <Typography color="text.primary" variant="h4" gutterBottom>
          Lista de Socios
        </Typography>
        <Box>
          <Grid pb="16px" container justifyContent="flex-end">
            <Button
              onClick={handleOpen}
              variant="contained"
              endIcon={<PersonAddAlt1Icon />}
            >
              Nuevo
            </Button>
          </Grid>

          <DataTable rows={partners} hiddenColumns={partner.hiddenColumns} />
        </Box>
      </Container>
      {open && <NewPartnerModal handleClose={handleClose} isOpen={open} />}
    </>
  );
};
