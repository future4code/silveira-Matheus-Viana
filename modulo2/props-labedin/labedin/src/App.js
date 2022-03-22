import React from 'react';
import './App.css';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhaFoto from './images/matheus.jpg';
import logoLinkedIn from './images/logo-linkedin.png';
import logoGitHub from './images/logo-github.png';
import styled from 'styled-components';

function App() {

  
  const mostrarConteudo = function () {
    var el = document.getElementById('conteudoOculto');
    el.style.display == 'block' ? el.style.display = 'none' : el.style.display = 'block';
  }

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ minhaFoto } 
          nome="Matheus Mantini" 
          descricao="Apesar de ser apaixonado por tecnologia desde cedo, me formei em Engenharia Ambiental e atuei por 4 anos na área. Mas foi no início de 2020 que resolvi mudar de carreira e seguir minha verdadeira paixão, dedicando aos estudos de programação web."
        />

        <a onClick={ mostrarConteudo }>
          <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
        </a>
      </div>

      <div id='conteudoOculto'>
        <div className="page-section-container">
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
            link="https://www.linkedin.com/in/matheusmantini/"
          />        

          <ImagemButton 
            imagem={logoGitHub} 
            texto="GitHub" 
            link="https://github.com/matheusmantini/"
          />        
        </div>
      </div>
    </div>
  );
}

export default App;
