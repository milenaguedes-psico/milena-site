import React, { useState } from 'react'
import '../styles/before-after.css'

const CARDS = [
  {
    before: 'Não consigo lidar com nada',
    after: 'Sei pedir ajuda quando preciso',
  },
  {
    before: 'Tô sempre ansiosa',
    after: 'Aprendi a identificar meus gatilhos',
  },
  {
    before: 'Não me sinto boa o suficiente',
    after: 'Estou aprendendo a me validar',
  },
  {
    before: 'Evito conversas difíceis',
    after: 'Consigo me posicionar com respeito',
  },
  {
    before: 'Me sinto no automático',
    after: 'Reconecto com o que faz sentido pra mim',
  },
]

function FlipCard({ before, after, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card reveal ${flipped ? 'flip-card--flipped' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <span className="flip-card__emoji">😶</span>
          <span className="flip-card__label">Antes</span>
          <p className="flip-card__text">"{before}"</p>
          <span className="flip-card__hint">↻</span>
        </div>
        <div className="flip-card__back">
          <span className="flip-card__emoji">🌱</span>
          <span className="flip-card__label">Depois</span>
          <p className="flip-card__text">"{after}"</p>
          <span className="flip-card__hint">↻</span>
        </div>
      </div>
    </div>
  )
}

function BeforeAfter() {
  return (
    <section className="before-after section">
      <div className="container">
        <h2 className="before-after__title reveal">Antes x Depois</h2>
        <p className="before-after__subtitle reveal">
          Toque nos cards pra ver a transformação
        </p>

        <div className="before-after__grid">
          {CARDS.map((card, index) => (
            <FlipCard
              key={index}
              before={card.before}
              after={card.after}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
