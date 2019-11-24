import React from 'react'
import Sky from './Sky'
import WindowSill from './WindowSill'

const Canvas = () => {
  const viewBox = [
    window.innerWidth / -2, 100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ]
  return (
    <svg
    id="lizard-puncher-canvas"
    preserveAspectRatio="xMaxYMax none"
    viewBox={viewBox}
    >
      <Sky/>
      <WindowSill/>
      <circle cx={0} cy={0} r={50}/>
    </svg>
  )
}

export default Canvas