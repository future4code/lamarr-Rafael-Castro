import './App.css';
import labeLogo from '../src/images/labenu-logo.jpg'
import { Messaging } from './components/Messaging/Messaging';
import { FooterComponent } from './components/Footer/FooterComponent'
import * as All from './style.js'


function App() {
  return (
    <div className="App">
      <All.Main>
        <All.MainHeader>
          <All.MainHeaderLogo backgroundImage={labeLogo}/>
          <h1>WhatsLab</h1>
        </All.MainHeader>
        
        <All.MainBody>
          <Messaging/>
        </All.MainBody>
        
        <FooterComponent/>
      </All.Main>
    </div>
  );
}

export default App;