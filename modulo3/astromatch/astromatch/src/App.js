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
    axios.get(url+'darvas/person').then((response) =>{
      setProfileToChose(response.data.profile)
      console.log(response.data.profile)
    })
  }
  
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <All.Main>
      <All.Card>
        <All.CardHeader>
          <h1>astro<span>match</span></h1>
          <img src={displayMatches} alt="Mostra matches" />
        </All.CardHeader>
        <div className='HorizontalBar'/>
        <All.ProfilePicContainer>
          <All.ProfilePic src={profileToChose.photo} alt={profileToChose.photo_alt} />
          <h3>{profileToChose.name} {profileToChose.age}</h3>
          <p>{profileToChose.bio}</p>
        </All.ProfilePicContainer>
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
