import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";

export const LoginPage = () => {
  return (
    <Container
      sx={{ border: "solid", borderRadius: "10px", p: "16px", width: "500px" }}
    >
      <Stack>
        <Box sx={{ display: "inline-flex" }}>
          <Typography color="primary" variant="h6">
            <LoginIcon fontSize="large" color="primary"></LoginIcon>
            Iniciar sesión
          </Typography>
        </Box>
        <FormControl>
          <InputLabel required variant="filled" htmlFor="username">
            Email
          </InputLabel>
          <Input id="username" aria-describedby={"username-helper-text"} />
          <FormHelperText id={"username-helper-text"}>
            Ingrese su email
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel required variant="filled" htmlFor="password">
            Contraseña
          </InputLabel>
          <Input
            id="password"
            type="password"
            aria-describedby={"password-helper-text"}
          />
          <FormHelperText id={"password-helper-text"}>
            Ingrese su contraseña
          </FormHelperText>
        </FormControl>
        <Box pt="16px">
          <Button color="primary" variant="contained">
            Entrar
            <VpnKeyIcon />
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
