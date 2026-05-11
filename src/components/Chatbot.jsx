import React, { useState, useRef, useEffect } from 'react'
import chatData from '../data/chatbot-responses.json'
import '../styles/chatbot.css'

function MgAvatar({ size = 28 }) {
  return (
    <span className="mg-avatar" style={{ width: size, height: size, minWidth: size, fontSize: size * 0.4 }}>
      MG
    </span>
  )
}

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ type: 'bot', text: chatData.greeting }])
  const [showOptions, setShowOptions] = useState(true)
  const [input, setInput] = useState('')
  const messagesRef = useRef(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  function handleOption(option) {
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: option.label },
      { type: 'bot', text: option.response, showWhatsApp: option.showWhatsApp },
    ])
    setShowOptions(false)
    setTimeout(() => setShowOptions(true), 500)
  }

  function handleSend() {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: input },
      { type: 'bot', text: chatData.fallback, showWhatsApp: true },
    ])
    setInput('')
  }

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)} aria-label="Chat">
        {open ? '✕' : <MgAvatar size={32} />}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header__left">
              <MgAvatar size={28} />
              <span className="chatbot-header__title">Milena • Assistente Virtual</span>
            </div>
            <button className="chatbot-header__close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${msg.type}`}>
                {msg.type === 'bot' && <MgAvatar size={22} />}
                <div className="chatbot-msg__content">
                  {msg.text}
                  {msg.showWhatsApp && (
                    <a href={chatData.whatsappLink} target="_blank" rel="noopener noreferrer" className="chatbot-wa-link">
                      WhatsApp →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showOptions && (
            <div className="chatbot-options">
              {chatData.options.slice(0, 6).map((opt, i) => (
                <button key={i} className="chatbot-option" onClick={() => handleOption(opt)}>
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
            />
            <button onClick={handleSend}>→</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
