import React from 'react'
import '../styles/day-in-therapy.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Oi%20Milena!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20%F0%9F%92%9B'

const STEPS = [
  {
    icon: '🤝',
    title: 'Acolhimento',
    description: 'Começamos com uma conversa leve. Sem julgamentos.',
  },
  {
    icon: '🗣️',
    title: 'Escuta ativa',
    description: 'Você fala o que quiser, no seu tempo.',
  },
  {
    icon: '💡',
    title: 'Reflexão guiada',
    description: 'Junto, vamos entender padrões e sentimentos.',
  },
  {
    icon: '🌱',
    title: 'Caminhos',
    description: 'Saímos com algo concreto pra levar pro dia a dia.',
  },
]

function DayInTherapy() {
  return (
    <section id="sessao" className="day-therapy section">
      <div className="container">
        <h2 className="day-therapy__title reveal">Um dia na terapia</h2>
        <p className="day-therapy__subtitle reveal">
          Como funciona uma sessão comigo
        </p>

        <div className="day-therapy__steps">
          {STEPS.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="day-therapy__step reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="day-therapy__step-number">{index + 1}</div>
                <span className="day-therapy__step-icon">{step.icon}</span>
                <h3 className="day-therapy__step-title">{step.title}</h3>
                <p className="day-therapy__step-desc">"{step.description}"</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="day-therapy__connector">
                  <span className="day-therapy__connector-dot"></span>
                  <span className="day-therapy__connector-dot"></span>
                  <span className="day-therapy__connector-dot"></span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="day-therapy__cta reveal">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Pronto(a) pra começar? 💬
          </a>
        </div>
      </div>
    </section>
  )
}

export default DayInTherapy
