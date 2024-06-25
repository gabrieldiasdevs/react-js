import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      idade: ''
    }

    this.enviarDados = this.enviarDados.bind(this)
  }

  enviarDados(event){
    const {nome, idade} = this.state

    if(nome === '' || idade === ''){
      alert('Digite nos campos abaixo!')
      return
    }
    alert(`Você é o ${nome} e você tem ${idade} anos!`)

    event.preventDefault()
  }

  render(){
    return(
      <div>
        <h1>Dados Pessoais</h1>

        <form>
          <label>Nome: </label>
          <input
            type='text'
            value={this.state.nome}
            onChange={ (text) => this.setState({ nome: text.target.value }) }
          />

          <br/>

          <label>Idade: </label>
          <input
            type='text'
            value={this.state.idade}
            onChange={ (text) => this.setState({ idade: text.target.value }) }
          />
          <button
            type='submit'
            onClick={this.enviarDados}
          >ENVIAR</button>
        </form>

        
        

      </div>
    )
  }
}

export default App