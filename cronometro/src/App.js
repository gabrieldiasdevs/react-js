import React, { Component } from "react"
import './style.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'INICIAR'
    }
    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      this.setState({ botao: 'INICIAR' })
    }else{
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100);
      this.setState({ botao: 'PAUSAR' })
    }    
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }

    this.setState({ numero: 0 })
    this.setState({ botao: 'INICIAR' })
  }

  render(){
    return(
      <div className="container" >
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer" >{this.state.numero.toFixed(1)}</a>

        <div className="areaBtn">
          <a onClick={this.iniciar} className="botao" >{this.state.botao}</a>
          <a onClick={this.limpar} className="botao" >LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App