import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import fotoRafael from './images/Rafael_Castro2.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoRafael}
          nome="Rafael Davant" 
          descricao="Oi, eu sou o Rafael Davant. Sou desenvolvedor Fullstack e estou situado em São Paulo. Adoro criar soluções digitais que excedam as expectativas."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          image="https://w7.pngwing.com/pngs/1011/641/png-transparent-message-logo-yahoo-mail-email-address-webmail-email-icon-miscellaneous-angle-triangle.png"
          title="Email:"
          text="email@email.com"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
          image="https://www.seekpng.com/png/detail/10-102588_google-location-location-logo-png-hd.png"
          title="Endereço:"
          text="Av dos Estados"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande 
          imagem="https://static.wixstatic.com/media/d75b7e_bdc275aca0fc49faa37fb16029f13a0c~mv2.png/v1/fill/w_586,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bootcamp.png" 
          nome="Bootcamps"
          descricao="Desbravando Bootcamps como se não houvesse amanhã." 
        />
        
        <CardGrande 
          imagem="https://bk.ibxk.com.br/2014/11/programas/124933940.png" 
          nome="Mendigo de TI" 
          descricao="Futuro ex-mendigo de TI." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
