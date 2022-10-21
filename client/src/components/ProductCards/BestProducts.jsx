import ProductCard from './ProductCard'

function BestProducts({productos}) {
  return (
    <div className='w-3/4 mx-auto mt-8 grid md:grid-flow-col md:grid-rows-2 md:auto-rows-[minmax(0,220px)] md:auto-cols-[minmax(0, 220px)] gap-4 mb-4 place-content-center'>
        {productos.map((producto, index) => {
          if (index !== 0 && index < 6) return (<ProductCard imgsrc={producto.imgsrc} name={producto.name} price={producto.price} rate={producto.rate} avgRate={producto.avgRate} description={producto.description} id={producto._id} key={producto._id}/>)
        })}
    </div>
  )
}

export default BestProducts