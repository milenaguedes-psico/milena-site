import React, { useState, useEffect, useRef, useCallback } from 'react'
import '../styles/testimonials.css'

const TESTIMONIALS = [
  {
    text: 'A Milena tem um jeito de ouvir que faz a gente se sentir seguro(a) de verdade. Nunca me senti julgado(a). Faço terapia com ela há quase dois anos e me sinto muito melhor.',
    author: 'C.M., 31 anos',
  },
  {
    text: 'Ela me ajudou a entender sonhos e padrões que eu repetia sem perceber. A abordagem junguiana faz total sentido pra mim — é profundo, mas sempre com acolhimento.',
    author: 'R.S., 27 anos',
  },
  {
    text: 'Comecei sem saber o que esperar de terapia online, mas a Milena me deixou tão à vontade que esqueci que era por tela. É como se ela realmente estivesse ali presente.',
    author: 'A.L., 35 anos',
  },
  {
    text: 'A Milena é uma profissional incrível. Me sinto acolhido(a) em cada sessão. Ela me auxiliou a olhar pras minhas questões sem medo e hoje me conheço muito mais.',
    author: 'T.F., 29 anos',
  },
  {
    text: 'Faz um ano e meio que passo com a Milena e foi uma das melhores decisões que tomei. Ela é atenta, cuidadosa e sabe o momento certo de me desafiar e de me acolher.',
    author: 'J.P., 42 anos',
  },
  {
    text: 'Cheguei na terapia num momento difícil e a Milena me recebeu com tanta calma que eu soube ali que tinha encontrado a profissional certa. Já são 8 meses e tô me sentindo muito melhor.',
    author: 'L.R., 24 anos',
  },
  {
    text: 'Sou adolescente e tinha muita vergonha de fazer terapia. A Milena me fez sentir que tá tudo bem não estar bem. Ela é muito leve e ao mesmo tempo muito atenciosa.',
    author: 'B.S., 17 anos',
  },
  {
    text: 'A abordagem dela com sonhos e símbolos mudou minha forma de me entender. Cada sessão é como montar um quebra-cabeça sobre mim mesmo.',
    author: 'D.M., 38 anos',
  },
  {
    text: 'Tentei outros psicólogos antes e nunca me senti realmente ouvido(a). Com a Milena é diferente — ela lembra de tudo, conecta as coisas e me ajuda a enxergar o que eu não via.',
    author: 'F.A., 33 anos',
  },
  {
    text: 'Minha ansiedade era forte e atrapalhava meu dia a dia. Depois de 6 meses com a Milena, aprendi ferramentas que uso toda semana. Ela me ajudou muito com minha saúde mental.',
    author: 'P.H., 28 anos',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(goNext, 5000)
    return () => clearInterval(intervalRef.current)
  }, [paused, goNext])

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="testimonials__title reveal">O que dizem sobre a terapia</h2>

        <div
          className="testimonials__carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Arrows - desktop */}
          <button className="testimonials__arrow testimonials__arrow--prev" onClick={goPrev} aria-label="Anterior">
            ‹
          </button>

          <div className="testimonials__track">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className={`testimonials__slide glass-card ${
                  index === current ? 'testimonials__slide--active' : ''
                }`}
              >
                <p className="testimonials__text">"{item.text}"</p>
                <div className="testimonials__footer">
                  <span className="testimonials__stars">⭐⭐⭐⭐⭐</span>
                  <span className="testimonials__author">— {item.author}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonials__arrow testimonials__arrow--next" onClick={goNext} aria-label="Próximo">
            ›
          </button>

          {/* Mobile arrows */}
          <div className="testimonials__mobile-nav">
            <button className="testimonials__mobile-arrow" onClick={goPrev} aria-label="Anterior">‹</button>
            <button className="testimonials__mobile-arrow" onClick={goNext} aria-label="Próximo">›</button>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${
                  index === current ? 'testimonials__dot--active' : ''
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="testimonials__disclaimer reveal">
          Depoimentos ilustrativos baseados em experiências comuns de terapia
        </p>
      </div>
    </section>
  )
}

export default Testimonials
