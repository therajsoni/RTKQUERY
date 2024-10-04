import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={myApi}>
    <App />
    </ApiProvider>
  </StrictMode>,
)
