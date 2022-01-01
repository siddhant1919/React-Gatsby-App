import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.png'
import { FaCartArrowDown, } from "react-icons/fa"
import About from '../../pages/About'

export class Navbar extends Component {

  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [{
      id: 1,
      text: "Home",
      url: "/",

    }, {
      id: 2,
      text: "About",
      url: '/About',
    }, {
      id: 3,
      text: "Services",
      url: "/Services",
    }, {
      id: 4,
      text: "Contact",
      url: "/Contact",
    }]

  }

  myToggler = () => {
    this.state.navbarState ? this.setState({
      navbarState: false,
      navbarClass: "collapse navbar-collapse"
    }) : this.setState({
      navbarState: true,
      navbarClass: "collapse navbar-collapse show"
    })
  }


  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-theme text-white '>
        <Link to="/" className='navbar-brand ml-5'>
          <img src={logo} alt="Logo is here" width="40px" />
        </Link>
        <button className='navbar-toggler' type='button' onClick={this.myToggler}>
          <span className='text-white'>menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className='navbar-nav ml-auto mr-5 '>
            {
              this.state.menus.map((menu) => {
                return (
                  <li key={menu.id} className='nav-item'>
                    <Link to={menu.url} className='nav-link text-white '>
                      {menu.text}
                    </Link>
                  </li>
                )
              })
            }

            {/* <li className='nav-item'>
              <Link to="/" className='nav-link text-white'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/" className='nav-link text-white'>
                About Us
              </Link>
            </li> */}

            <li className='nav-item'>
              <Link to="/" className='nav-link text-white'>
                <FaCartArrowDown className='cart-icon' />
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
