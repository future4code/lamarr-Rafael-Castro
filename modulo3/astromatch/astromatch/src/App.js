import * as All from './GlobalStyle';
import displayMatches from './imgs/add-logo1.png';
import nopeBtn from './imgs/nope-btn.png'
import yeahBtn from './imgs/yeah-btn.png'

function App() {
  return (
    <All.Main>
      <All.Card>
        <All.CardHeader>
          <h1>astro<span>match</span></h1>
          <img src={displayMatches} alt="Mostra matches" />
        </All.CardHeader>
        <div/>
        <All.ProfilePic src="https://picsum.photos/250/300" alt="" />
        <All.CardFooter>
          <img src={nopeBtn} alt="Botão rejeitar"/>
          <img src={yeahBtn} alt="Botão gostei" />
        </All.CardFooter>
      </All.Card>
      <All.GlobalStyle/>
    </All.Main>
    
  );
}

export default App;
