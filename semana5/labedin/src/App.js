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
          imagem="https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-1/p200x200/181445299_4081324685243662_4212564739537296314_n.jpg?_nc_cat=108&amp;ccb=1-3&amp;_nc_sid=7206a8&amp;_nc_eui2=AeGOANR_fYsjkVI4_zHZcZLm15AUTFBPnxnXkBRMUE-fGXVsH9NijDvdWN7c8Wm1HraDyzeh9okhLmOp_mOneOA8&amp;_nc_ohc=vV39n-JULkAAX97174o&amp;_nc_ht=scontent.fbsb3-1.fna&amp;tp=6&amp;oh=b4de4f588d4ba706dbc4ee22e47bf611&amp;oe=60DCA430" style="height: 168px; width: 168px" 
          nome="Carlos Dutra" 
          descricao="Oi, eu sou o Carlos. Sou o estudante da Labenu. Adoro aprender novas tecnologias e trabalhar com elas .. espero poder atuar na área o quanto antes."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
    
      
      
      <div className="page-section-container">
        <CardPequeno
          
          nome="E-mail" 
          descricao="carlos.planejamento@gmail.com " 
        />
     
        <CardPequeno
          
          nome="Endereço" 
          descricao="Brasília-DF" 
        />
     </div>
      
 
 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGQgfy8lwQb2w/company-logo_100_100/0/1617796600426?e=1630540800&v=beta&t=a6Gn_TamPmdBth5lZmfRLSfST8Ct0w0LbcbfM3mgS8Y" 
          nome="Tellus -Informática e Telecomunicações LTDA" 
          descricao="Analista de Qualidade. " 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGQgfy8lwQb2w/company-logo_100_100/0/1617796600426?e=1630540800&v=beta&t=a6Gn_TamPmdBth5lZmfRLSfST8Ct0w0LbcbfM3mgS8Y"  
          nome="Tellus -Informática e Telecomunicações LTDA" 
          descricao="Analista de Negócios." 
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
