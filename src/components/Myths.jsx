import React, { useState } from 'react'
import '../styles/myths.css'

const MYTHS = [
  {
    myth: 'Terapia é só pra quem está mal',
    truth: 'Terapia também é prevenção e autoconhecimento',
  },
  {
    myth: 'Psicólogo só fica em silêncio',
    truth: 'A escuta é ativa e a troca é constante',
  },
  {
    myth: 'É coisa de gente fraca',
    truth: 'Buscar ajuda é um dos atos mais corajosos que existem',
  },
  {
    myth: 'Online não funciona',
    truth: 'Estudos comprovam a mesma eficácia do atendimento presencial',
  },
  {
    myth: 'Preciso ir toda semana pra sempre',
    truth: 'A frequência é combinada e respeita seu momento',
  },
]

function MythItem({ myth, truth, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`myths__item glass-card reveal ${open ? 'myths__item--open' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <button className="myths__trigger" onClick={() => setOpen(!open)}>
        <span className="myths__myth-icon">❌</span>
        <span className="myths__myth-text">"{myth}"</span>
        <span className="myths__chevron">{open ? '−' : '+'}</span>
      </button>
      <div className="myths__answer">
        <div className="myths__answer-inner">
          <span className="myths__truth-icon">✅</span>
          <span className="myths__truth-text">{truth}</span>
        </div>
      </div>
    </div>
  )
}

function Myths() {
  return (
    <section className="myths section">
      <div className="container">
        <h2 className="myths__title reveal">Mitos sobre terapia</h2>
        <p className="myths__subtitle reveal">Clique pra descobrir a verdade</p>

        <div className="myths__list">
          {MYTHS.map((item, index) => (
            <MythItem key={index} myth={item.myth} truth={item.truth} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Myths
