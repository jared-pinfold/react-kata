import { useState } from 'react'

export function Pixel() {
  const [color, setColor] = useState(getColor())
  const [locked, setLocked] = useState(false)
  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return (
    <div
      className="pixel"
      style={{ background: color }}
      onClick={() => {
        if (!locked) setColor(getColor())
      }}
      onDoubleClick={() => {
        setColor('black')
        setLocked(true)
      }}
    ></div>
  )
}
