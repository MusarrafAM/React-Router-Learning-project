import { Outlet } from "react-router-dom";
//! Outlet For Shared Layout

const SharedLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};
export default SharedLayout;
