import { Outlet } from "react-router-dom";
//! Outlet For Shared Layout

const SharedLayout = () => {
  return (
    <section className="section">
      <h2>Products</h2>
      <Outlet />
    </section>
  );
};
export default SharedLayout;
