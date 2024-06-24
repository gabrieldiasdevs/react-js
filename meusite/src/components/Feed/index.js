import React, { Component } from 'react'

class Feed extends Component{
  render(){
    return(
      <div key={this.props.key}>
        <h3>{this.props.username}</h3>
        <a>{this.props.curtidas} {this.props.curtidas <= 1 ? 'curtida' : 'curtidas'} / {this.props.comentarios} {this.props.comentarios <= 1 ? 'comentário' : 'comentários'}</a>
        <hr/>
      </div>
    )
  }
}

export default Feed