import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import qs from 'query-string'

class NewsShow extends React.Component {

  render() {
    // if(!this.state.article) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-2">TEST</h1>
          <figure className="image">
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              src={qs.parse(this.props.location.search).url}>
            </iframe>
          </figure>
        </div>
      </section>
    )
  }
}

export default NewsShow
