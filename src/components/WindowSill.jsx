import React from 'react'
import { gameWidth } from "../utils/constants";

const WindowSill = () => {
  const windowSillStyle = {
    fill: '#966F33'
  }
  const division = {
    stroke: '#458232',
    strokeWidth: '3px'
  }

  return (
    <g id="windowSill">
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='10' stitchTiles='stitch'/>
      </filter>
      <rect 
        id="windowSill-2"
        data-name="windowSill"
        style={windowSillStyle}
        x={gameWidth / -2}
        y={0}
        width={gameWidth}
        height={100}
      />
      <rect 
        id="windowSill-3"
        data-name="windowSill"
        style={windowSillStyle}
        x={gameWidth / -2}
        y={0}
        width={gameWidth}
        height={100}
        filter="url(#n)" 
        opacity='0.4'
      />
      <line
        x1={gameWidth / -2}
        y1={0}
        x2={gameWidth / 2}
        y2={0}
        style={division}
      />
    </g>
  )
}

export default WindowSill