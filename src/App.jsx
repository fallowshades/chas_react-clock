import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en'))

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().toLocaleTimeString('en')

      setTime(now)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []) // Empty dependency array ensures useEffect runs only once on mount

  const timeArray = time.split(':')
  const minutes = parseInt(timeArray[0], 10)
  const seconds = parseInt(timeArray[1], 10)

  return (
    <div>
      {minutes}:{seconds}
    </div>
  )
}

export default App
