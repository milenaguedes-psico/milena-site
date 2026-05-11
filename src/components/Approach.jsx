import React from 'react'
import '../styles/approach.css'

const TOOLTIPS = {
  inconsciente: 'Tudo aquilo que influencia você sem que perceba — memórias, padrões, desejos.',
  sombra: 'Tudo aquilo que não reconhecemos em nós mesmos, mas que nos influencia.',
  individuação: 'O processo de se tornar quem você realmente é — inteiro, integrado.',
  símbolos: 'Imagens que o inconsciente usa pra se comunicar — aparecem em sonhos, arte, atos falhos.',
}

function Tooltip({ word, definition }) {
  return (
    <span className="tooltip-wrapper">
      <span className="tooltip-trigger">{word}</span>
      <span className="tooltip-content">{definition}</span>
    </span>
  )
}

function Approach() {
  return (
    <section id="abordagem" className="approach section">
      <div className="container">
        <h2 className="approach__title reveal">Abordagem terapêutica</h2>
        <p className="approach__subtitle reveal">Psicologia Analítica — Carl Gustav Jung</p>

        <div className="approach__card glass-card reveal">
          <div className="approach__card-content">
            <p>
              A Psicologia Analítica, desenvolvida por Carl Jung, entende que o
              autoconhecimento é o caminho para a transformação. Na terapia, exploramos
              juntos os conteúdos do{' '}
              <Tooltip word="inconsciente" definition={TOOLTIPS.inconsciente} /> —
              sonhos, <Tooltip word="símbolos" definition={TOOLTIPS.símbolos} />,
              padrões que se repetem — para que você compreenda quem é de verdade, além
              das máscaras do dia a dia.
            </p>
            <p className="approach__highlight">
              Não é sobre "consertar" algo em você.<br />
              <strong>É sobre se encontrar.</strong>
            </p>
          </div>
        </div>

        <div className="approach__concepts reveal">
          <h3 className="approach__concepts-title">Conceitos centrais</h3>
          <div className="approach__concepts-grid">
            {Object.entries(TOOLTIPS).map(([word, definition]) => (
              <div key={word} className="approach__concept-card glass-card">
                <h4 className="approach__concept-word">{word}</h4>
                <p className="approach__concept-def">{definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
