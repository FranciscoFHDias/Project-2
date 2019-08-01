import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class FilterBar extends React.Component {

  constructor() {
    super()
    this.state = {
      fromDate: '',
      toDate: ''
    }
    this.yesterday = this.yesterday.bind(this)
    this.lastWeek = this.lastWeek.bind(this)
    this.lastMonth = this.lastMonth.bind(this)
  }

  yesterday() {
    const current = new Date()
    const yesterday = new Date(current.getTime() - 86400000)
    const theYesterday = yesterday.toLocaleDateString()
    return theYesterday

  }

  lastWeek() {
    const current = new Date()
    const lastWeek = new Date(current.getTime() - 86400000 * 7)
    const theLastWeek = lastWeek.toLocaleDateString()
    return theLastWeek

  }

  lastMonth() {
    const current = new Date()
    const lastMonth = new Date(current.getTime() - 86400000 * 30)
    const theLastMonth = lastMonth.toLocaleDateString()
    return theLastMonth

  }


  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        from: '2019-07-01',
        to: '2019-07-20',
        apiKey: '0c5b27859ce2479099ef31d424c5e114'
      }
    })
      .then(res => this.setState({ articles: res.data.articles}))
  }


  render() {
    console.log(this.lastWeek())
    return (
      <div className="control">
        <label className="radio">
          <input type="radio" name="foobar"/>
            News from the past 24hrs
        </label>
        <label className="radio">
          <input type="radio" name="foobar" checked/>
            News from the past Week
        </label>
        <label className="radio">
          <input type="radio" name="foobar" checked/>
            News from the past Month
        </label>
      </div>
    )
  }


}
export default withRouter(FilterBar)
