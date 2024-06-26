import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      form:{
        nome: '',
        idade: '',
        email: '',
        senha: ''
      }
    }

    this.dadosForm = this.dadosForm.bind(this)
  }

  dadosForm(evento){
    let form = this.state.form
    form[evento.target.name] = evento.target.value

    this.setState({ form: form })
  }

  render(){
    return(
      <div>
        <h1>Dados Pessoais</h1>

        <form>
          <label>Nome: </label>
          <input
            name='nome'
            type='text'
            value={this.state.form.nome}
            onChange={this.dadosForm}
          />

          <br/>

          <label>Idade: </label>
          <input
            name='idade'
            type='text'
            value={this.state.form.idade}
            onChange={this.dadosForm}
          />

          <br/>

          <label>Email: </label>
          <input
            name='email'
            type='text'
            value={this.state.form.email}
            onChange={this.dadosForm}
          />

          <br/>

          <label>Senha: </label>
          <input
            name='senha'
            type='password'
            value={this.state.form.senha}
            onChange={this.dadosForm}
          />

          <button
            type='submit'
            onClick={this.enviarDados}
          >ENVIAR
          </button>

        </form>
      </div>
    )
  }
}

export default App