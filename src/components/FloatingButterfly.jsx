import React, { useState, useEffect } from 'react'
import '../styles/floating-butterfly.css'

function FloatingButterfly() {
  const [position, setPosition] = useState({ top: 50, left: -50 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout
    function triggerFly() {
      const top = 20 + Math.random() * 60
      setPosition({ top, left: -10 })
      setVisible(true)
      timeout = setTimeout(() => {
        setVisible(false)
        timeout = setTimeout(triggerFly, 8000 + Math.random() * 12000)
      }, 6000)
    }
    timeout = setTimeout(triggerFly, 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <span
      className={`floating-butterfly ${visible ? 'floating-butterfly--visible' : ''}`}
      style={{ top: `${position.top}%` }}
    >
      🦋
    </span>
  )
}

export default FloatingButterfly
