import {Link} from "react-router-dom";
import Rating from '@mui/material/Rating';

function MainProduct({imgsrc, name, price, rate, avgRate, description, id}) {
  return (
      <div className="mx-auto w-11/12 min-w-[280px] max-w-[420px] bg-medium-purple-400 hover:bg-medium-purple-500 dark:bg-medium-purple-700 dark:hover:bg-medium-purple-600 dark:text-white rounded-md py-4 lg:pt-10 px-6 hover:scale-95 lg:max-h-[80vh]  transition">
        <Link to={`/products/${id}`}>
        <div className="flex flex-col items-center text-center justify-evenly h-[65vh]">
        <div className="w-2/3 lg:w-3/4">
          <img src={imgsrc} alt={name} className="w-full h-full object-scale-down"/>
        </div>
        <div>
          <div>
            <h3>{name}</h3>
            <h3>$ {price}</h3>
          </div>
          <div>
            <p>Calificación</p>
            <div><Rating value={rate} precision={0.5} readOnly /></div>
          </div>
          <div>
            <p>Calificación usuarios</p>
            <div><Rating value={avgRate} precision={0.5} readOnly /></div>
          </div>
        </div>
        <div className="text-justify">
          <p>{description}</p>
        </div>
        </div>
        </Link>
      </div>
  );
}

export default MainProduct;
