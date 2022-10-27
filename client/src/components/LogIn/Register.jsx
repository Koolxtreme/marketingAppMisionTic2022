import { useState } from "react";
import TextField from "./FormComponents/TextField";
import Button from "./FormComponents/Button";
import FormContainer from "./FormComponents/FormContainer";
import FormTittle from "./FormComponents/FormTittle";
import FormLink from "./FormComponents/FormLink";
import EmailField from "./FormComponents/EmailField";

function Register() {
  const validarUsuario = async (e) => {
    e.preventDefault();
    const respuesta = document.getElementById("respuesta_registro");
    respuesta.innerHTML = "";

    if (e.target[2].value === e.target[3].value) {
      if(e.target[2].value.length > 0)
        {
          const nuevoUsuario = JSON.stringify({
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
          });
    
          await fetch("/API/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: nuevoUsuario,
          })
            .then(() => window.location.assign("success"))
            .catch((err) => respuesta.innerHTML = "El usuario o el correo se encuentra en uso");
        } else {
          respuesta.innerHTML = "La contraseña no puede estar vacía";
        }
    } else {
      respuesta.innerHTML = "Las contraseñas no coinciden";
    }
  };

  return (
    <FormContainer>
      <FormTittle titulo="Registrarse" />
      <form
        onSubmit={validarUsuario}
        className="grid gap-4 place-content-center"
      >
        <TextField holder="Nombre de usuario" pass={false} />
        <EmailField holder="Correo Electronico" />
        <TextField holder="Contraseña" pass={true} />
        <TextField holder="Confirmar Contraseña" pass={true} />
        <div id="respuesta_registro" className="font-thin text-red-500 dark:text-robin-s-egg-blue-300 text-xs text-center"></div>
        <div className="mx-auto">
          <Button description="Registrarse" />
        </div>
      </form>
      <div className="text-xs grid gap-2">
        <FormLink
          Donde="/login"
          Contenido="¿Ya tiene una cuenta?"
          Nombre="Iniciar Sesión"
        />
      </div>
    </FormContainer>
  );
}

export default Register;
