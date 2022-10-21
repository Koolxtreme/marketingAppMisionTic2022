import {useState} from "react"

function UsersCardForm({data}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const habilitarEdicion = () => {
    setIsDisabled(!isDisabled);
  };

  const [nombre, setNombre] = useState(data.name);
  const [correo, setCorreo] = useState(data.email);
  const [contraseña, setContraseña] = useState(data.pass);

  const cambiandoNombre = (e) => {
    setNombre(e.target.value);
  };
  const cambiandoCorreo = (e) => {
    setCorreo(e.target.value);
  };
  const cambiandoContra = (e) => {
    setContraseña(e.target.value);
  };

  return (
    <form className="flex justify-evenly rounded-md bg-white p-4">
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={nombre}
          onChange={cambiandoNombre}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          value={correo}
          onChange={cambiandoCorreo}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={cambiandoContra}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
      </div>
      <div className="grid gap-4 place-content-center">
        <a
          className={`p-2 rounded-md ${isDisabled ? "bg-yellow-300" : "bg-green-300"} text-center transition cursor-pointer`}
          onClick={habilitarEdicion}
        >
          {isDisabled ? "Editar" : <>&#10003;</>}
        </a>
        <button className="p-2 rounded-md bg-red-400 hover:bg-red-500 transition">Elminar</button>
      </div>
    </form>
  );
}

export default UsersCardForm;
