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
          <h1>LabZap</h1>
        </All.MainHeader>
        
        <All.MainCenter>
          <Messaging/>
        </All.MainCenter>
        
        <FooterComponent/>
      </All.Main>
    </div>
  );
}

export default App;