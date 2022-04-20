import React from 'react'
import { AiFillAndroid, AiOutlineGlobal, AiTwotoneApi} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import './about.css'

function About() {
  return (
    <section id="about" className="mt-9 bg-base-100 pt-16 pb-28 glass">
        <h3 className="text-center font-bold text-3xl text-primary">About Us</h3>
        <div className="flex items-center mx-auto sm:w-3/4 md:w-1/3 mt-9 mb-9">
          <h6 className="text-center text-xl text-primary-focus">
            We are a Software House Company based in Nairobi, Kenya. We can build you any type of consumer software. 
            Delivering software for small, medium and large businesses.
          </h6>
        </div>
        <div 
        className="grid md:flex md:flex-row md:items-center gap-9 place-content-center mt-9 mx-7">
    
            <div className="card card-bordered border-error bg-base-100 shadow-xl w-96 sm:w-100 card-normal sm:place-self-auto">
              <figure className='text-secondary-content icons'>
                <AiOutlineGlobal className='hover:text-error'/>
              </figure>
              <div className="card-body ">
                <div className="card-title text-center">Web Deveopment</div>
                <p className="text-primary">
                  We make the best websites around, fully responsive using state of the art technologies
                </p>
              </div>
            </div>

            <div className="card card-bordered border-error bg-base-100 shadow-xl w-96 card-normal sm:place-self-auto">
            <figure className='text-secondary-content icons '>
              <AiFillAndroid className='hover:text-success'/>
            </figure>
              <div className="card-body">
                <div className="text-center card-title">Mobile Development</div>
                <p className="text-primary">
                  Want an app for your customers? Look no further, we make really great Android applications.
                </p>
              </div>
            </div>

            <div className="card card-bordered border-error bg-base-100 shadow-xl w-96 card-normal ">
            <figure className='text-secondary-content icons'>
              <FaGamepad className='hover:text-error'/>
            </figure>
              <div className="card-body">
                <div className="card-title text-center">Game Development</div>
                <p className="text-primary">
                  If you have a great game idea, why don't you let us make your adventures possible for you? 
                </p>
              </div>
            </div>

        </div>
    </section>
  )
}

export default About