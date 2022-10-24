import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductsGallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/API/bestproducts")
      .then((res) => res.json())
      .then((datos) => setData(datos));
  }, []);

  return (
    <div className="w-full p-4 mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
      {data.map((producto, index) => (
        <ProductCard
          imgsrc={producto.imgsrc}
          name={producto.name}
          price={producto.price}
          rate={producto.rate}
          avgRate={producto.avgRate}
          description={producto.description}
          id={producto._id}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProductsGallery;
