import React from 'react'
import { Link } from 'gatsby'

function DualInfo({ title, imageLink }) {
  return (
    <section className='my-4 py-4 bg-theme'>
      <div className='container'>
        <div className='col text-center-mb-4'>
          <h1 className='display-3 text-center'>{title}</h1>
        </div>
        <div className='row'>
          <div className='col-8 mx-auto'>
            <p className='lead text-white mb-5'>
              If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.f you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.
            </p>
          </div>
          <div className='col-4'>
            <div className="card bg-dark" style={{width: "18rem"}}>
              <img src={imageLink} className="card-img-top" alt="Image goes here" />
                <div className="card-body">
                  <h5 className="card-title text-white">Just Click Photos</h5>
                  <p className="card-text text-white">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.</p>
                  <a href="#" className="btn btn-warning btn-block">{title}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfo
