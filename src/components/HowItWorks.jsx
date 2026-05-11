import React from 'react'
import '../styles/how-it-works.css'

const STEPS = [
  {
    icon: '📱',
    text: 'Me mande uma mensagem pelo WhatsApp',
  },
  {
    icon: '📅',
    text: 'Escolhemos junto o melhor horário',
  },
  {
    icon: '💬',
    text: 'Sua primeira sessão acontece — sem compromisso de continuidade',
  },
]

function HowItWorks() {
  return (
    <section className="how-works section">
      <div className="container">
        <h2 className="how-works__title reveal">Como funciona?</h2>
        <p className="how-works__subtitle reveal">3 passos simples pra começar</p>

        <div className="how-works__steps">
          {STEPS.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="how-works__step reveal"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <span className="how-works__step-number">{index + 1}</span>
                <span className="how-works__step-icon">{step.icon}</span>
                <p className="how-works__step-text">{step.text}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="how-works__connector reveal">
                  <span className="how-works__connector-line"></span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
