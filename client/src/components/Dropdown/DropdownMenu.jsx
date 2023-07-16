import DropdownItem from './DropdownItem'
import styles from './dropdown.module.css'

import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'

const DropdownMenu = (props) => {
  const { setTypeOfUtility, options, menuOpen, setServerUrl, serverUrl } = props
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      in={menuOpen}
      timeout={300}
      nodeRef={nodeRef}
      classNames={{
        enter: styles.dropdown_menu_enter,
        enterActive: styles.dropdown_menu_enter_active,
        exit: styles.dropdown_menu_exit,
        exitActive: styles.dropdown_menu_exit_active,
      }}
      unmountOnExit
    >
      <div ref={nodeRef} className={styles.dropdown_menu}>
        {options.map((option, i) => {
          return (
            <DropdownItem
              key={i}
              value={option}
              setTypeOfUtility={setTypeOfUtility}
              setServerUrl={setServerUrl}
              serverUrl={serverUrl}
            />
          )
        })}
      </div>
    </CSSTransition>
  )
}

export default DropdownMenu
