import React from 'react'
import '../styles/about.css'

function About() {
  return (
    <section id="sobre" className="about section">
      <div className="container">
        <div className="about__content reveal">
          <div className="about__text-wrapper">
            <h2 className="about__title">Sobre mim</h2>
            <span className="about__butterfly">🦋</span>

            <div className="about__text">
              <p>
                Sou psicóloga com formação em Psicologia Analítica (abordagem junguiana) e
                pós-graduanda em Psicologia Analítica Clínica pela PUC. Minha trajetória
                começou em 2020, quando descobri na prática o poder do vínculo terapêutico.
                Desde então, passei por contextos diversos — atendimento escolar,
                acompanhamento de crianças com necessidades específicas, vivências no sistema
                carcerário e clínica com adultos — experiências que ampliaram meu olhar sobre
                o sofrimento humano e me trouxeram até aqui.
              </p>
              <p>
                Hoje, meu foco é o atendimento clínico de adultos e adolescentes, oferecendo
                um espaço seguro de escuta e autoconhecimento. Acredito que cada pessoa
                carrega em si os recursos para sua própria transformação — e meu papel é
                caminhar junto nesse processo.
              </p>
            </div>
          </div>

          <div className="about__photo reveal">
            <img src="/images/sobre.jpg" alt="Milena Gomes Guedes" className="about__photo-img" />
          </div>

          <div className="about__badge glass-card">
            <div className="about__badge-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <span className="about__badge-label">CRP</span>
            <span className="about__badge-number">06/215913</span>
            <span className="about__badge-text">Conselho Regional de Psicologia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
