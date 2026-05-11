import React, { useState, useEffect } from 'react'
import '../styles/header.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

const MOON_PHASES = [
  { emoji: '🌑', name: 'Lua Nova' },
  { emoji: '🌒', name: 'Lua Crescente' },
  { emoji: '🌓', name: 'Quarto Crescente' },
  { emoji: '🌔', name: 'Gibosa Crescente' },
  { emoji: '🌕', name: 'Lua Cheia' },
  { emoji: '🌖', name: 'Gibosa Minguante' },
  { emoji: '🌗', name: 'Quarto Minguante' },
  { emoji: '🌘', name: 'Lua Minguante' },
]

function getMoonPhase() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  // Simplified moon phase calculation
  let c = 0, e = 0, jd = 0, b = 0
  if (month < 3) { c = year - 1; e = month + 12 } else { c = year; e = month }
  jd = Math.floor(365.25 * (c + 4716)) + Math.floor(30.6001 * (e + 1)) + day - 1524.5
  b = jd - 2451550.1
  b = b / 29.530588853
  b = b - Math.floor(b)
  const phase = Math.round(b * 8) % 8
  return MOON_PHASES[phase]
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moon] = useState(getMoonPhase())

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Abordagem', href: '#abordagem' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <a href="#hero" className="header__logo">
          <img src="/images/logo.png" alt="Logo" className="header__logo-img" />
          <span className="header__logo-text">Milena Guedes</span>
          <span className="header__moon" title={moon.name}>{moon.emoji}</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary header__cta">
            Agendar
          </a>
        </nav>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
