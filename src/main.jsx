import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Telegram WebApp SDK ni initialize qilish
import WebApp from '@twa-dev/sdk'

// Telegram WebApp ni ishga tushiramiz
WebApp.ready()
WebApp.expand() // To'liq ekran rejimini yoqamiz

// Telegram tema ranglarini qo'llaymiz
const themeParams = WebApp.themeParams || {}

// Root elementni render qilamiz
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
