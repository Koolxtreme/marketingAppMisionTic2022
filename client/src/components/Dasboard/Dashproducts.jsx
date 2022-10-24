import { useState, useEffect } from "react";

import OptionsList from "./dashboardcomp/OptionsList"

function Dashproducts() {

  const [data, setData] = useState([]);

  const refrescarProductos = ()=>{
    fetch("/API/products")
    .then((res) => res.json())
    .then((datos) => setData(datos))
    .catch((err) => "nada");
  }

  useEffect(() => {
    refrescarProductos();
  }, []);

  return (
    <div>
      <OptionsList isUser={false} data={data}/>
    </div>
  )
}

export default Dashproducts