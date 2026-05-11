import React, { useState } from 'react'
import '../styles/checklist.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

const SIGNS = [
  'Dificuldade para dormir',
  'Irritabilidade constante',
  'Sensação de vazio',
  'Choro frequente sem motivo aparente',
  'Procrastinação excessiva',
  'Isolamento social',
  'Pensamentos acelerados',
  'Cansaço que não passa com descanso',
  'Dificuldade de concentração',
  'Perda de interesse em coisas que gostava',
]

function getResult(count) {
  if (count <= 3) {
    return { text: 'Autocuidado é sempre bem-vindo 💛', showCta: false }
  }
  if (count <= 6) {
    return { text: 'Esses sinais merecem atenção. Que tal conversar sobre? 💬', showCta: true }
  }
  return { text: 'Você não precisa passar por isso sozinho(a). Estou aqui. 💜', showCta: true }
}

function Checklist() {
  const [checked, setChecked] = useState(new Set())

  function toggle(index) {
    const next = new Set(checked)
    if (next.has(index)) {
      next.delete(index)
    } else {
      next.add(index)
    }
    setChecked(next)
  }

  const count = checked.size
  const result = getResult(count)

  return (
    <section className="checklist section">
      <div className="container">
        <h2 className="checklist__title reveal">Sinais de que você precisa de ajuda</h2>
        <p className="checklist__subtitle reveal">Marque o que se aplica a você</p>

        <div className="checklist__card glass-card reveal">
          <div className="checklist__items">
            {SIGNS.map((sign, index) => (
              <label key={index} className="checklist__item">
                <input
                  type="checkbox"
                  checked={checked.has(index)}
                  onChange={() => toggle(index)}
                  className="checklist__input"
                />
                <span className="checklist__checkmark"></span>
                <span className="checklist__label">{sign}</span>
              </label>
            ))}
          </div>

          {count > 0 && (
            <div className="checklist__result">
              <div className="checklist__counter">
                <span className="checklist__count">{count}</span> de {SIGNS.length} marcados
              </div>
              <p className="checklist__result-text">{result.text}</p>
              {result.showCta && (
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary checklist__cta"
                >
                  Conversar no WhatsApp
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Checklist
