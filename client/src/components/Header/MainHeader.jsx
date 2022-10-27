import MainNavigation from './Navigation/MainNavigation'

function MainHeader() {
  return (
    <header className='flex justify-between h-[7vh] items-center bg-medium-purple-300 dark:bg-pomegranate-700 sticky top-0 mb-2 z-50'>
        <div>Titulo</div>
        <MainNavigation />
    </header>
  )
}

export default MainHeader