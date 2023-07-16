import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Calculator, Settings, Home, Header, CreateTariff } from './components'
import { Container } from '@mui/material'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="calculator" element={<Calculator />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
          <Route path="createTariff" element={<CreateTariff />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
