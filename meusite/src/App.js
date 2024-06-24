import React, { Component } from 'react'
import Feed from './components/Feed'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      feed: [
      {
        id: 1,
        username: 'Gabriel',
        curtidas: 10,
        comentarios: 2
      },
      {
        id: 2,
        username: 'Malu',
        curtidas: 2984,
        comentarios: 124
      },
      {
        id: 3,
        username: 'Sabrina',
        curtidas: 996,
        comentarios: 56
      },
      {
        id: 4,
        username: 'Rafael',
        curtidas: 1,
        comentarios: 0
      }
    ]
    }
  }

  render(){
    return(
      <div>
        
        {this.state.feed.map((item) => {
          return(
            <Feed 
              key={item.id} 
              username={item.username} 
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          )
        })}

      </div>
    )
  }
}

export default App