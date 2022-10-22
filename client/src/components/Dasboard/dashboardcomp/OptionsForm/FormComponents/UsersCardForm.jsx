import { useState } from "react";

function UsersCardForm({ data }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const habilitarEdicion = () => {
    setIsDisabled(!isDisabled);
  };

  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);

  const cambiandoUsername = (e) => {
    setUsername(e.target.value);
  };
  const cambiandoEmail = (e) => {
    setEmail(e.target.value);
  };
  const cambiandoContra = (e) => {
    setPassword(e.target.value);
  };

  const detenerEjecucion = (e) => {
    e.preventDefault();
  };

  const edicionCompletada = async () => {
    const newData = JSON.stringify({
      username,
      email,
      password,
    });
    await fetch(`/API/users/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) => (res ? habilitarEdicion() : alert("Algo salio mal")));
  };

  return (
    <form
      onSubmit={detenerEjecucion}
      className="grid rounded-md gap-4 bg-white p-4"
    >
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={cambiandoUsername}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={cambiandoEmail}
          className="bg-white border-2 border-robin-s-egg-blue-300"
          disabled={isDisabled}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={cambiandoContra}
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
          <button
            className="bg-green-300 h-10 w-20 rounded-md"
            onClick={edicionCompletada}
          >
            &#10003;
          </button>
        )}
        <button className="p-2 rounded-md bg-red-400 hover:bg-red-500 transition">
          Elminar
        </button>
      </div>
    </form>
  );
}

export default UsersCardForm;
