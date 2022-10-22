import { useState } from "react";

function ProductsCardForm({ data }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const habilitarEdicion = () => {
    setIsDisabled(!isDisabled);
  };

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [imgsrc, setImgsrc] = useState(data.imgsrc);
  const [mainsrc, setMainsrc] = useState(data.mainsrc);
  const [price, setPrice] = useState(data.price);
  const [rate, setRate] = useState(data.rate);

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

  const edicionCompletada = async() =>{
    const newData = JSON.stringify({
      name,
      description,
      imgsrc,
      mainsrc,
      price,
      rate
    });
    await fetch(`/API/products/${data._id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newData
    }).then(res => res ? habilitarEdicion() : alert("Algo salio mal"))
  };

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
          disabled={isDisabled}
        />
        <input
          type="text-area"
          placeholder="Descripción"
          value={description}
          onChange={changeDescription}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="text"
          placeholder="Enlace de la imagen"
          value={imgsrc}
          onChange={changeImage}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="text"
          placeholder="Enlace de amazon"
          value={mainsrc}
          onChange={changeMainsrc}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={changePrice}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="number"
          placeholder="Puntuación"
          value={rate}
          onChange={changeRate}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
      </div>
      <div className="flex justify-evenly place-content-center">
        {isDisabled ? (
          <a
            className="h-10 w-20 rounded-md bg-yellow-300 cursor-pointer flex justify-center items-center"
            onClick={habilitarEdicion}
          >
            Editar
          </a>
        ) : (
          <button className="bg-green-300 h-10 w-20 rounded-md" onClick={edicionCompletada}>
            &#10003;
          </button>
        )}
        <button className="h-10 w-20 bg-red-400 rounded-md">Elminar</button>
      </div>
    </form>
  );
}

export default ProductsCardForm;
