import React, { useState, useEffect, useRef } from 'react'
import '../styles/testimonials.css'

const TESTIMONIALS = [
  {
    text: 'A Milena tem um jeito de ouvir que faz a gente se sentir seguro(a) de verdade. Nunca me senti julgado(a). Faço terapia com ela há quase dois anos e a diferença em mim é gigante.',
    author: 'C.M., 31 anos',
  },
  {
    text: 'Ela me ajudou a entender sonhos e padrões que eu repetia sem perceber. A abordagem junguiana faz total sentido pra mim — é profundo, mas sempre com acolhimento.',
    author: 'R.S., 27 anos',
  },
  {
    text: 'Comecei sem saber o que esperar de terapia online, mas a Milena me deixou tão à vontade que esqueci que era por tela. É como se ela realmente estivesse ali do meu lado.',
    author: 'A.L., 35 anos',
  },
  {
    text: 'A Milena é uma profissional incrível. Me sinto acolhido(a) em cada sessão. Ela me ajudou a olhar pras minhas sombras sem medo e hoje me conheço muito mais.',
    author: 'T.F., 29 anos',
  },
  {
    text: 'Faz um ano e meio que passo com a Milena e posso dizer que foi a melhor decisão da minha vida. Ela é atenta, cuidadosa e sabe exatamente quando me desafiar e quando me acolher.',
    author: 'J.P., 42 anos',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="testimonials__title reveal">O que dizem sobre a terapia</h2>

        <div
          className="testimonials__carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
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
