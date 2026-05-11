import React, { useState, useEffect } from 'react'
import '../styles/self-care.css'

const BREATH_PHASES = ['Inspira...', 'Segura...', 'Expira...']

function SelfCarePopup() {
  const [show, setShow] = useState(false)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('selfcare-shown')) return

    let timer
    let lastActivity = Date.now()

    function resetTimer() {
      lastActivity = Date.now()
    }

    function checkInactivity() {
      if (Date.now() - lastActivity >= 60000) {
        setShow(true)
        localStorage.setItem('selfcare-shown', 'true')
        cleanup()
      }
    }

    window.addEventListener('scroll', resetTimer)
    window.addEventListener('click', resetTimer)
    window.addEventListener('mousemove', resetTimer)
    timer = setInterval(checkInactivity, 5000)

    function cleanup() {
      clearInterval(timer)
      window.removeEventListener('scroll', resetTimer)
      window.removeEventListener('click', resetTimer)
      window.removeEventListener('mousemove', resetTimer)
    }

    return cleanup
  }, [])

  useEffect(() => {
    if (!show) return
    const interval = setInterval(() => setPhase((p) => (p + 1) % 3), 4000)
    return () => clearInterval(interval)
  }, [show])

  if (!show) return null

  return (
    <div className="selfcare-modal" onClick={() => setShow(false)}>
      <div className="selfcare-modal__content" onClick={(e) => e.stopPropagation()}>
        <p className="selfcare-modal__title">Ei... respira fundo 💛</p>
        <div className="selfcare-modal__circle"></div>
        <span className="selfcare-modal__phase">{BREATH_PHASES[phase]}</span>
        <button className="selfcare-modal__btn" onClick={() => setShow(false)}>
          Obrigada 🙏
        </button>
      </div>
    </div>
  )
}

export default SelfCarePopup
