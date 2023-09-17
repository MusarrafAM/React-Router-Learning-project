import { Link, Outlet } from "react-router-dom";
//! Outlet For Shared Layout
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
