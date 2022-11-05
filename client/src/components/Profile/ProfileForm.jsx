import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function ProfileForm() {
  const { profile, obtainProfile } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);

  const cambiandoUsername = (e) => {
    setUsername(e.target.value);
  };
  const cambiandoEmail = (e) => {
    setEmail(e.target.value);
  };
  const cambiandoContra = (e) => {
    setPassword(e.target.value);
  };

  const edicion = () =>
  {
    setIsDisabled(!isDisabled);
  }

  const edicionCompletada = async () => {
    const newData = JSON.stringify({
      username,
      email,
      password,
    });
    await fetch(`/API/users/${profile._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newData,
    }).then((res) => (res ? edicion() : alert("Algo salio mal")))
    .then(res => obtainProfile(profile._id));
  };

  return (
    <div className="bg-white col-span-2 p-8 rounded-md">
      <div className="flex justify-center items-center mb-4">
        {isDisabled ? (
          <Button startIcon={<AiFillEdit />} onClick={edicion}>Editar</Button>
        ) : (
          <Button startIcon={<AiFillSave />} onClick={edicionCompletada}>Guardar</Button>
        )}
      </div>
      <form className="grid gap-4 place-content-center">
        <TextField
          label="Nombre de usuario"
          value={username}
          disabled={isDisabled}
          onChange={cambiandoUsername}
        ></TextField>
        <TextField
          label="Correo Electronico"
          value={email}
          disabled={isDisabled}
          onChange={cambiandoEmail}
        ></TextField>
        <TextField
          label="Contraseña"
          type={isDisabled ? "password" : "text"}
          value={password}
          disabled={isDisabled}
          onChange={cambiandoContra}
        ></TextField>
      </form>
    </div>
  );
}

export default ProfileForm;
