import React from 'react'
import '../styles/individuation.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Oi%20Milena!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20%F0%9F%92%9B'

const PHASES = [
  {
    moon: '🌑',
    title: 'Sombra',
    description: 'Tudo aquilo que vive em você, mas que ainda não foi olhado.',
  },
  {
    moon: '🌓',
    title: 'Confronto',
    description: 'O momento em que você escolhe encarar o que dói.',
  },
  {
    moon: '🌕',
    title: 'Self (integração)',
    description: 'Quando você se reconhece por inteiro — luz e sombra, integradas.',
  },
]

function Individuation() {
  return (
    <section id="individuacao" className="individuation section">
      <div className="container">
        <h2 className="individuation__title reveal">O processo de individuação</h2>
        <p className="individuation__subtitle reveal">
          O caminho junguiano rumo à integração
        </p>

        <div className="individuation__phases">
          {PHASES.map((phase, index) => (
            <React.Fragment key={index}>
              <div
                className="individuation__phase reveal"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <span className="individuation__moon">{phase.moon}</span>
                <h3 className="individuation__phase-title">{phase.title}</h3>
                <p className="individuation__phase-desc">"{phase.description}"</p>
              </div>
              {index < PHASES.length - 1 && (
                <div className="individuation__connector reveal">
                  <span className="individuation__connector-line"></span>
                  <span className="individuation__connector-arrow">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="individuation__cta reveal">
          <p className="individuation__cta-text">
            A terapia é esse caminho. E ele começa com um passo. 💬
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Dar o primeiro passo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Individuation
