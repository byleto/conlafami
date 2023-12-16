import { Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { MovementsListPage } from "./pages/MovementsListPage";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <MovementsListPage />
      </Container>
      {/* <footer> */}
        <Footer />
      {/* </footer> */}
    </div>
  );
}

export default App;
