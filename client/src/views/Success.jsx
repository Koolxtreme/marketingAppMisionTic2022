import { Link } from "react-router-dom"

function Success() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
        
        <div className="w-3/4 grid gap-8 p-4 bg-medium-purple-400 dark:bg-pomegranate-700 text-center">
        <h2>Operacion realizada con exito</h2>
        <Link to="/login" className="text-white">Ir a inicio de sesion</Link>
        </div>

    </div>
  )
}

export default Success