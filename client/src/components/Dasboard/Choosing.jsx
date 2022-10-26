import Optioncard from "./dashboardcomp/Optioncard";
import { Outlet } from "react-router-dom";

function Choosing() {
  return (
    <div>
      <div className="grid lg:w-[50vw] mx-auto grid-cols-2 gap-4 place-content-center px-2 mb-8">
        <Optioncard donde="users" type={true}>
          Administrar Usuarios
        </Optioncard>
        <Optioncard donde="products">
          Administrar Productos
        </Optioncard>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Choosing;
