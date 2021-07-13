import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsjp1-1.fna.fbcdn.net/v/t1.6435-9/173174888_10220481665777819_5923610044437290171_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nr2qZmEYFGoAX_cUzEr&_nc_ht=scontent.fsjp1-1.fna&oh=e8f4d14fdd23ceba8937084bdc0db919&oe=60F3AFFC" 
          nome="João Filippe Rossi Rodrigues" 
          descricao="Olá, tudo bem? Eu sou o João Filippe. Atualmente eu sou advogado, mas estou trabalhando para me tornar um Desenvolvedor Web Full Stack. Tenho certeza que a Labenu vai me ajudar bastante nessa nova jornada! 😁"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Meu e-mail e endereço</h2>
        <CardPequeno
          imagem='https://cdn.icon-icons.com/icons2/171/PNG/512/email_blue_23344.png'
          informacao='E-mail'
          texto='joaofilippe@outlook.com'
          />
      </div> 

      <div className="page-section-container">
        <h2>Meu e-mail e endereço</h2>
        <CardPequeno
          imagem='https://img.icons8.com/color/452/home.png'
          informacao='Endereço'
          texto='Rua 28 de Maio, nº 1993, Vila Felicidade, São José do Rio Preto/SP'
          />
      </div> 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem=" https://media-exp3.licdn.com/dms/image/C4E0BAQF4-4i2xTQkgA/company-logo_100_100/0/1529531312303?e=1634169600&v=beta&t=Xt91vWwnLAJB5sMG0kVsSpZ4arWu86Onsq7j6XIej54 " 
          nome="Rossi Advogados" 
          descricao="Minha tentativa de ter um escritório próprio!" 
        />
        
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C560BAQGE3ZniaUQNsA/company-logo_100_100/0/1617028872796?e=1634169600&v=beta&t=EfDvw8nSaXK2xGiUy8To-_bSNtwE_R8UuZs0dXCRdpg" 
          nome="Cunha | Mantovani Advogados" 
          descricao="Minha primeira tentativa de sociedade!" 
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
