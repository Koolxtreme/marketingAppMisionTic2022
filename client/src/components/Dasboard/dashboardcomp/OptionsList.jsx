import OptionsForm from "./OptionsForm/OptionsForm"

function OptionsList({isUser , data}) {
  return (
    <div className="p-2 grid md:grid-cols-3 gap-4">
      {data.map((item,index) => 
      <OptionsForm data={item} isUser={isUser} key={index}/>
      )}
    </div>
  )
}

export default OptionsList