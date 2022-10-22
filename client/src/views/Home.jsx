import {useState , useEffect} from "react"
import MainProduct from "../components/ProductCards/MainProduct";
import BestProducts from "../components/ProductCards/BestProducts";

function Home() {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetch("/API/mainproducts")
    .then(result => result.json())
    .then(datos => setData(datos))
  },[])

  return (
    <main className="grid gap-8 md:grid-cols-3 place-content-center place-items-center  mb-8">
      {
        data.length > 0 ? <MainProduct imgsrc={data[0].imgsrc} name={data[0].name} price={data[0].price} rate={data[0].rate} avgRate={data[0].avgRate} description={data[0].description} id={data[0]._id}/> : <></>
      }
      <BestProducts productos={data}/>
    </main>
  )
}

export default Home