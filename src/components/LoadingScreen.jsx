import React, { useState, useEffect } from 'react'
import '../styles/loading.css'

function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loading-screen ${hidden ? 'loading-screen--hidden' : ''}`}>
      <span className="loading-screen__butterfly">🦋</span>
      <p className="loading-screen__text">Preparando seu espaço seguro...</p>
    </div>
  )
}

export default LoadingScreen
