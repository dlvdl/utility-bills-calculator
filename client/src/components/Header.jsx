import Navigation from './Navigation'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="flex f-justify-space-between pad-1-all">
          <h2>CALCULATE UTILITIY</h2>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header
