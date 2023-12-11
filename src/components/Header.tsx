import { AppBar, Link, Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledLink = styled.button`
  padding: "10px";
  color: "white";
`;

export const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography sx={{ paddingRight: "16px" }}>LOGO </Typography>
          CONLAFAMI
          <Box p="8px">
            <Link
              sx={{ paddingRight: "8px", color: "white" }}
              underline="hover"
              variant="body2"
              href="/"
            >
              Inicio
            </Link>
            <Link
              sx={{ paddingRight: "8px", color: "white" }}
              underline="hover"
              variant="body2"
              href="/"
            >
              Socios
            </Link>
            <Link
              sx={{ paddingRight: "8px", color: "white" }}
              underline="hover"
              variant="body2"
              href="/"
            >
              Cuentas
            </Link>
            <Link
              sx={{ paddingRight: "8px", color: "white" }}
              underline="hover"
              variant="body2"
              href="/"
            >
              Transacciones
            </Link>
            <Link
              sx={{ paddingRight: "8px", color: "white" }}
              underline="hover"
              variant="body2"
              href="/"
            >
              Reportes
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
