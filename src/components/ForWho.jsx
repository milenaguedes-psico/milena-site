import React from 'react'
import '../styles/for-who.css'

const ITEMS = [
  { icon: '😰', label: 'Ansiedade e estresse' },
  { icon: '💔', label: 'Relacionamentos' },
  { icon: '🪞', label: 'Autoestima e autoconhecimento' },
  { icon: '😢', label: 'Luto e perdas' },
  { icon: '🔄', label: 'Transições de vida' },
  { icon: '😶', label: 'Dificuldade de se expressar' },
  { icon: '🧠', label: 'Burnout e esgotamento' },
  { icon: '💭', label: 'Pensamentos intrusivos' },
]

function ForWho() {
  return (
    <section id="para-quem" className="for-who section">
      <div className="container">
        <h2 className="for-who__title reveal">Para quem é?</h2>
        <p className="for-who__subtitle reveal">
          A terapia pode ajudar se você se identifica com algo aqui
        </p>

        <div className="for-who__grid">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="for-who__card glass-card reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <span className="for-who__icon">{item.icon}</span>
              <span className="for-who__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForWho
