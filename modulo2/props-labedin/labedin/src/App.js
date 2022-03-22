import React from 'react';
import './App.css';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhaFoto from './images/matheus.jpg';
import logoLinkedIn from './images/logo-linkedin.png';
import logoGitHub from './images/logo-github.png';

function App() {

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ minhaFoto } 
          nome="Matheus Mantini" 
          descricao="Apesar de ser apaixonado por tecnologia desde cedo, me formei em Engenharia Ambiental e atuei por 4 anos na área. Mas foi no início de 2020 que resolvi mudar de carreira e seguir minha verdadeira paixão, dedicando aos estudos de programação web."
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          classIcon="far fa-envelope"
          info="E-mail"
          descricao="matheusLabenu@gmail.com" 
        />

        <CardPequeno 
          classIcon="fas fa-map-marker-alt"
          info="Endereço"
          descricao="Rua Castro Alves, 999" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Desenvolvedor Web Front-end (Freelancer)" 
          descricao="Desenvolvimento de interfaces web responsivas com HTML, CSS, JavaScript e Bootstrap." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={logoLinkedIn} 
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem={logoGitHub} 
          texto="GitHub" 
        />        
      </div>
    </div>
  );
}

export default App;
