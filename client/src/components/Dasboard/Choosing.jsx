import Optioncard from "./dashboardcomp/Optioncard";
import { Outlet } from "react-router-dom";

function Choosing() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 place-content-center px-2 mb-8">
        <Optioncard donde="/dashboard/users" type={true}>
          Administrar Usuarios
        </Optioncard>
        <Optioncard donde="/dashboard/products">
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
