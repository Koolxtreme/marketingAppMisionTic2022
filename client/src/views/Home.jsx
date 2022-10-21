import { Products } from "../data/best-products.json";
import MainProduct from "../components/ProductCards/MainProduct";
import BestProducts from "../components/ProductCards/BestProducts";

function Home() {
  return (
    <main className="grid md:grid-cols-2">
      <MainProduct imgsrc={Products[0].imgsrc} name={Products[0].name} price={Products[0].price} rate={Products[0].rate} avgRate={Products[0].avgRate} description={Products[0].description} id={Products[0]._id}/>
      <BestProducts productos={Products}/>
    </main>
  )
}

export default Home