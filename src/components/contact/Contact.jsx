import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="flex justify-center mb-9">
          <h3 className="font-bold text-3xl text-primary">Write to Us</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center container mx-auto px-5 px-5">
        <div className='md:w-1/2'>
          <form action="" method='post'>
            <input type="text" name='name' placeholder="Your name" class="input input-bordered input-info w-full"/>
            <input type="text" name='subject' placeholder="Subject" class="input input-bordered input-info w-full mt-6"/>
            <textarea name='message' class="textarea textarea-info w-full mt-6" cols={4} placeholder="Message"></textarea>

            <div class='flex items-center justify-center mt-12'>
              <button className='btn btn-outline btn-success float-center'>Submit</button>
            </div>
            
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact