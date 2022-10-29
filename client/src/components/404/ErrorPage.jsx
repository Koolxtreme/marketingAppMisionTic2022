import { useNavigate } from "react-router-dom";
import BgWhite from "./BgWhite";
import Death from "./Death"

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <BgWhite />
      <div className="relative grid h-[70vh] place-items-center px-10">

      <div className="min-w-[160px] max-w-sm"><Death /></div>

        <div className="relative bg-gray-700 h-[35vh] md:h-[38vh] md:w-[250px] rounded-t-full flex justify-center items-center p-4 min-w-[200px]">
          <div className="h-full rounded-t-full bg-gray-600 flex flex-col justify-evenly items-center p-4">
            <h2 className="text-gray-400 text-xl">404 ...</h2>
            <h2 className="text-gray-500 text-center text-2xl">
              Pagina No Encontrada
            </h2>
            <button className="bg-gray-500 border-gray-700 border-4 p-1 rounded-md" onClick={() => navigate("/")}>Regresar</button>
          </div>
          <div className="absolute left-0 -bottom-2 bg-green-600 w-full h-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
