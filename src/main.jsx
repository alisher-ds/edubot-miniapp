/**
 * src/main.jsx - Telegram WebApp SDK ni initialize qilish va App ni render qilish
 * 
 * Bu fayl React aplikatsiyasining kirish nuqtasi (entry point).
 * Telegram WebApp SDK ni yuklaydi va initialize qiladi.
 * Keyin App komponentini DOM ga render qiladi.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Telegram WebApp SDK ni import qilish
import WebApp from '@twa-dev/sdk'

// Telegram WebApp ni initialize qilish
WebApp.ready()
WebApp.expand() // To'liq ekran rejimini yoqish

// React aplikatsiyasini render qilish
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
