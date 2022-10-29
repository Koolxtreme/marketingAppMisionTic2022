import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailedDesc from "../components/Details/DetailedDesc";
import DetailedImg from "../components/Details/DetailedImg";
import Recomendations from "../components/Details/Recomendations";

function ProductDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/API/products/${id}`)
      .then((res) => {
        if(res.ok){
          return res.json()
        }else{
          window.location.assign("/404")
        }
      })
      .then((res) => setData(res))
      .catch((err) => console.log(err));

      window.scrollTo({top: 0, behavior: 'smooth'})
  }, []);

  return (
    <section className="p-4 md:p-8 grid md:grid-cols-3 place-content-center gap-4">
      <DetailedImg recurso={data.imgsrc} nombre={data.name} rate={data.rate} urate={data.avgRate}/>
      <DetailedDesc nombre={data.name} descripcion={data.description} amazon={data.mainsrc}/>
      <Recomendations id={id} />
    </section>
  );
}

export default ProductDetail;
