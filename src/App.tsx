import "./App.css";
import Footer from "./components/Footer";
import { PartnersListPage } from "./pages/PartnersListPage";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <PartnersListPage />
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
