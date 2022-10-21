import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function ProductCard({ imgsrc, name, price, rate, id }) {
  return (
    <div className="bg-royal-blue-300 hover:bg-royal-blue-400 dark:bg-royal-blue-700 dark:text-white dark:hover:bg-royal-blue-600 p-2 min-w-[120px] max-w-[240px] hover:scale-105 transition rounded-md">
      <Link to={`/products/${id}`}>
        <div>
          <img src={imgsrc} alt={name} className="p-4" />
          <div className="text-center">
            <h4>{name}</h4>
            <p>$  {price}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Calificación</p>
            <Rating value={rate} precision={0.5} readOnly></Rating>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
