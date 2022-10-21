import MainHeader from './components/Header/MainHeader'
import Enrutador from './Enrutador';
import BackgroundPattern from "./views/BackgroundPattern";


function App() {
  return (
    <div>
      <BackgroundPattern />
      <MainHeader />
      <Enrutador />
    </div>
  );
}

export default App;