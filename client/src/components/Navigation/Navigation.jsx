import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-1">
        <li>
          <Link to="/calculator">Main</Link>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
