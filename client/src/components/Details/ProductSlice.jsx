import { Rating } from "@mui/material";

function ProductSlice({ imagen, nombre, ratio, id }) {
    
  return (
    <a href={`/product/${id}`}>
      <div className=" backdrop-brightness-90 hover:backdrop-brightness-75 dark:backdrop-brightness-150 dark:hover:backdrop-brightness-200 rounded-md p-4 grid grid-cols-3 md:grid-cols-4 place-items-center">
        <div className="h-16 w-16">
          <img className="h-full w-full" src={imagen} alt={nombre} />
        </div>
        <div className="col-span-2 md:col-span-3 grid gap-2 ">
          <h3 className="text-center">{nombre}</h3>
          <div className="flex justify-center">
            <Rating value={0 + ratio} precision={0.5} readOnly />
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductSlice;
