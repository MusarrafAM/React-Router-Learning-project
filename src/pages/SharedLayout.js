import { Outlet } from "react-router-dom";
//! Outlet For Shared Layout
// import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
