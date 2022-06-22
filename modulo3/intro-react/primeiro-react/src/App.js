import logo from './logo.svg';
import './App.css';
import fotoRafael from "./images/rafaelCastro2.jpg"

function App() {
  function message(){
    alert('Boa noite!')
  }
  return (
    <div className="App">
      <h1>Olá! Eu sou o Rafael!</h1>
      <img src={fotoRafael} className='fotoPerfil' alt='Foto Rafael'></img>
      <p>Esse é o meu primeiro site React</p>
      <button className='buttonAlert' onClick={message}>Aperte esse botão</button>
    </div>
  );
}

export default App;
