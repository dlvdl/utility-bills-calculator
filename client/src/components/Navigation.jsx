import React from 'react'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-1">
        <li>
          <a href="">Main</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
