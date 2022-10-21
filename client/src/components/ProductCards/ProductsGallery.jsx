import ProductCard from "./ProductCard";
import { Products } from "../../data/best-products.json";

function ProductsGallery() {
  return (
    <div className="w-full p-4 mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
      {Products.map((producto, index) => (
        <ProductCard
          imgsrc={producto.imgsrc}
          name={producto.name}
          price={producto.price}
          rate={producto.rate}
          avgRate={producto.avgRate}
          description={producto.description}
          id={producto.id}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProductsGallery;
