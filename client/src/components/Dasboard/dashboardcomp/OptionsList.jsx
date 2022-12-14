import OptionsForm from "./OptionsForm/OptionsForm"
import AdditionCard from "./OptionsForm/AdditionCard"

function OptionsList({isUser , data}) {
  return (
    <div className="p-6 grid lg:grid-cols-4 gap-4 lg:gap-8">
      <AdditionCard isUser={isUser}/>
      {data.map((item,index) => 
      <OptionsForm data={item} isUser={isUser} key={index}/>
      )}
    </div>
  )
}

export default OptionsList