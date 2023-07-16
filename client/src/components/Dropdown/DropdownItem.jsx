import styles from './dropdown.module.css'
const DropdownItem = (props) => {
  const { value, setTypeOfUtility, setServerUrl, serverUrl } = props
  const clickHandler = (e) => {
    setTypeOfUtility(value)
    const regex = /(?<=type=).*?(?=&)/
    const newUrl = serverUrl.replace(regex, value)
    setServerUrl(newUrl)
  }

  return (
    <a className={styles.dropdown_item} href="#" onClick={clickHandler}>
      {value}
    </a>
  )
}

export default DropdownItem
