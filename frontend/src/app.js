'use strict'

import React, { Component } from 'react'
// import Button from './button'
// import Square from './square'
import Timer from './timer'

// componente stateful x stateless
// Stateful é um componente que manipula estado,
// precisa ser criado a partir de uma classe
// ou utilizando o componente do rect, create class

class App extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props</button>
      </div>
    )
  }
}

// var App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Samuel' lastname='Silva' />
//       </div>
//     )
//   }
// })

export default App
