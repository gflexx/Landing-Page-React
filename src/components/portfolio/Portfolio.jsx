import React from 'react'
import web from '../../assets/liked_itmes.png'
import audio from '../../assets/audio.png'
import port1 from '../../assets/port5.png'
import port2 from '../../assets/port67.png'
import './portfolio.css'

function Portfolio() {
  return (
    <section className='container max-auto p-9 pt-16' id="portfolio">
      <div className="flex flex-col md:flex-row mt-10 space-y-0 items-center">
        <div className='flex flex-col mb-9 space-y-16 md:w-1/3'>
          <h2 className="max-w-md text-3xl font-bold text-center md:text-left md:text-4xl">
                Check out a small sample of our work.
          </h2>
          <span className='max-w-sm md-text-left text-primary text-lg'>
            <p>Our work ranges from:</p>
            <ul className='ml-6 mt-2 text-primary-focus space-y-4'>
              <li><span class="badge badge-error badge-outline badge-lg mr-5">1</span> E-commerce Websites</li>
              <li><span class="badge badge-error badge-outline badge-lg mr-5">2</span> E-commerce Applications</li>
              <li><span class="badge badge-error badge-outline badge-lg mr-5">3</span> Bloggs</li>
              <li><span class="badge badge-error badge-outline badge-lg mr-5">4</span> Content Management Website</li>
            </ul>
          </span>
        </div>

        <div className='md:w-2/3'>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img src={audio} class="w-full"/> 
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
              </div>
            </div> 

            <div id="slide2" class="carousel-item relative w-full">
              <img src={web} class="w-full"/>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
              </div>
            </div> 

            <div id="slide3" class="carousel-item relative w-full">
              <img src={port1} class="w-full"/> 
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
              </div>
            </div> 

            <div id="slide4" class="carousel-item relative w-full">
              <img src={port2} class="w-full"/> 
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
      
        </div>

      </div>

      <div className="flex justify-center mt-10 mb-9">
        <a href="#" 
          className="px-5 pt-2 p-3 baseline text-primary bg-error rounded-full hover:bg-error-content"
         >
            Get Quotation
        </a>
      </div>

    </section>
  )
}

export default Portfolio