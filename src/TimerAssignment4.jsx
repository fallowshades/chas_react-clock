import React, { useEffect, useState } from 'react'
const TimerAssignment4 = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1)
      } else {
        clearInterval(intervalId)
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [seconds])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  if (minutes == 0 && remainingSeconds == 0)
    return <div className="you-dead">you have officially died..</div>

  return (
    <div>
      {minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  )
}
export default TimerAssignment4
