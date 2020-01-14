'use strict'

import React from 'react'

const Title = ({name, lastname}) =>
  (
    <h1>Olar {`${name} ${lastname}`}</h1>
  )

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },
//   render: function() {
//     return (
//       <div>Olár {this.props.name + ' ' + this.props.lastname}</div>
//     )
//   }
// })

export default Title
