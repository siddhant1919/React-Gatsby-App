import React from 'react'
import Heading from '../Reusable/Heading'

function Contact() {
  return (
    <section className='py-3 '>
      <Heading title="Contact Us" className="text center" />
      <div className='col-10 col-sm-8 mx-auto'>
        <form action='https://formspree.io/siddhantgangurde99@gmail.com' method='POST'>
          <div className='form-group'>
            <input className='form-control' type="text" name='name' id='name' placeholder='Your Name' />
          </div>

          <div className='form-group'>
            <input className='form-control' type="email" name='email' id='email' placeholder='Your Email' />
          </div>

          <div className='form-group'>
            <input className='form-control' type="number" name='mobile' id='mobile' placeholder='Your Mobile No.' />
          </div>

          <div className='form-group'>
            <textarea className='form-control' type="text" name='Desc' id='Desc' placeholder='Description...' />
          </div>
          <button type='submit' className='btn btn-outline-info btn-block'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
