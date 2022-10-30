import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

function SmallNav() {
  const [navbar, setNavbar] = useState(false);
  const { profile } = useContext(UserContext);

  return (
    <div>
      <div>
        <button
          className={`p-2 text-black  rounded-md outline-none focus:border-gray-400 focus:border`}
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <nav
        className={`absolute z-10 p-4 bg-biloba-flower w-1/2 h-40 transition-all top-12 bg-medium-purple-300/95 dark:bg-pomegranate-700/95 ${
          navbar ? "right-0" : "right-full"
        }`}
      >
        <ul className="flex flex-col text-black dark:text-white items-center justify-evenly h-full w-full">
          <li>
            <Link
              to="/"
              className=" hover:bg-orange-300 rounded-md py-1.5 px-2"
              onClick={() => setNavbar(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className=" hover:bg-orange-300 rounded-md py-1.5 px-2"
              onClick={() => setNavbar(false)}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/bestProducts"
              className="hover:bg-orange-300 rounded-md py-1.5 px-2"
              onClick={() => setNavbar(false)}
            >
              Top 20
            </Link>
          </li>
          {!profile.logged ? (
            <li>
              <Link
                to="/login"
                className="hover:bg-orange-300 rounded-md py-1.5 px-2"
                onClick={() => setNavbar(false)}
              >
                Iniciar
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/profile"
                className="hover:bg-orange-300 rounded-md py-1.5 px-2"
                onClick={() => setNavbar(false)}
              >
                {profile.username}
              </Link>
            </li>
          )}
          {!profile.logged ? (
            <li>
              <Link
                to="/register"
                className="hover:bg-orange-300 rounded-md py-1.5 px-2"
                onClick={() => setNavbar(false)}
              >
                Registrarse
              </Link>
            </li>
          ) : (
            <li>
              <p
                className="hover:bg-orange-300 rounded-md py-1.5 px-2"
                onClick={() => setNavbar(false)}
              >
                Cerrar sesión
              </p>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default SmallNav;
