import TextField from "./FormComponents/TextField";
import Button from "./FormComponents/Button";
import FormContainer from "./FormComponents/FormContainer";
import FormTittle from "./FormComponents/FormTittle";
import FormLink from "./FormComponents/FormLink";
import {useState} from "react"

function LogIn() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const collectData = () => {
    console.log(userName, passWord)
  }
  return (
    <FormContainer>
      <FormTittle titulo="Iniciar Sesión"/>
      <form action="#" className="grid gap-4 place-content-center">
        <TextField holder="Nombre de usuario" pass={false} />
        <TextField holder="Contraseña" pass={true} />
        <div className="mx-auto">
          <Button
            description="Iniciar Sesión"
            accion={() => collectData}
          />
        </div>
      </form>
      <div className="text-xs grid gap-2">
        <FormLink Donde="/register" Contenido="¿No tiene una cuenta?" Nombre="Registrarse" />
        <FormLink Donde="/forgot" Contenido="¿Olvido su contraseña?" Nombre="Recuperar"/>
      </div>
    </FormContainer>
  );
}

export default LogIn;
