import { useEffect, useState } from "react";
import DetailContainer from "./DetailContainer";
import ProductSlice from "./ProductSlice";

function Recomendations({id}) {
  const [data, setData] = useState([])


  const refreshData = () => {
    fetch("/API/bestProducts")
    .then(res => res.json())
    .then(datos => setData(datos))
    .catch(err => "nada")
  }
  useEffect(() =>{
    refreshData()
  }, []);


  return (
    <DetailContainer>
      <div className="grid gap-4 md:overflow-scroll lg:max-h-96" onClick={()=> refreshData()}> {data.map((producto)=>{
        if(producto._id != id){
          return <ProductSlice imagen={producto.imgsrc} nombre={producto.name} ratio={producto.rate} id={producto._id}/>
        }
      })} </div>
    </DetailContainer>
  );
}

export default Recomendations;
