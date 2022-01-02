import React, { Component } from 'react'
import Img from 'gatsby-plugin-image'
import Heading from '../Reusable/Heading'


const getCaty = (items) => {
  let holdItem = items.map(items => {
    return items.node.category
  })

  let holdCategories = new Set(holdItem)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories

}


export class CourseCart extends Component {

  constructor(props) {

    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges)
    }
  }

  catyClicked = category => {
    let keepItsafe = [...this.state.courses]

    if (category === 'all') {
      this.setState(() => {
        return {
          mycourses: keepItsafe
        }
      })
    }

    else {
      let holdme = keepItsafe.filter(({node}) => node.category === category)
      this.setState(() =>{
        return {
          mycourses: holdme
        }
      })
    }
  }
  render() {
    // console.log(this.state.courses)



    return (
      <section className='py-5 '>
        <div className='container text-center'>
          <Heading title="Courses" />
          <div className='row my-3'>
            <div className='col mx-auto text-center'>
              {
                this.state.mycategories.map((category, index) => {
                  return (
                    <button 
                    type='button'
                    className='btn btn-info m-3 px-3'
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                    >
                      {category}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className='row'>
            {
              this.state.mycourses.map(({ node }) => {
                return (
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
