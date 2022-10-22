import { Link } from "react-router-dom";

function Optioncard({ children, donde, type }) {
  if (type)
    return (
      <Link to={donde}>
        <div
          className="p-2 md:min-w-[200px] lg:min-h-[100px] flex justify-center items-center bg-royal-blue-300
        hover:bg-royal-blue-400 dark:bg-royal-blue-700 dark:hover:bg-royal-blue-600 text-medium-purple-700 hover:text-medium-purple-300 dark:text-white font-bold text-sm md:text-lg transition rounded-md text-center"
        >
          <h3>{children}</h3>
        </div>
      </Link>
    );

  return (
    <Link to={donde}>
      <div
        className="p-2 md:min-w-[200px] lg:min-h-[100px] flex justify-center items-center bg-pomegranate-700 hover:bg-pomegranate-600
        text-pomegranate-200 hover:text-pomegranate-800 dark:bg-medium-purple-700 dark:hover:bg-medium-purple-600 dark:text-white font-bold text-sm md:text-lg transition rounded-md text-center"
      >
        <h3>{children}</h3>
      </div>
    </Link>
  );
}

export default Optioncard;
