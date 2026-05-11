import React, { useState, useEffect } from 'react'
import '../styles/crisis.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Preciso%20conversar%20agora.'

const BREATH_PHASES = ['Inspira...', 'Segura...', 'Expira...']

function CrisisButton() {
  const [open, setOpen] = useState(false)
  const [breathPhase, setBreathPhase] = useState(0)

  useEffect(() => {
    if (!open) return
    const interval = setInterval(() => {
      setBreathPhase((p) => (p + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [open])

  return (
    <>
      <button className="crisis-btn" onClick={() => setOpen(true)}>
        Preciso de ajuda 🚨
      </button>

      {open && (
        <div className="crisis-modal" onClick={() => setOpen(false)}>
          <div className="crisis-modal__content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="crisis-modal__close" onClick={() => setOpen(false)}>✕</button>
            <p className="crisis-modal__title">Respira fundo. Você está segura. 💛</p>

            <div className="crisis-modal__breathe">
              <div className="crisis-modal__circle"></div>
              <span className="crisis-modal__phase">{BREATH_PHASES[breathPhase]}</span>
            </div>

            <div className="crisis-modal__contacts">
              <p><strong>CVV: 188</strong> (ligação gratuita) | chat: <a href="https://cvv.org.br" target="_blank" rel="noopener noreferrer">cvv.org.br</a></p>
              <p><strong>SAMU: 192</strong></p>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary crisis-modal__cta">
              Falar com Milena agora 💬
            </a>

            <p className="crisis-modal__emergency">
              Se estiver em perigo imediato, ligue <strong>190</strong> (Polícia) ou <strong>192</strong> (SAMU)
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default CrisisButton
