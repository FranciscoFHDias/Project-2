import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class NewsSources extends React.Component {

  constructor() {
    super()

    this.state = {
      sources: [],
      searchTerm: '',
      sortTerm: 'name|asc'
    }

    this.filterEngSources = this.filterEngSources.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }


  componentDidMount() {
    axios.get('https://newsapi.org/v2/sources', {
      params: {
        apiKey: process.env.NEWS_API
      }
    })
      .then(res => this.setState({ sources: res.data.sources}))
  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
  }


  filterEngSources() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterSources = _.filter(this.state.sources, source => {
      return re.test(source.language) || re.test(source.country) || re.test(source.name) || re.test(source.category)
    })
    const sortedSources = _.orderBy(filterSources, [field], [order])

    return sortedSources
  }

  render() {
    if(!this.state.sources) return null
    return(
      <section className="section">
        <div className="container">

          <div className="columns is-multiline">
            <div className="column is-half-tablet is-half-desktop">
              <h1 className="title is-1">News Sources</h1>
            </div>
            <div className="column is-one-quarter-tablet is-one-quarter-desktop">
              <div className="field">
                <div className="select is-fullwidth">
                  <select onChange={this.handleChange}>
                    <option value="name|asc">Name A-Z</option>
                    <option value="name|desc">Name Z-A</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter-tablet is-one-quarter-desktop">
              <div className="field">
                <input placeholder="search" className="input" onKeyUp={this.handleKeyUp} />
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.filterEngSources().map(source =>
              <div key={source.id} className="column is-half-tablet is-one-quarter-desktop">
                <div className="card">
                  <div className="card-content">
                    <div className="card-header-title">{source.name}</div>
                    <div className="content is-6">{source.description}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

}

export default NewsSources
