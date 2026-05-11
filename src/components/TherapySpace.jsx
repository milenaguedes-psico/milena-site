import React from 'react'
import '../styles/therapy-space.css'

const TIPS = [
  { icon: '🕯️', text: 'Escolha um cantinho tranquilo' },
  { icon: '🎧', text: 'Use fone de ouvido pra privacidade' },
  { icon: '☕', text: 'Tenha uma água ou chá por perto' },
  { icon: '📵', text: 'Silencie as notificações' },
]

function TherapySpace() {
  return (
    <section className="therapy-space section">
      <div className="container">
        <h2 className="therapy-space__title reveal">Seu espaço terapêutico em casa</h2>
        <p className="therapy-space__subtitle reveal">
          Dicas pra aproveitar ao máximo sua sessão online
        </p>

        <div className="therapy-space__grid">
          {TIPS.map((tip, index) => (
            <div
              key={index}
              className="therapy-space__card glass-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="therapy-space__icon">{tip.icon}</span>
              <p className="therapy-space__text">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TherapySpace
