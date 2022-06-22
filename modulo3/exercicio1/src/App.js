import logo from './logo.svg';
import './App.css';
import labenuLogo from './images/labenu1.png'

function App() {
  function message(){
    alert('Button clicked!')
  }
  return (
    <div className="App">
      <h1>Aprenda React com a Labenu!</h1>
      <img className='img-logo' src={labenuLogo} alt="Logo Labenu"/>
      <button onClick={message}>Click here!</button>
    </div>
  );
}

export default App;
