import ProductCard from "./ProductCard";

function ProductsGallery({data}) {


  return (
    <div className="w-full p-4 mx-auto grid place-content-center md:grid-cols-5 gap-4 mb-4">
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
