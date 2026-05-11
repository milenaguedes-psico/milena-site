import React from 'react'
import '../styles/trajectory.css'

const TIMELINE_ITEMS = [
  {
    year: '2020',
    title: 'Acompanhante Terapêutica (crianças TEA)',
    description: 'Onde descobri a potência do vínculo e da escuta como ferramentas de transformação.',
  },
  {
    year: '2021',
    title: 'Psicologia Escolar',
    description: 'Aprendi a olhar o sujeito dentro do seu contexto, enxergando além do sintoma.',
  },
  {
    year: '2023–2024',
    title: 'Estágio Clínico com adultos',
    description: 'Encontrei meu lugar: a escuta profunda e o trabalho com o inconsciente.',
  },
  {
    year: '2024',
    title: 'Vivências em contexto carcerário',
    description: 'Ampliou meu olhar sobre a sombra, o sofrimento e a capacidade humana de ressignificação.',
  },
  {
    year: '2025',
    title: 'Clínica própria',
    description: 'Hoje atendo guiada pela Psicologia Analítica, acompanhando cada pessoa no seu processo de individuação.',
  },
  {
    year: 'Em andamento',
    title: 'Pós-graduação PUC',
    description: 'Aprofundando cada vez mais na abordagem que escolhi como caminho.',
  },
]

function Trajectory() {
  return (
    <section id="trajetoria" className="trajectory section">
      <div className="container">
        <h2 className="trajectory__title reveal">Minha trajetória</h2>
        <p className="trajectory__subtitle reveal">O caminho até a Psicologia Analítica</p>

        <div className="trajectory__timeline">
          {TIMELINE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="trajectory__item reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="trajectory__marker">
                <span className="trajectory__dot"></span>
                {index < TIMELINE_ITEMS.length - 1 && (
                  <span className="trajectory__line"></span>
                )}
              </div>
              <div className="trajectory__card glass-card">
                <span className="trajectory__year">{item.year}</span>
                <h3 className="trajectory__card-title">{item.title}</h3>
                <p className="trajectory__card-desc">"{item.description}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trajectory__support reveal">
          <span className="trajectory__support-butterfly">🦋</span>
          <p>
            Cada experiência me trouxe até a Psicologia Analítica. O trabalho com crianças
            me ensinou sobre <strong>vínculo</strong>. A escola me ensinou sobre{' '}
            <strong>contexto</strong>. O sistema carcerário me ensinou sobre{' '}
            <strong>sombras</strong>. E a clínica me mostrou que é na relação terapêutica
            que a transformação acontece.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Trajectory
