import React from "react"

const BemVindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Olá mundo!</h1>
      <BemVindo nome='Gabriel' idade='20'/>
      <BemVindo nome='Malu' idade='17'/>
    </div>
  ) 
}

export default App