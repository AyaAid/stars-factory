import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Analytics from './components/Analytics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights />
    <Analytics />
    <App />
  </React.StrictMode>
)
