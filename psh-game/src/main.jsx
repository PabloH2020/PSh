import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StatsProvider } from './context/StatsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StatsProvider>
    <App />
  </StatsProvider>,
)
