import React from 'react'
import axios from 'axios'
import _ from 'lodash'

class WorldNews extends React.Component {

  constructor() {
    super()

    this.state = {
      articles: [],
      searchTerm: '',
      sortTerm: 'name|asc'
    }



    this.filterEngSources = this.filterEngSources.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        from: '2018-01-30',
        sortBy: 'publishedAt',
        apiKey: '0c5b27859ce2479099ef31d424c5e114'
      }
    })
      .then(res => this.setState({ articles: res.data.articles}))
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

    const filterSources = _.filter(this.state.articles, article => {
      return re.test(article.title) || re.test(article.author) || re.test(article.publishedAt) || re.test(article.content)
    })
    const sortedSources = _.orderBy(filterSources, [field], [order])

    return sortedSources
  }

  render() {
    if(!this.state.articles) return null
    return(
      <section className="section">
        <div className="container">

          <div className="columns is-multiline">
            <div className="column is-half-tablet is-half-desktop">
              <h1 className="title is-1">World News</h1>
            </div>
            <div className="column is-one-quarter-tablet is-one-quarter-desktop">
              <div className="field">
                <div className="select is-fullwidth">
                  <select onChange={this.handleChange}>
                    <option value="title|asc">Name A-Z</option>
                    <option value="title|desc">Name Z-A</option>
                    <option value="publishedAt|asc">Oldest-Newest</option>
                    <option value="publishedAt|desc">Newest-Oldest</option>
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
            {this.filterEngSources().map(article =>
              <div key={article.url} className="column is-half-tablet is-one-quarter-desktop">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={article.urlToImage} alt={article.title} />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title">{article.title}</div>
                  </div>
                  <div className="card-content">
                    <div className="content is-6">{article.description}</div>
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

export default WorldNews
