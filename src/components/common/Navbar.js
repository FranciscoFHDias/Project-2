import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  // componentDidMount(prevProps) {
  //   if(prevProps.location.pathname !== this.props.location.pathname)  {
  //     this.setState({ navbarOpen: false })
  //   }
  // }

  render() {
    console.log(this.state)
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>

            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link to="/newsSources" className= "navbar-item">News Sources</Link>
              <Link to="/WorldNews" className= "navbar-item">World News</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }


}
export default withRouter(Navbar)
