import React from 'react'
import { gameWidth } from '../utils/constants'

const Sky = () => {
  const skyStyle = {
    fill: '#30ABEF',
  }
  const skyWidth = gameWidth
  const gameHeight = 1200
  return (
    <g id="sky">
      <rect 
        style={skyStyle}
        x={skyWidth / -2}
        y={100 - gameHeight}
        width={skyWidth}
        height={gameHeight}
      />
      
    </g>
  )
}

export default Sky