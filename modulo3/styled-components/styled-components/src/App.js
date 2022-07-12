import './App.css';
import labeLogo from '../src/images/labenu-logo.jpg'
import { Button } from './components/Button/Button'
import { FooterComponent } from './components/Footer/FooterComponent'
import {
  Main, 
  MainCenter, 
  MainHeader, 
  MainHeaderLogo,
  InputStyle
} from './style.js'


function App() {
  return (
    <div className="App">
      <Main>
        <MainHeader>
          <MainHeaderLogo backgroundImage={labeLogo}/>
          <h1>LabZap</h1>
        </MainHeader>
        <MainCenter>
          <label for='name'>Name:</label>
          <InputStyle name='name'></InputStyle>
          <label for='message'>Msg:</label>
          <InputStyle name='message' message></InputStyle>
          <Button value='Enviar Mensagem'/>
        </MainCenter>
        <FooterComponent/>
      </Main>
    </div>
  );
}

export default App;