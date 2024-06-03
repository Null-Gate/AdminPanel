// Import necessary components and hooks
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../Pages/Dashboard/Layout/DashboardLayout";
import Wrapper from "../utils/Wrapper";
import Info from "../Pages/Dashboard/Info";
import Pending from "../Pages/Dashboard/List/Pending";
import Draft from "../Pages/Dashboard/List/Draft";
import Account from "../Pages/Dashboard/Dashboard/Account";
import Dashboard from "../Pages/Dashboard/Dashboard";
import List from "../Pages/Dashboard/List";
import Chat from "../Pages/Dashboard/Chat";
import Notification from "../Pages/Dashboard/Notification";

const WithDashboardLayout = () => {
  return (
    <DashboardLayout>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </DashboardLayout>
  );
};

const PrivateRoutes = [
  {
    path: "/",
    element: <WithDashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashboard/info",
        element: <Info />,
      },
      {
        path: "dashboard/account",
        element: <Account />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "list/pending",
        element: <Pending />,
      },
      {
        path: "list/draft",
        element: <Draft />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />, // Catch-all redirects to '/dashboard'
  },
];

export default PrivateRoutes;
