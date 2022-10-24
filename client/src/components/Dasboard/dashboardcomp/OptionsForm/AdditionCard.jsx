import { useState } from "react";

function AdditionCard({ isUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgsrc, setImgsrc] = useState("");
  const [mainsrc, setMainsrc] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeImage = (e) => {
    setImgsrc(e.target.value);
  };

  const changeMainsrc = (e) => {
    setMainsrc(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeRate = (e) => {
    setRate(e.target.value);
  };

  const detenerEjecucion = (e) => {
    e.preventDefault();
  };

  const agregarNuevo = async () => {
    const newData = JSON.stringify({
      name,
      description,
      imgsrc,
      mainsrc,
      price,
      rate,
    });
    await fetch(`/API/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) => window.location.reload());
  };

  if (!isUser) {
    return (
      <form
        onSubmit={detenerEjecucion}
        className="grid gap-4 bg-white rounded-md p-4"
      >
        <div className="grid gap-2">
          <img src={imgsrc} className="h-60 w-60 mx-auto object-scale-down" />
          <input
            type="text"
            placeholder="Nombre del articulo"
            value={name}
            onChange={changeName}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
          <input
            type="text-area"
            placeholder="Descripción"
            value={description}
            onChange={changeDescription}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
          <input
            type="text"
            placeholder="Enlace de la imagen"
            value={imgsrc}
            onChange={changeImage}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
          <input
            type="text"
            placeholder="Enlace de amazon"
            value={mainsrc}
            onChange={changeMainsrc}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={changePrice}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
          <input
            type="number"
            placeholder="Puntuación"
            value={rate}
            onChange={changeRate}
            className="bg-white border-2 border-robin-s-egg-blue-300"
          />
        </div>
        <div className="flex place-content-center">
          <button
            onClick={agregarNuevo}
            className="h-10 w-20 bg-green-400 rounded-md"
          >
            Agregar
          </button>
        </div>
      </form>
    );
  }
}

export default AdditionCard;
