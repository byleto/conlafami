import { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  BottomNavigation,
  CssBaseline,
} from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <BottomNavigation
      sx={{
        background: "#1665C0",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "white",
        textAlign: "center",
      }}
    >
      <CssBaseline />

      <Container sx={{ padding: "16px" }} maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              CONLAFAMI - Cooperativa Familiar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary" variant="subtitle1">
              {`${new Date().getFullYear()} | Sobre nosotros | Servicios `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* </Box> */}
    </BottomNavigation>
  );
};

export default Footer;
