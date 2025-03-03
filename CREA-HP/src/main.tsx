import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Features from './components/features'
import Problems from './components/problems'
import Capabilities from './components/capabilities'
import CaseStudies from './components/case-studies'
import Process from './components/process'
import TrainingProgram from './components/training-program'
import Contact from './components/contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-full min-w-full overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problems />
        <Features />
        <Capabilities />
        <CaseStudies />
        <Process />
        <TrainingProgram />
        <Contact />
      </main>
      <Footer />
    </div>
  </React.StrictMode>,
)
