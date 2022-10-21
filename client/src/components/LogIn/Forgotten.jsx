import Button from "./FormComponents/Button";
import FormContainer from "./FormComponents/FormContainer";
import FormTittle from "./FormComponents/FormTittle";
import FormLink from "./FormComponents/FormLink";
import EmailField from "./FormComponents/EmailField";

function Forgotten() {
  return (
    <FormContainer>
    <FormTittle titulo="Iniciar Sesión"/>
    <form action="#" className="grid gap-4 place-content-center">
        <EmailField holder="Correo electronico registrado"/>
      <div className="mx-auto">
        <Button
          description="Iniciar Sesión"
          accion={() => console.log("holi")}
        />
      </div>
    </form>
    <div className="text-xs grid gap-2">
      <FormLink Donde="/login" Contenido="Volver a Iniciar" Nombre="Iniciar Sesión" />
    </div>
  </FormContainer>
  )
}

export default Forgotten