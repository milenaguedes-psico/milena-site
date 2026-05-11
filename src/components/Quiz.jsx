import React, { useState } from 'react'
import '../styles/quiz.css'

const WHATSAPP_LINK = 'https://wa.me/5511984143772?text=Oi%20Milena!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20%F0%9F%92%9B'

const QUESTIONS = [
  'Você tem se sentido sobrecarregado(a) com frequência?',
  'Está difícil dormir ou relaxar?',
  'Sente que repete padrões que te prejudicam?',
  'Tem evitado situações sociais ou conversas difíceis?',
  'Sente que precisa de um espaço só seu pra desabafar?',
  'Tem se cobrado demais ultimamente?',
  'Sente que está no automático, sem propósito?',
]

function getResult(score) {
  if (score <= 2) {
    return {
      text: 'Que bom que você está se conhecendo! Terapia pode ser preventiva também. 💛',
      showCta: false,
    }
  }
  if (score <= 5) {
    return {
      text: 'Parece que algumas coisas estão pesando. Um espaço de escuta pode fazer diferença.',
      showCta: true,
    }
  }
  return {
    text: 'Você não precisa carregar isso sozinho(a). Vamos conversar? 💬',
    showCta: true,
  }
}

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)

  const progress = ((current) / QUESTIONS.length) * 100

  function handleAnswer(yes) {
    const newScore = yes ? score + 1 : score
    if (yes) setScore(newScore)

    if (current + 1 >= QUESTIONS.length) {
      setFinished(true)
      if (yes) setScore(newScore)
    } else {
      setCurrent(current + 1)
    }
  }

  function reset() {
    setCurrent(0)
    setScore(0)
    setFinished(false)
    setStarted(false)
  }

  const result = getResult(score)

  return (
    <section className="quiz section">
      <div className="container">
        <h2 className="quiz__title reveal">Será que preciso de terapia?</h2>
        <p className="quiz__subtitle reveal">Responda com sinceridade — sem julgamentos</p>

        <div className="quiz__card glass-card reveal">
          {!started ? (
            <div className="quiz__start">
              <p className="quiz__start-text">
                7 perguntas rápidas pra você refletir sobre como está se sentindo.
              </p>
              <button className="btn-primary" onClick={() => setStarted(true)}>
                Começar
              </button>
            </div>
          ) : !finished ? (
            <div className="quiz__question">
              <div className="quiz__progress">
                <div className="quiz__progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="quiz__counter">{current + 1} de {QUESTIONS.length}</span>
              <p className="quiz__question-text">{QUESTIONS[current]}</p>
              <div className="quiz__buttons">
                <button className="quiz__btn quiz__btn--yes" onClick={() => handleAnswer(true)}>
                  Sim
                </button>
                <button className="quiz__btn quiz__btn--no" onClick={() => handleAnswer(false)}>
                  Não
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz__result">
              <span className="quiz__result-emoji">🦋</span>
              <p className="quiz__result-text">{result.text}</p>
              {result.showCta && (
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary quiz__result-cta"
                >
                  Conversar no WhatsApp
                </a>
              )}
              <button className="quiz__reset" onClick={reset}>
                Refazer
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Quiz
