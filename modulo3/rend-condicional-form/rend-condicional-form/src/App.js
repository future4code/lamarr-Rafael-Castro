import './App.css';
import {useState} from 'react'
import {Step1} from './Components/Step1'
import {Step2} from './Components/Step2'

function App() {

  const [checkStep, setCheckStep] = useState('step1')

  const get_data_child = (data) => {
    console.log(data);
    setCheckStep(data)
  }

  return (
    <>
      {checkStep === 'step1' && <Step1 func={get_data_child}/>}
      {checkStep === 'step2' && <Step2/>}
      {/* <button>Prosseguir</button> */}
    </>
  );
}

export default App;
