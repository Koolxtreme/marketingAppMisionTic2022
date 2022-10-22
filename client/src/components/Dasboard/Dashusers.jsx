import { useState, useEffect } from "react";

import OptionsList from "./dashboardcomp/OptionsList";

function Dashusers() {
  const [data, setData] = useState([]);

  const refrescarUsuarios = ()=>{
    fetch("/API/users")
    .then((res) => res.json())
    .then((datos) => setData(datos))
    .catch((err) => "nada");
  }

  useEffect(() => {
    refrescarUsuarios();
  }, []);

  return (
    <div>
      <OptionsList isUser={true} data={data} />
    </div>
  );
}

export default Dashusers;
