import * as All from './GlobalStyle';
import axios from 'axios';
import displayMatches from './imgs/add-logo1.png';
import nopeBtn from './imgs/nope-btn.png';
import yeahBtn from './imgs/yeah-btn.png';
import { useEffect, useState } from 'react'

function App() {

  const [profileToChose, setProfileToChose] = useState({})

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"

  const getProfile = () => {
    axios.get(url+'rafael/person').then((response) =>{
      setProfileToChose(response.data.profile)
      // console.log(response)
    })
  }

  const choosePerson = () => {
    const body = {
      "id": profileToChose.id,
      "choice": true
    }
    axios.post(url+'rafael/choose-person', body).then((response) => {
      // console.log('ok')
    })
  }

  const renderCard = () => {
    return(
      <All.Card>
        <All.CardHeader>
          <h1>astro<span>match</span></h1>
          <img src={displayMatches} alt="Mostra matches" />
        </All.CardHeader>
        <div className='HorizontalBar'/>
        <All.ProfilePicContainer>
          <All.ProfilePic src={profileToChose.photo} alt={profileToChose.photo_alt} />
          <p><span>{profileToChose.name} {profileToChose.age}</span> <br/> {profileToChose.bio}</p>
        </All.ProfilePicContainer>
        <All.CardFooter>
          <img src={nopeBtn} alt="Botão rejeitar"/>
          <img src={yeahBtn} onClick={choosePerson} alt="Botão gostei" />
        </All.CardFooter>
      </All.Card>
    )
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <All.Main>
      {renderCard()}
      <All.GlobalStyle/>
    </All.Main>
    
  );
}

export default App;