import { useState, useEffect, useRef } from 'react'

import styles from './dropdown.module.css'
import DropdownMenu from './DropdownMenu'

const Dropdown = (props) => {
  const { options, setTypeOfUtility, title, setServerUrl, serverUrl } = props
  const nodeRef = useRef(null)
  const [menuOpen, setOpen] = useState(false)

  // Handle a situation when we click outside of Dropdown.
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.composedPath()[0].tagName !== 'BUTTON') {
        setOpen(!open)
      }
    }

    document.body.addEventListener('click', closeDropdown)

    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])

  return (
    <div className={styles.dropdown}>
      <button className={styles.title} onClick={() => setOpen(!menuOpen)}>
        {title}
      </button>

      <DropdownMenu
        options={options}
        setTypeOfUtility={setTypeOfUtility}
        menuOpen={menuOpen}
        setServerUrl={setServerUrl}
        serverUrl={serverUrl}
      />
    </div>
  )
}

export default Dropdown
