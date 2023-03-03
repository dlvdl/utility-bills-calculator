import Navigation from './Navigation'
import styles from './header.module.css'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className="flex f-justify-space-between pad-1-all">
            <Link to="/">
              <h2>CALCULATE UTILITIY</h2>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header
