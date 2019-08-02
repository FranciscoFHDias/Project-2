import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import Card from './Card'

class WorldNews extends React.Component {

  constructor() {
    super()

    this.state = {
      articles: [],
      searchTerm: '',
      sortTerm: 'name|asc',
      heldWord: ''
    }



    this.filterEngSources = this.filterEngSources.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.storeValue = this.storeValue.bind(this)
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        from: '2018-01-30',
        sortBy: 'publishedAt',
        apiKey: process.env.NEWS_API
      }
    })
      .then(res => this.setState({ articles: res.data.articles}))
  }

  storeValue(e){
    this.setState({ heldWord: e.target.value })
  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleChange() {
    this.setState({ sortTerm: this.state.heldWord })
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
                <Card
                  title={article.title}
                  image={article.urlToImage}
                  author={article.author}
                  description={article.description}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

}

export default WorldNews
