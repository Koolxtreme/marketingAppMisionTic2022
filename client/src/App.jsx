import MainHeader from './components/Header/MainHeader'
import ThemeToggle from './components/ThemeToggle';
import Enrutador from './Enrutador';
import BackgroundPattern from "./views/BackgroundPattern";


function App() {
  return (
    <div>
      <BackgroundPattern />
      <MainHeader />
      <ThemeToggle/>
      <Enrutador />
    </div>
  );
}

export default App;