import React from 'react'
import '../styles/why-online.css'

const CARDS = [
  {
    icon: '🏠',
    title: 'De onde você estiver',
    description: 'Sem trânsito, sem deslocamento.',
  },
  {
    icon: '🔒',
    title: 'Privacidade total',
    description: 'Ninguém precisa saber.',
  },
  {
    icon: '⏰',
    title: 'Flexibilidade de horário',
    description: 'Manhã, tarde ou noite.',
  },
]

function WhyOnline() {
  return (
    <section id="online" className="why-online section">
      <div className="container">
        <h2 className="why-online__title reveal">Por que online funciona?</h2>
        <p className="why-online__subtitle reveal">
          Atendimento 100% online — com a mesma qualidade e acolhimento
        </p>

        <div className="why-online__grid">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="why-online__card glass-card reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="why-online__icon">{card.icon}</span>
              <h3 className="why-online__card-title">{card.title}</h3>
              <p className="why-online__card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyOnline
