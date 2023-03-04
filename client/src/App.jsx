import './App.css'
import Header from './components/Header'
import Settings from './components/Settings'
import Calculator from './components/Calculator'
import Home from './components/Home'
import { GlobalContext, GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="calculator" element={<Calculator />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
