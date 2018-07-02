import React, { Component } from 'react'
import { NavBar } from '../../core/components'

const items = [
  { link: '/sponsors', text: 'Padrinhos' },
  { link: '/import', text: 'Importar Padrinhos' }
]

class Header extends Component {
  render() {
    return <div className="header"><NavBar title="Missão África" items={items} /></div>
  }
}

export default Header
