// Clock.jsx
import React, { useEffect, useState } from 'react'

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en', { timeZone })
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().toLocaleTimeString('en', { timeZone })
      setTime(now)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [timeZone])

  const timeArray = time.split(':')
  const minutes = parseInt(timeArray[0], 10)
  const seconds = parseInt(timeArray[1], 10)

  return (
    <div>
      <h2>{city}</h2>
      {minutes}:{seconds}
    </div>
  )
}

export default Clock
