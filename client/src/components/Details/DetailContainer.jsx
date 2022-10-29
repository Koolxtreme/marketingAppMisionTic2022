function DetailContainer({ children }) {
  return (
    <div className="backdrop-blur-sm bg-royal-blue-700/25 dark:bg-pomegranate-700/25 p-2 rounded-md">
      <div className="w-full h-full bg-robin-s-egg-blue-200/90 dark:bg-royal-blue-800/90 dark:text-white rounded-sm p-4 grid gap-4 place-content-center">
        {children}
      </div>
    </div>
  );
}

export default DetailContainer;
