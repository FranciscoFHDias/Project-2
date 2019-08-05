import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false,
      columnOneOpen: false,
      columnTwoOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.toggleColumnOne = this.toggleColumnOne.bind(this)
    this.toggleColumnTwo = this.toggleColumnTwo.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  toggleColumnOne() {
    this.setState({ columnOneOpen: !this.state.columnOneOpen})
  }

  toggleColumnTwo() {
    this.setState({ columnTwoOpen: !this.state.columnTwoOpen})
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    console.log(prevProps)
    if(prevProps.location.pathname !== this.props.location.pathname)  {
      this.setState({ navbarOpen: false, columnOneOpen: false, columnTwoOpen: false })
    }
  }

  render() {
    return(
      <nav className="navbar is-primary">
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

          <div className={`navbar-menu  ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <div className={`navbar-item has-dropdown is-hoverable ${this.state.columnOneOpen ? 'is-active' : ''}`} onClick={this.toggleColumnOne}>
                <a className="navbar-link">World Wide News</a>
                <div className="navbar-dropdown is-hoverable">
                  <Link to="/news/China" className="navbar-item">China</Link>
                  <Link to="/news/Germany" className="navbar-item">Germany</Link>
                  <Link to="/news/Italy" className="navbar-item">Italy</Link>
                  <Link to="/news/Poland" className="navbar-item">Poland</Link>
                  <Link to="/news/Russia" className="navbar-item">Russia</Link>
                  <Link to="/news/Spain" className="navbar-item">Spain</Link>
                  <Link to="/news/UnitedKingdom" className="navbar-item">United Kingdom</Link>
                </div>
              </div>
              <div className={`navbar-item has-dropdown is-hoverable ${this.state.columnTwoOpen ? 'is-active' : ''}`} onClick={this.toggleColumnTwo}>
                <a className="navbar-link">Category</a>
                <div className="navbar-dropdown">
                  <Link to="/news/Politics" className="navbar-item">Politics</Link>
                  <Link to="/news/Business" className="navbar-item">Business</Link>
                  <Link to="/news/Tech" className="navbar-item">Tech</Link>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/news/Sources" className="navbar-item">Sources</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

    )
  }


}
export default withRouter(Navbar)
