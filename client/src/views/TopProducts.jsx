import { useState, useEffect } from 'react';
import ProductsGallery from '../components/ProductCards/ProductsGallery'

function TopProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/API/bestproducts")
      .then((res) => res.json())
      .then((datos) => setData(datos));
  }, []);
  return (
    <section>
      <div>SearchBar</div>
      <div>
        <ProductsGallery data={data} />
      </div>
    </section>
  );
}

export default TopProducts;
