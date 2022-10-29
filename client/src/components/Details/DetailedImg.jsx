import DetailContainer from "./DetailContainer";
import Rating from "@mui/material/Rating";

function DetailedImg({ recurso, nombre, rate, urate }) {
  const calcProm = () => {
    try {
      return (
        (urate.reduce((a, b) => {
          a += b;
          return a;
        })) / urate.length
      );
    } catch (e) {
      ("nada");
    }
  };

  const promedio = calcProm();

  return (
    <DetailContainer>
      <div className="h-56 w-56 backdrop-brightness-75 dark:backdrop-brightness-200 p-2">
        <img src={recurso} alt={nombre} className="w-full h-full" />
      </div>
      <div className="grid text-center place-items-center">
        <p>Calificación de la página</p>
        <Rating value={0 + rate} precision={0.5} readOnly></Rating>
      </div>
      <div className="grid text-center place-items-center">
        <p>Calificación de los usuarios</p>
        <Rating value={0 + promedio} precision={0.5} readOnly></Rating>
      </div>
    </DetailContainer>
  );
}

export default DetailedImg;
