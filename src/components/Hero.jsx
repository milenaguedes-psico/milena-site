import React, { useState, useEffect } from 'react'
import '../styles/hero.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Oi%20Milena!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20%F0%9F%92%9B'

const FRASES = [
  'O autoconhecimento é o primeiro passo para a transformação.',
  'Cada jornada interior começa com a coragem de olhar para si.',
  'Na escuta acolhedora, encontramos espaço para florescer.',
  'A psicoterapia é um convite para se reconectar com sua essência.',
  'Transformar dor em consciência é um ato de coragem e amor próprio.',
  'O inconsciente guarda as chaves para a sua individuação.',
  'Permita-se ser acompanhada nessa jornada de autodescoberta.',
  'A alma fala por meio de símbolos — aprender a ouvi-la é libertador.',
]

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Bom dia'
  if (hour >= 12 && hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

function getRandomFrase() {
  return FRASES[Math.floor(Math.random() * FRASES.length)]
}

function Hero() {
  const [greeting] = useState(getGreeting())
  const [frase] = useState(getRandomFrase())

  return (
    <section id="hero" className="hero">
      {/* Círculo de respiração */}
      <div className="hero__breathe-circle"></div>
      <div className="hero__breathe-circle hero__breathe-circle--2"></div>

      {/* Borboletas decorativas */}
      <span className="hero__butterfly hero__butterfly--1">🦋</span>
      <span className="hero__butterfly hero__butterfly--2">🦋</span>
      <span className="hero__butterfly hero__butterfly--3">🦋</span>

      <div className="hero__content container">
        <div className="hero__photo">
          <img src="/images/hero.jpg" alt="Milena Gomes Guedes — Psicóloga" />
        </div>
        <p className="hero__greeting">{greeting} ✨</p>

        <h1 className="hero__title">
          Milena Gomes Guedes
        </h1>

        <p className="hero__subtitle">
          Psicóloga Clínica — CRP 06/215913
        </p>

        <p className="hero__frase">"{frase}"</p>

        <p className="hero__desc">
          Psicologia Analítica (Jung) · Atendimento online<br />
          Adultos e adolescentes
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hero__cta"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Agendar minha sessão
        </a>
      </div>
    </section>
  )
}

export default Hero
