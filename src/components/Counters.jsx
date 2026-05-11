import React, { useState, useEffect, useRef } from 'react'
import '../styles/counters.css'

const COUNTERS = [
  { target: 200, prefix: '+', suffix: '', label: 'sessões realizadas' },
  { target: 80, prefix: '+', suffix: '', label: 'vidas transformadas' },
  { target: 5, prefix: '+', suffix: '', label: 'anos de experiência' },
  { target: 98, prefix: '', suffix: '%', label: 'de satisfação' },
]

function useCountUp(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    let frame

    function animate() {
      start += increment
      if (start >= target) {
        setCount(target)
        return
      }
      setCount(Math.floor(start))
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, target, duration])

  return count
}

function CounterItem({ target, prefix, suffix, label, isVisible }) {
  const count = useCountUp(target, isVisible)

  return (
    <div className="counters__item">
      <span className="counters__number">
        {prefix}{count}{suffix}
      </span>
      <span className="counters__label">{label}</span>
    </div>
  )
}

function Counters() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="counters section" ref={sectionRef}>
      <div className="container">
        <div className="counters__grid reveal">
          {COUNTERS.map((counter, index) => (
            <CounterItem
              key={index}
              target={counter.target}
              prefix={counter.prefix}
              suffix={counter.suffix}
              label={counter.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counters
