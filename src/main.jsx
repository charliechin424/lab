import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <img style={{position: 'absolute', top: "25%", left: "20%"}} src="./photo.jpg" alt = "This is me"/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
)
