
import { useEffect, useState } from "react";

const Time = () => {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurTime(new Date());
    }
    const interId = setInterval(updateCurrentTime, 1000)
    return () => clearInterval(interId)
  }, [])

  const formTime = curTime.toLocaleTimeString();




  return <div>
    <h2>Current time:{formTime}</h2>
  </div>
}


export default Time;

// import { useEffect, useState } from "react"

//  const Clock = () => {
//   const [time, setTime] = useState(new Date())

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date())
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [])

//   const hours = time.getHours()
//   const min = time.getMinutes()
//   const sec = time.getSeconds()

//   const timeString = `${hours}:${min}:${sec}`

//   return (
//     <div>
//       <h1>{timeString}</h1>
//     </div>
//   )
// }

// export default Clock