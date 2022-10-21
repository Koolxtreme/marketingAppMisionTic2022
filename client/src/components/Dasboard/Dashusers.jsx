import OptionsList from "./dashboardcomp/OptionsList"

const prueba = [
  {
    name: "paolo",
    email: "pololito@gmail.pl",
    pass : "perezosquier"
  },
  {
    name: "Panquesito",
    email: "poquesi@gmail.pl",
    pass : "meToco"
  }
]

function Dashusers() {
  return (
    <div>
      <OptionsList isUser={true} data={prueba}/>      
    </div>
  )
}

export default Dashusers