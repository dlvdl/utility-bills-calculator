import React from 'react'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-1">
        <li>
          <a href="/calculator">Main</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
