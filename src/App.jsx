// App.jsx
import React from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  return (
    <div>
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="London" timeZone="Europe/London" />
      {/* Add more clocks as needed */}
    </div>
  )
}

export default App
