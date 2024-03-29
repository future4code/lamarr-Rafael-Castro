import * as All from './GlobalStyle';
import axios from 'axios';
import displayMatches from './imgs/add-logo1.png';
import nopeBtn from './imgs/nope-btn.png';
import yeahBtn from './imgs/yeah-btn.png';
import backIcon from './imgs/back-ico.png';
import { useEffect, useState } from 'react'

function App() {

  const [profileToChose, setProfileToChose] = useState({})
  const [pageChoser, setPageChoser] = useState('card')
  const [matches, setMatches] = useState([])

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"
  const aluno = 'rafael'

  // getProfile API endpoint
  const getProfile = () => {
    axios.get(url+aluno+'/person').then((response) =>{
      setProfileToChose(response.data.profile)
    })
  }

  // choosePerson API endpoint
  const choosePerson = () => {
    const body = {
      "id": profileToChose.id,
      "choice": true
    }
    axios.post(url+aluno+'/choose-person', body).then((response) => {
      {response.data.isMatch && getProfile()}
    })
  }

    // getMatches API endpoint
  const getMatches = () => {
    axios.get(url+aluno+'/matches').then((response) => {
      setMatches(response.data.matches)
      setPageChoser('matches')

    })
  }

  // clearMatches API endpoint
  const clearMatches = () => {
    axios.put(url+aluno+'/clear').then(() => {
      alert('Matches resetados.')
      {pageChoser === 'matches' && getMatches()}
    })
  }
  
  const DisplayPage = () =>{
    switch (pageChoser) {
      case 'card':
        return renderCardToChose();
      case 'matches':
        return (
          <All.Matches>
            <ul>{renderMatches}</ul>
          </All.Matches>
        )
      default:
        return renderCardToChose();
    }
  }

  const renderCardToChose = () => {
    return(
      <>
        <All.ProfilePicContainer>
          <All.ProfilePic src={profileToChose.photo} alt={profileToChose.photo_alt} />
          <p><span>{profileToChose.name} {profileToChose.age}</span> <br/> {profileToChose.bio}</p>
        </All.ProfilePicContainer>
        <All.CardFooter>
          <img src={nopeBtn} onClick={getProfile} alt="Botão rejeitar"/>
          <img src={yeahBtn} onClick={choosePerson} alt="Botão gostei" />
        </All.CardFooter>
      </>
    )
  }

  const renderMatches = matches.map(item => {
    return(
      <li>
        <img src={item.photo} alt={item.photo_alt}/>
        <p>{item.name}</p>
      </li>
    )
  })

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <All.Main>
      <All.Card>
        <All.CardHeader>
          {pageChoser === 'matches' && <img src={backIcon} onClick={() => setPageChoser('card')} alt="Volta para tela de escolha" />}
          <h1>astro<span>match</span></h1>
          {pageChoser === 'card' && <img src={displayMatches} onClick={getMatches} alt="Mostra matches" />}
        </All.CardHeader>
        {DisplayPage()}
      </All.Card>
        <button onClick={clearMatches}>Resetar matches</button>
      <All.GlobalStyle/>
    </All.Main>
    
  );
}
export default App;