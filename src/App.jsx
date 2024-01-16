// App.jsx
import React from 'react'
import './App.css'
import Clock from './Clock'
import Timer from './Timer'
import TimerAssignment4 from './TimerAssignment4'

function App() {
  return (
    <div>
      <TimerAssignment4 initialSeconds={300} /> {/* 5 minutes */}
      <TimerAssignment4 initialSeconds={180} /> {/* 3 minutes */}
      <TimerAssignment4 initialSeconds={600} /> {/* 10 minutes */}
      <TimerAssignment4 initialSeconds={300} />{' '}
      {/* Set initialSeconds to the desired starting time */}
      {/* Add more timers or other components as needed */}
      <Clock city="London" timeZone="Europe/London" />
      <Clock city="London" timeZone="Europe/London" />
      {/* Add more clocks as needed */}
    </div>
  )
}

export default App
