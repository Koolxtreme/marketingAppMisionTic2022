import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

function FullNav() {
  const { profile } = useContext(UserContext);

  return (
    <nav className="w-3/5 lg:w-2/5">
      <ul className="flex text-white justify-evenly">
        <li>
          <Link to="/" className="hover:text-robin-s-egg-blue-600 transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-robin-s-egg-blue-600 transition"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/bestProducts"
            className="hover:text-robin-s-egg-blue-600 transition"
          >
            Top 20
          </Link>
        </li>
        {!profile.logged ? (
          <li className="grid grid-flow-col gap-2">
            <Link
              to="/login"
              className="hover:text-robin-s-egg-blue-600 transition"
            >
              Iniciar
            </Link>
            |
            <Link
              to="/register"
              className="hover:text-robin-s-egg-blue-600 transition"
            >
              Registrarse
            </Link>
          </li>
        ) : (
          <li className="grid grid-flow-col gap-2">
            <Link
              to="/profile"
              className="hover:text-robin-s-egg-blue-600 transition"
            >
              {`${profile.username}`}
            </Link>
            |
            <p className="hover:text-robin-s-egg-blue-600 transition cursor-pointer">
              Cerrar Sesión
            </p>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default FullNav;
