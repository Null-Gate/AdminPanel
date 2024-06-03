/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { getFromCookie } from "../utils/getToken";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  const routes = useMemo(() => {
    const isAuth = getFromCookie("token");
    return isAuth ? PrivateRoutes : PublicRoutes;
  }, [getFromCookie("token")]);

  // console.log(PrivateRoutes);

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Routes;
