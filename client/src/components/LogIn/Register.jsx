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

    if (e.target[2].value === e.target[3].value) {
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
        .then((res) => alert("Usuario Registrado Exitosamente"))
        .then(() => window.location.assign("success"))
        .catch((err) => "nada");
    } else {
      alert("Las contraseñas no coinciden");
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
