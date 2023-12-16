import { Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { PartnersListPage } from "./pages/PartnersListPage";
import { Header } from "./components/Header";
import { AccountListPage } from "./pages/AccountsListPage";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <AccountListPage />
      </Container>
      {/* <footer> */}
        <Footer />
      {/* </footer> */}
    </div>
  );
}

export default App;
