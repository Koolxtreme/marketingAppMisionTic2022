import ProductsCardForm from "./FormComponents/ProductsCardForm";
import UsersCardForm from "./FormComponents/UsersCardForm"

function OptionsForm({ isUser, data }) {
  if(isUser) return <UsersCardForm data={data}/>
  return <ProductsCardForm data={data}/>
}

export default OptionsForm;
