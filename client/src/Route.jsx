import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MyAccountsPage from "./pages/AccountsPage";
import ExchangePage from "./components/ExchangePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <h2>Transaction Page.</h2>,
      },
      {
        path: "accounts",
        element: <MyAccountsPage />,
      },
      {
        path: "exchange",
        element: <ExchangePage />,
      },
    ],
  },
]);
