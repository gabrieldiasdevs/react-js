import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      email: 'teste@teste.com',
      senha: '123123',
      sexo: 'masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }

  trocaEmail(text){
    let valorDigitado = text.target.value
    this.setState({ email: valorDigitado })
  }

  trocaSexo(text){
    this.setState({ sexo: text.target.value })
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input 
          type='email' 
          name='email' 
          value={this.state.email}
          onChange={this.trocaEmail}
        />

        <br/>

        Senha:
        <input 
          type='password' 
          name='senha' 
          value={this.state.senha}
          onChange={ (text) => this.setState({ senha: text.target.value }) }
        />

        <br/>

        Sexo:
        <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo} >
          <option value='masculino' >Masculino</option>
          <option value='feminino' >Feminino</option>
        </select>
      </div>
    )
  }
}

export default App