import React, { useState, useEffect, useRef } from 'react'
import '../styles/transform-text.css'

const PHRASES = [
  'Eu não me sinto bem...',
  'Estou aprendendo a me ouvir...',
  'Hoje eu me conheço e me respeito.',
]

function TransformText() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Calculate how far through the section we've scrolled
      const scrollProgress = (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      const clamped = Math.max(0, Math.min(1, scrollProgress))

      if (clamped < 0.33) {
        setActiveIndex(0)
      } else if (clamped < 0.66) {
        setActiveIndex(1)
      } else {
        setActiveIndex(2)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="transform-text" ref={sectionRef}>
      <div className="transform-text__container container">
        <div className="transform-text__phrases">
          {PHRASES.map((phrase, index) => (
            <p
              key={index}
              className={`transform-text__phrase ${
                index === activeIndex ? 'transform-text__phrase--active' : ''
              }`}
            >
              {phrase}
            </p>
          ))}
        </div>
        <span className="transform-text__butterfly">🦋</span>
      </div>
    </section>
  )
}

export default TransformText
