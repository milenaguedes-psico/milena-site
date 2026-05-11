import React from 'react'
import '../styles/shadow-light.css'

function ShadowLight() {
  return (
    <section className="shadow-light section">
      <div className="shadow-light__bg">
        <div className="shadow-light__dark"></div>
        <div className="shadow-light__light"></div>
      </div>

      <div className="shadow-light__content container">
        <div className="shadow-light__text reveal">
          <p className="shadow-light__line shadow-light__line--1">
            A sombra é tudo aquilo que você esconde —
          </p>
          <p className="shadow-light__line shadow-light__line--2">
            de si mesma e do mundo.
          </p>
          <p className="shadow-light__line shadow-light__line--3">
            Não porque é ruim, mas porque dói.
          </p>
          <p className="shadow-light__line shadow-light__line--4">
            Na terapia, a gente acende a luz ali dentro.
          </p>
          <p className="shadow-light__line shadow-light__line--5">
            E descobre que até a sombra tem algo pra ensinar.
          </p>
        </div>
        <span className="shadow-light__butterfly">🦋</span>
      </div>
    </section>
  )
}

export default ShadowLight
