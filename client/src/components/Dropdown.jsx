import Dropdown from 'react-dropdown'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import styles from './dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const DropdownMenu = (props) => {
  const { getUtilities } = useContext(GlobalContext)
  const { options, setKindOfUtility, kindOfUtilty, today } = props
  const downIcon = <FontAwesomeIcon icon={faChevronDown} />
  const upIcon = <FontAwesomeIcon icon={faChevronUp} />

  const changeHandler = (e) => {
    setKindOfUtility(e.value)
    console.log(getUtilities())
  }

  return (
    <div className="flex f-justify-content-center">
      <Dropdown
        options={options}
        value={options[0].value}
        placeholder="Select an service"
        className={styles.dropdown}
        controlClassName={styles.controlClassName}
        menuClassName={styles.menuClassName}
        placeholderClassName={styles.menuClassName}
        arrowClosed={downIcon}
        arrowOpen={upIcon}
        onChange={changeHandler}
      />
    </div>
  )
}

export default DropdownMenu
