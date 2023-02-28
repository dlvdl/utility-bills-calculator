import './App.css'
import Header from './components/Header'
import Calculator from './components/Calculator'
import { GlobalContext, GlobalProvider } from './context/GlobalState'
import { useContext } from 'react'

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />
        <Calculator />
      </div>
    </GlobalProvider>
  )
}

export default App
