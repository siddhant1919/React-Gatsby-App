import React, { Component } from 'react'
import Img from 'gatsby-plugin-image'
import Heading from '../Reusable/Heading'


export class CourseCart extends Component {
  
  constructor(props){
    
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges
    }
  }
  render() {
    // console.log(this.state.courses)
    
    
    
    return (
      <section className='py-5 '>
       <div className='container text-center'>
          <Heading title="Courses" />
          <div className='row'>
            {
              this.state.mycourses.map(({node}) => {
                return(
                  <div key={node.id} className='col-11 col-md-6 d-flex mx-auto'>
                    {/* <Img fixed={node.image.fixed} /> */}
                    
                    <img src="{node.image.fixed}" alt='image' />
                    <div className='flex-grow-1 px-3'>
                      <div className='d- justify-content-between '>
                        <h6 className='mb-0'>{node.title}</h6>
                        <h6 className='mb-0 text-success '>{node.price}</h6>
                      </div>
                      <p className=''>
                        <small>{node.description.description}</small>
                      </p>
                      <button
                      data-item-id={node.id} 
                      data-item-name={node.title} 
                      data-item-price={node.price} 
                      data-item-url="http://learncodeonline.in" 
                      data-item-image={node.image.id} 
                      className='btn btn-warning snipcart-add-item'>join now</button>

                    </div>
                    
                  </div>
                )
              })
            }
          </div>
       </div>
      </section>
    )
  }
}

export default CourseCart
