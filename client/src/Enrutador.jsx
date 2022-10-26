import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import Login from "./views/Login";
import About from "./views/About";
import Registration from "./views/Registration";
import Forgot from "./views/Forgot";
import PageNotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import Dashusers from "./components/Dasboard/Dashusers";
import Dashproducts from "./components/Dasboard/Dashproducts";
import Success from "./views/Success";
import TopProducts from "./views/TopProducts";

function Enrutador() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/bestProducts" element={<TopProducts/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="/forgot" element={<Forgot />}></Route>
      <Route path="/secretdashboard" element={<Dashboard />}>
        <Route path="users" element={<Dashusers />}></Route>
        <Route path="products" element={<Dashproducts />}></Route>
      </Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Enrutador;
