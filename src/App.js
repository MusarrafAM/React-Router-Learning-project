import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route
            path="Products/:ProductsId"
            element={<SingleProduct />}
          ></Route>
          <Route path="Login" element={<Login setUser={setUser} />}></Route>  {/* Just Passing the function. */}
          <Route path="Dashboard" element={<Dashboard user={user} />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
