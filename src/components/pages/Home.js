import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import Card from '../news/Card'

class Headlines extends React.Component {

  constructor() {
    super()

    this.state = {
      articles: [],
      searchTerm: '',
      sortTerm: 'name|asc',
      today: '',
      heldWord: '',
      fromDate: this.today(),
      toDate: ''
    }

    this.filterEngSources = this.filterEngSources.bind(this)
    this.storeSortValue = this.storeSortValue.bind(this)
    this.storeSearchValue = this.storeSearchValue.bind(this)
    this.getMoreArticles = this.getMoreArticles.bind(this)
    this.today = this.today.bind()
    this.yesterday = this.yesterday.bind(this)
    this.lastWeek = this.lastWeek.bind(this)
    this.lastMonth = this.lastMonth.bind(this)
    this.storeSortedValue = this.storeSortedValue.bind(this)

  }



  today() {
    const today = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
    return today

  }

  yesterday() {
    const current = new Date()
    const yesterday = new Date(current.getTime() - 86400000)
    const theYesterday = yesterday.toISOString().replace(/T.*/,'').split('-').join('-')
    return theYesterday

  }

  lastWeek() {
    const current = new Date()
    const lastWeek = new Date(current.getTime() - (86400000 * 7))
    const theLastWeek = lastWeek.toISOString().replace(/T.*/,'').split('-').join('-')
    return theLastWeek

  }

  lastMonth() {
    const current = new Date()
    const lastMonth = new Date(current.getTime() - (86400000 * 30))
    const theLastMonth = lastMonth.toISOString().replace(/T.*/,'').split('-').join('-')
    return theLastMonth

  }




  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'world',
        from: this.today(),
        to: this.today(),
        apiKey: process.env.NEWS_API
      }
    })
      .then(res => this.setState({ articles: res.data.articles}))
  }

  getMoreArticles(e) {
    if(e) e.preventDefault()
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: this.state.searchTerm || 'world',
        from: this.state.fromDate,
        to: this.today(),
        apiKey: process.env.NEWS_API
      }
    })
      .then(res => this.setState({ articles: res.data.articles}))
  }


  storeSortedValue(e){
    this.setState({ fromDate: e.target.value }, () => {
      this.getMoreArticles()

    })
  }

  storeSortValue(e){
    this.setState({ sortTerm: e.target.value })
  }

  storeSearchValue(e){
    this.setState({ searchTerm: e.target.value })
  }


  filterEngSources() {
    const [field, order] = this.state.sortTerm.split('|')
    const filterSources = this.state.articles
    const sortedSources = _.orderBy(filterSources, [field], [order])
    return sortedSources
  }


  render() {
    if(!this.state.articles) return null
    return(
      <section className="section">
        <div className="container">

          <div className="column">
            <form className="control">
              <label className="radio">
                <input type="radio" name="timeframe" value={this.yesterday()} onChange={this.storeSortedValue}/> News from the past 24hrs
              </label>
              <label className="radio">
                <input type="radio" name="timeframe" value={this.lastWeek()} onChange={this.storeSortedValue}/> News from the past Week
              </label>
              <label className="radio">
                <input type="radio" name="timeframe" value={this.lastMonth()} onChange={this.storeSortedValue}/> News from the past Month
              </label>
            </form>
          </div>

          <hr/>

          <div className="columns is-multiline">
            <div className="column is-half-tablet is-half-desktop">
              <h1 className="title is-1">Todays World News</h1>
              <h2 className="subtitle is-6">Time-filtered News from the most popular news sources across the globe.</h2>
            </div>



            <div className="column is-one-quarter-tablet is-one-quarter-desktop">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <div className="select is-fullwidth">
                    <select onChange={this.storeSortValue} >
                      <option value="publishedAt|asc">Newest-Oldest</option>
                      <option value="publishedAt|desc">Oldest-Newest</option>
                      <option value="title|asc">Name A-Z</option>
                      <option value="title|desc">Name Z-A</option>
                    </select>
                  </div>
                </div>
                <div className="control">
                  <button type="submit" onClick={this.handleChange} className="button is-primary">Choose</button>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter-tablet is-one-quarter-desktop">
              <form onSubmit={this.getMoreArticles}>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="is-fullwidth">
                      <input placeholder="Search by keyword" className="input" onChange={this.storeSearchValue} />
                    </div>
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-primary">Choose</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.filterEngSources().map(article =>
              <div key={article.url} className="column is-half-tablet is-one-quarter-desktop">
                <Link to={`/news?url=${article.url}`}>
                  <Card
                    title={article.title}
                    image={article.urlToImage}
                    description={article.description}
                    author={article.author}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }

}

export default Headlines
