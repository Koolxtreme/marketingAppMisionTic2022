import { Link } from "react-router-dom";

function FormLink({Donde, Nombre, Contenido}) {
  return (
    <div className="grid place-content-center">
      <span>{Contenido}</span>
      <Link
        className="text-center text-robin-s-egg-blue-600 hover:text-robin-s-egg-blue-200 transition"
        to={Donde}
      >
        {Nombre}
      </Link>
    </div>
  );
}

export default FormLink;
