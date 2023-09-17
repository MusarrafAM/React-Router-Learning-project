import { NavLink } from "react-router-dom";
// Use NavLink instead of Link only for navbar because it shows which is active
// For this we need to create a .active and style that element in css

function StyledNavbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default StyledNavbar;
