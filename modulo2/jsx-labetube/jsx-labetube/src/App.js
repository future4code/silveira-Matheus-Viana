import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = "Título do vídeo lorem ipsum dolor sit amet";
  const nomeCanal = "Nome do Canal";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Future <span>Tube</span></h1>
            <div class="containerBusca">
              <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
              <button id="btnPesquisarTexto"><i class="fas fa-search"></i></button>
              <button id="btnPesquisarVoz"><i class="fas fa-microphone"></i></button>
            </div>
            <div class="containerUsuario">             
              <div id="videosHeader">
                <i class="fas fa-video"></i>
              </div>           
              <div id="opcoesHeader">
                <i class="fas fa-th"></i>
              </div>            
              <div id="notificacoes">
                <i class="far fa-bell"></i>
              </div>
              <div id="imagemUsuario">
                <i class="fas fa-user"></i>
              </div>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><i class="fas fa-home"></i> Início</li>
                    <li className="botoes-meunu-vertical"><i class="far fa-compass"></i> Explorar</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-video"></i> Shorts</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-file-signature"></i> Inscrições</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-film"></i> Originais</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-play-circle"></i> Youtube Music</li>
                    <hr />
                    <li className="botoes-meunu-vertical"><i class="fas fa-book"></i> Biblioteca</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-file-alt"></i> Histórico</li>
                    <li className="botoes-meunu-vertical"><i class="far fa-file-video"></i> Seus vídeos</li>
                    <li className="botoes-meunu-vertical"><i class="far fa-clock"></i> Asistir mais tarde</li>
                    <li className="botoes-meunu-vertical"><i class="fas fa-download"></i> Downloads</li>
                    <li className="botoes-meunu-vertical"><i class="far fa-thumbs-up"></i> Vídeos marcados com "Gostei"</li>
                    <hr />
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <div id="duracaoVideo">
                      <p>9:57</p>
                    </div>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <div class="containerInfoVideo">
                      <div id="imagemUsuarioCard">
                        <i class="fas fa-user"></i>
                      </div>
                      <h4 id='tituloVideoCard'>{titulo}</h4>
                      <p id='nomeCanal'>{nomeCanal} <i class="fas fa-check-circle"></i></p>
                      <p id='visualizacoes'>47 mil Visualizações &bull; há 4 dias</p>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <h4>Future Tube &copy; 2022 All rights reserved</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;