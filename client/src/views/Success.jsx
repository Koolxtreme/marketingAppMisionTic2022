import { Link } from "react-router-dom"

function Success() {
  return (
    <section className="flex h-[50vh] items-center justify-center">
        
        <div className="w-3/4 grid gap-8 p-4 bg-medium-purple-400 dark:bg-pomegranate-700 text-center">
        <h2>Operacion realizada con exito</h2>
        <Link to="/" className="text-white">Ir al inicio</Link>
        </div>

    </section>
  )
}

export default Success