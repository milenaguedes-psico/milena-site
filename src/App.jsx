import React, { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Trajectory from './components/Trajectory'
import Approach from './components/Approach'
import Individuation from './components/Individuation'
import ShadowLight from './components/ShadowLight'
import ForWho from './components/ForWho'
import DayInTherapy from './components/DayInTherapy'
import WhyOnline from './components/WhyOnline'
import TherapySpace from './components/TherapySpace'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import BeforeAfter from './components/BeforeAfter'
import TherapyIsNot from './components/TherapyIsNot'
import Myths from './components/Myths'
import Quiz from './components/Quiz'
import Checklist from './components/Checklist'
import TransformText from './components/TransformText'
import Testimonials from './components/Testimonials'
import Counters from './components/Counters'
import OpenLetter from './components/OpenLetter'
import Playlist from './components/Playlist'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CrisisButton from './components/CrisisButton'
import SelfCarePopup from './components/SelfCarePopup'
import Chatbot from './components/Chatbot'
import FloatingButterfly from './components/FloatingButterfly'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <LoadingScreen />
      <Header />
      <CrisisButton />
      <FloatingButterfly />

      <main>
        <Hero />
        <About />
        <Trajectory />
        <Approach />
        <Individuation />
        <ShadowLight />
        <ForWho />
        <DayInTherapy />
        <WhyOnline />
        <TherapySpace />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <TherapyIsNot />
        <Myths />
        <Quiz />
        <Checklist />
        <TransformText />
        <Testimonials />
        <Counters />
        <OpenLetter />
        <Playlist />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <Chatbot />
      <SelfCarePopup />
    </>
  )
}

export default App
