import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
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
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../firebase.config";
import DataTable from "../components/DataTable";
import { partner } from "../dataModel/partners";
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
          <Typography color="text.primary">Socios</Typography>
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
              Socios
            </Typography>
            <Button
              onClick={handleOpen}
              variant="contained"
              endIcon={<PersonAddAlt1Icon />}
            >
              Nuevo
            </Button>
          </Box>

          <DataTable rows={partners} hiddenColumns={partner.hiddenColumns} />
        </Box>
      </Container>
      {open && <NewPartnerModal handleClose={handleClose} isOpen={open} />}
    </Box>
  );
};
