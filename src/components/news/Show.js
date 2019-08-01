import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import qs from 'query-string'

class NewsShow extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    // if(!this.state.article) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-2">{this.props.title}</h1>
          <figure className="image is-9by16">
            <iframe
              className="has-ratio"
              width="640"
              height="360"
              src={qs.parse(this.props.location.search).url}
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
          </figure>
        </div>
      </section>
    )
  }
}

export default NewsShow
