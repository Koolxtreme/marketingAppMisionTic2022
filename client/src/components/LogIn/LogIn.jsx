import TextField from "./FormComponents/TextField";
import Button from "./FormComponents/Button";
import FormContainer from "./FormComponents/FormContainer";
import FormTittle from "./FormComponents/FormTittle";
import FormLink from "./FormComponents/FormLink";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function LogIn() {
  const { obtainProfile } = useContext(UserContext);

  const collectData = async (e) => {
    const respuesta = document.getElementById("respuesta_login");
    respuesta.innerHTML = "";
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    const cuerpo = JSON.stringify({
      username,
      password,
    });

    await fetch("/API/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: cuerpo,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.resultado) {
          obtainProfile(res.id);
        } else {
          respuesta.innerHTML = "Usuario o contraseña incorrectas";
        }
      }).then(res =>  window.location.assign("success"));
  };
  return (
    <FormContainer>
      <FormTittle titulo="Iniciar Sesión" />
      <form
        onSubmit={(e) => collectData(e)}
        className="grid gap-4 place-content-center"
      >
        <TextField holder="Nombre de usuario" pass={false} />
        <TextField holder="Contraseña" pass={true} />
        <div
          id="respuesta_login"
          className="font-thin text-red-500 dark:text-robin-s-egg-blue-300 text-xs text-center"
        ></div>
        <div className="mx-auto">
          <Button description="Iniciar Sesión" />
        </div>
      </form>
      <div className="text-xs grid gap-2">
        <FormLink
          Donde="/register"
          Contenido="¿No tiene una cuenta?"
          Nombre="Registrarse"
        />
        <FormLink
          Donde="/forgot"
          Contenido="¿Olvido su contraseña?"
          Nombre="Recuperar"
        />
      </div>
    </FormContainer>
  );
}

export default LogIn;
