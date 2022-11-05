import MainHeader from './components/Header/MainHeader'
import SecondaryHeader from './components/SecondaryHeader';
import Enrutador from './Enrutador';
import BackgroundPattern from "./views/BackgroundPattern";


function App() {
  return (
    <div>
      <BackgroundPattern />
      <MainHeader />
      <SecondaryHeader/>
      <Enrutador />
    </div>
  );
}

export default App;