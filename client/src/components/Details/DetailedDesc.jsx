import DetailContainer from "./DetailContainer";

function DetailedDesc({descripcion, amazon, nombre}) {
  return (
    <DetailContainer>
      <div className="grid gap-4 place-items-center"> 
      <div>
        <h2 className="text-medium-purple-500 dark:text-pomegranate-600 font-extrabold">
          {nombre}
        </h2>
      </div>
        <div className="border-2 border-pomegranate-600 dark:border-robin-s-egg-blue-700 pointer-events-none">
          {descripcion}
        </div>
        <a href={amazon} target="_blank" rel="noopener noreferrer" className="py-2 px-4 bg-yellow-300 text-black">Ir a comprar</a>
      </div>
    </DetailContainer>
  );
}

export default DetailedDesc;
