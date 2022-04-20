import React from 'react'
import hero from '../../assets/hero-pic.jpg'
import './hero.css'

function Hero() {
  return (
    <section className="hero">
      <div 
      className="hero-content container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0"
      >
        <div className="flex flex-col mb-27 space-y-16 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            We Make Tommorow's Technology Today.
          </h1>
          <p className="max-w-sm md-text-left text-primary text-xl">
            We create a varying range of awesome technologies. From blazing fast websites, to mobile apps, to 
            desktop programms and much more.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="#" 
            className="px-5 pt-2 p-3 baseline text-primary bg-error rounded-full hover:bg-error-content"
            >
              Get Quotation
            </a>
          </div>
        </div>

        <div className='md:w-1/2'>
          <img className='hero-img' src={hero} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero