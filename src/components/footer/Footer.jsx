import React from 'react'
import {BsGithub, BsFacebook, BsLinkedin} from 'react-icons/bs'
import './footer.css'

function Footer() {
  return (
    <section className='bg-secondary-focus mt-12 pt-16 pb-24 glass'>
      <div className="container px-6 mx-auto">
        <div className='flex justify-center space-x-9'>
          <div className='flex'>
            <h3 className="font-bold text-4xl">Unduloid</h3>
          </div>
          <div className="icons hover:text-primary">
            <a href="">
              <BsGithub/>
            </a>
          </div>
          <div className="icons hover:text-primary">
            <a href="">
              <BsFacebook/>
            </a>
          </div>
          <div className="icons hover:text-primary">
            <a href="">
              <BsLinkedin/>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer