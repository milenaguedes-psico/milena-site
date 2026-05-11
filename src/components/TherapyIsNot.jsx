import React from 'react'
import '../styles/therapy-is-not.css'

const MYTHS = [
  { icon: '🚫', text: 'Terapia não é conselho' },
  { icon: '🚫', text: 'Terapia não é só desabafar' },
  { icon: '🚫', text: 'Terapia não é coisa de doido' },
]

const TRUTH = {
  icon: '✅',
  text: 'Terapia é um espaço de escuta profunda, onde você se encontra.',
}

function TherapyIsNot() {
  return (
    <section className="therapy-not section">
      <div className="container">
        <h2 className="therapy-not__title reveal">Terapia não é...</h2>

        <div className="therapy-not__myths">
          {MYTHS.map((myth, index) => (
            <div
              key={index}
              className="therapy-not__myth glass-card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="therapy-not__icon">{myth.icon}</span>
              <p className="therapy-not__text">{myth.text}</p>
            </div>
          ))}
        </div>

        <div className="therapy-not__truth reveal">
          <div className="therapy-not__truth-card">
            <span className="therapy-not__icon therapy-not__icon--truth">
              {TRUTH.icon}
            </span>
            <p className="therapy-not__truth-text">{TRUTH.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapyIsNot
