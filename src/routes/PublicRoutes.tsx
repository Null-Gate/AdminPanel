import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Wrapper from "../utils/Wrapper";
import LandingPage from "../Pages/Landing/LandingPage";

const Login = lazy(() =>
  import("../Pages/Landing/Login").catch((error) => {
    console.error("Failed to load the Login page", error);
    return { default: () => <div>Error loading the page</div> };
  })
);

const WithWrapper = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

const PublicRoutes = [
  {
    path: "/",
    element: <WithWrapper />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default PublicRoutes;
