import { Header } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
