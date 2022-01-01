import React from 'react'
import { Link } from 'gatsby'

function Demo({heading, title}) {
  return (
    
      <section className='bg-theme my-5 py-4'>
      <div className='container'>
      <div className='row'>
      <div className='col text-center mb-4'>
        <h1 className='display-3'>{title}</h1>
      </div>
    </div>
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center'>
            <p className='lead text-white mb-4'>
            If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.
            </p>
            <Link to='/about/'>
              <button className='btn btn-warning btn-lg'>
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Demo
