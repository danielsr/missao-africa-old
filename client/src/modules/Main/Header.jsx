import React from 'react'
import { NavBar } from 'core/components'

const items = [
  { link: '/sponsors', text: 'Padrinhos' }
]

export default () => (
  <div className="header">
    <NavBar title="Missão África" items={items} />
  </div>
)
