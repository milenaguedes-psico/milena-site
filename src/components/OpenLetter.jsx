import React, { useState, useEffect, useRef } from 'react'
import '../styles/open-letter.css'

const LETTER_TEXT = 'Se você chegou até aqui, já deu o primeiro passo. Eu sei que buscar ajuda não é fácil — exige coragem, vulnerabilidade e um tanto de esperança. Quero que saiba que aqui você encontra um espaço sem julgamentos, onde pode ser exatamente quem é. Não existe problema pequeno demais. Se importa pra você, importa pra mim também. Vamos junto nessa? 💛'

function OpenLetter() {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayedText(LETTER_TEXT.slice(0, i))
      if (i >= LETTER_TEXT.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started])

  return (
    <section className="open-letter section" ref={sectionRef}>
      <div className="container">
        <h2 className="open-letter__title reveal">Carta aberta</h2>
        <div className="open-letter__card glass-card">
          <div className="open-letter__photo">
            <img src="/images/carta.jpg" alt="Milena" className="open-letter__photo-img" />
          </div>
          <div className="open-letter__content">
            <p className="open-letter__text">
              {displayedText}
              {displayedText.length < LETTER_TEXT.length && <span className="open-letter__cursor">|</span>}
            </p>
            {displayedText.length >= LETTER_TEXT.length && (
              <p className="open-letter__signature">— Milena Gomes Guedes | CRP 06/215913</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenLetter
