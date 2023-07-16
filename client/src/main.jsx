import React from 'react'
import ReactDOM from 'react-dom/client'
import { SettingsProvider } from './context/settings_context'
import { OperationsProvider } from './context/operations_context'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A202E',
    },
    secondary: {
      main: '#CAC8C8',
    },
  },
  spacing: 1,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <OperationsProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </OperationsProvider>
    </SettingsProvider>
  </React.StrictMode>
)
