import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <Box>
      <RouterProvider router={router} />
      <Header />
      <Footer />
    </Box>
  );
}

export default App;
