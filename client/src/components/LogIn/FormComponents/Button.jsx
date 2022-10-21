function Button({ description, accion }) {
  return (
    <button
      className="bg-medium-purple-200 dark:bg-royal-blue-800 dark:text-royal-blue-100 p-2 rounded-md hover:bg-medium-purple-600 dark:hover:bg-robin-s-egg-blue-800 transition text-sm text-black hover:text-white dark:hover:text-white"
      onClick={(e) => {
        e.preventDefault;
        accion();
      }}
    >
      {description}
    </button>
  );
}

export default Button;