import React from 'react'
import '../styles/services.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Oi%20Milena!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20%F0%9F%92%9B'

const ITEMS = [
  {
    icon: '🖥️',
    text: 'Sessões de 50 minutos por videochamada — de onde você estiver.',
  },
  {
    icon: '📅',
    text: 'Segunda a sexta — manhã, tarde e noite (horários a combinar)',
  },
  {
    icon: '💳',
    text: <><strong>Formas de pagamento:</strong> Cartão de crédito (com parcelamento), PIX e outras formas a combinar</>,
  },
  {
    icon: '🧾',
    text: <><strong>Emissão de Nota Fiscal</strong> — Solicite reembolso ao seu plano de saúde</>,
  },
  {
    icon: '🔒',
    text: 'Sigilo profissional garantido',
  },
]

function Services() {
  return (
    <section id="atendimento" className="services section">
      <div className="container">
        <h2 className="services__title reveal">Atendimento 100% Online</h2>
        <p className="services__subtitle reveal">
          Psicoterapia com acolhimento, de qualquer lugar
        </p>

        <div className="services__card glass-card reveal">
          <div className="services__list">
            {ITEMS.map((item, index) => (
              <div key={index} className="services__item">
                <span className="services__item-icon">{item.icon}</span>
                <p className="services__item-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="services__cta">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar minha sessão 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
