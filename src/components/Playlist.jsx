import React from 'react'
import '../styles/playlist.css'

const SONGS = [
  { artist: 'Ludovico Einaudi', title: 'Nuvole Bianche' },
  { artist: 'Ólafur Arnalds', title: 'Near Light' },
  { artist: 'Yiruma', title: 'River Flows in You' },
  { artist: 'Max Richter', title: 'On the Nature of Daylight' },
  { artist: 'Nils Frahm', title: 'Says' },
  { artist: 'Agnes Obel', title: 'Aventine' },
  { artist: 'Marconi Union', title: 'Weightless' },
  { artist: 'Brian Eno', title: 'An Ending (Ascent)' },
  { artist: 'Bon Iver', title: 'Holocene' },
  { artist: 'Sigur Rós', title: 'Hoppípolla' },
]

function Playlist() {
  return (
    <section className="playlist section">
      <div className="container">
        <h2 className="playlist__title reveal">🎵 Pra depois da sessão</h2>
        <p className="playlist__subtitle reveal">Uma playlist pra acompanhar você nos momentos de silêncio, reflexão ou simplesmente pra respirar. 💛</p>
        <div className="playlist__card glass-card reveal">
          <ol className="playlist__list">
            {SONGS.map((song, i) => (
              <li key={i} className="playlist__item">
                <span className="playlist__number">{i + 1}</span>
                <span className="playlist__info">
                  <span className="playlist__artist">{song.artist}</span>
                  <span className="playlist__sep">—</span>
                  <span className="playlist__song">{song.title}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="playlist__cta">
            <a href="#" className="btn-primary">Ouvir no Spotify 🎧</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playlist
