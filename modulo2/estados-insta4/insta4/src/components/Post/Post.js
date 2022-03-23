import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcado from '../../img/bookmark-black.svg'
import iconeDesmarcado from '../../img/bookmark-white.svg'
import iconeCompartilhar from '../../img/share_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
  }

  onClickCurtida = () => {
    if(this.state.curtido === false){
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else if(this.state.curtido === true){
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcacao = () => {
    this.setState({marcado: !this.state.marcado})
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }
  
  compartilharInsta = () => {
    let mensagemCompartilhada = document.getElementById('mensagemCompartilhada').value;
    mensagemCompartilhada === '' ? console.log('Mensagem de compartilhamento vazia. Tente novamente!') : console.log(`Post compartilhado no Instagram com a mensagem: ${mensagemCompartilhada}.`)
    this.setState({ compartilhando:false })
  }
  compartilharFace = () => {
    let mensagemCompartilhada = document.getElementById('mensagemCompartilhada').value;
    mensagemCompartilhada === '' ? console.log('Mensagem de compartilhamento vazia. Tente novamente!') : console.log(`Post compartilhado no Facebook com a mensagem: ${mensagemCompartilhada}.`)    
    this.setState({ compartilhando:false })
  }
  compartilharTwitter = () => {
    let mensagemCompartilhada = document.getElementById('mensagemCompartilhada').value;
    mensagemCompartilhada === '' ? console.log('Mensagem de compartilhamento vazia. Tente novamente!') : console.log(`Post compartilhado no Twitter com a mensagem: ${mensagemCompartilhada}.`)
    this.setState({ compartilhando:false })
  }



  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if(this.state.marcado) {
      iconeMarcacao = iconeMarcado
    } else {
      iconeMarcacao = iconeDesmarcado
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar
          sharedOnInstagram={this.compartilharInsta} 
          sharedOnFacebook={this.compartilharFace}
          sharedOnTwitter={this.compartilharTwitter} 
          descricaoFinal={this.state.descricao}
        />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeSemContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post