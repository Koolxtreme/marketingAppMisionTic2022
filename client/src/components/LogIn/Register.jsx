import TextField from "./FormComponents/TextField";
import Button from "./FormComponents/Button";
import FormContainer from "./FormComponents/FormContainer";
import FormTittle from "./FormComponents/FormTittle";
import FormLink from "./FormComponents/FormLink";
import EmailField from "./FormComponents/EmailField";


function Register() {
  return (
    <FormContainer>
<FormTittle titulo="Registrarse"/>
      <form action="#" className="grid gap-4 place-content-center">
        <TextField holder="Nombre de usuario" pass={false} />
        <EmailField holder="Correo Electronico"/>
        <TextField holder="Contraseña" pass={true} />
        <TextField holder="Confirmar Contraseña" pass={true} />
        <div className="mx-auto">
          <Button
            description="Registrarse"
            accion={() => console.log("holi")}
          />
        </div>
      </form>
      <div className="text-xs grid gap-2">
      <FormLink Donde="/login" Contenido="¿Ya tiene una cuenta?" Nombre="Iniciar Sesión" />
      </div>
    </FormContainer>
  )
}

export default Register