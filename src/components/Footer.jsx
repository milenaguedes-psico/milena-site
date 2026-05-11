import React, { useState } from 'react'
import '../styles/footer.css'

const JUNG_QUOTES = [
  'Quem olha para fora, sonha. Quem olha para dentro, desperta.',
  'O encontro de duas personalidades é como o contato de duas substâncias químicas: se houver alguma reação, ambas se transformam.',
  'Não é se tornando perfeito que se encontra a plenitude, mas aceitando a imperfeição.',
  'Até você tornar o inconsciente consciente, ele vai dirigir sua vida e você vai chamá-lo de destino.',
  'A solidão não vem de estar sem gente, mas de não conseguir comunicar as coisas que parecem importantes.',
]

const SITE_URL = typeof window !== 'undefined' ? window.location.href : ''

function Footer() {
  const [quote] = useState(JUNG_QUOTES[Math.floor(Math.random() * JUNG_QUOTES.length)])
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  function shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent('Olha esse site de uma psicóloga que achei! ' + SITE_URL)}`, '_blank')
  }

  function copyLink() {
    navigator.clipboard.writeText(SITE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Logo */}
        <div className="footer__brand">
          <span className="footer__logo">🦋 Milena Guedes | Psicóloga</span>
          <span className="footer__crp">CRP 06/215913</span>
        </div>

        {/* Social icons */}
        <div className="footer__social">
          <a href="https://wa.me/5511984143772" target="_blank" rel="noopener noreferrer" className="footer__social-item" aria-label="WhatsApp">
            <svg className="footer__icon footer__icon--whatsapp" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="footer__social-label">WhatsApp</span>
          </a>

          <a href="https://instagram.com/milenaguedes.psico" target="_blank" rel="noopener noreferrer" className="footer__social-item" aria-label="Instagram">
            <svg className="footer__icon footer__icon--instagram" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span className="footer__social-label">Instagram</span>
          </a>

          <a href="mailto:ctt.psimilenaguedes@gmail.com" className="footer__social-item" aria-label="Email">
            <svg className="footer__icon footer__icon--email" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="footer__social-label">Email</span>
          </a>
        </div>

        {/* Horários */}
        <p className="footer__hours">Horários: Seg–Sex | Manhã, Tarde e Noite</p>

        {/* Jung quote */}
        <blockquote className="footer__quote">
          <p>"{quote}"</p>
          <cite>— Carl Jung</cite>
        </blockquote>

        {/* Share */}
        <div className="footer__share">
          <button className="footer__share-btn" onClick={() => setShareOpen(!shareOpen)}>
            Compartilhar com alguém que precisa 💌
          </button>
          {shareOpen && (
            <div className="footer__share-options">
              <button onClick={shareWhatsApp}>WhatsApp</button>
              <button onClick={copyLink}>{copied ? 'Copiado! ✓' : 'Copiar link'}</button>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>Desenvolvido com 💛</p>
          <p>© 2026 Milena Gomes Guedes. Todos os direitos reservados.</p>
          <p className="footer__disclaimer">Este site não substitui atendimento profissional em casos de emergência.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
