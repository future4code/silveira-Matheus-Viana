import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputDescricao = styled.input`
    display: flex;
    justify-content: center;
`

const ContainerBtn = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
    margin-top: 7px;
    background-color: white;
    border: 0;
`

export class SecaoCompartilhar extends Component {
	state = {
    descricao: ''
	}

  onChangeDescricao = (event) => {
    this.setState ({
    descricao: event.target.value
    })
  }

	render() {
		return <Container>      
			<InputDescricao
				placeholder='Descrição'
				value={this.state.descricao}
				onChange={this.onChangeDescricao}
        id='mensagemCompartilhada'
			/>
      
      <ContainerBtn>
        <button onClick={this.props.sharedOnInstagram}>Instagran</button>
        <button onClick={this.props.sharedOnFacebook}>Facebook</button>
        <button onClick={this.props.sharedOnTwitter}>Twitter</button>
      </ContainerBtn>
		</Container>
	}
}
