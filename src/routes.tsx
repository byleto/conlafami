import {
  createBrowserRouter
} from "react-router-dom";
import { AccountListPage } from "./pages/AccountsListPage";
import { MovementsListPage } from "./pages/MovementsListPage";
import { PartnersListPage } from "./pages/PartnersListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PartnersListPage />,
  },
  {
    path: "accounts",
    element: <AccountListPage />,
  },
  {
    path: "movements",
    element: <MovementsListPage />,
  },
  {
    path: "partners",
    element: <PartnersListPage />,
  },
]);