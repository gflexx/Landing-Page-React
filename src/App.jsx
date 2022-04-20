import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div className=''>
      <div className="md:top-items">
        <Nav/>
        <Hero/>
      </div>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App