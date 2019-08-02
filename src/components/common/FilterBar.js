// import React from 'react'
// import { Link, withRouter } from 'react-router-dom'
// import axios from 'axios'
//
// class FilterBar extends React.Component {
//
//   constructor() {
//     super()
//     this.state = {
//       fromDate: '',
//       toDate: ''
//     }
//
//     this.today = this.today.bind()
//     this.yesterday = this.yesterday.bind(this)
//     this.lastWeek = this.lastWeek.bind(this)
//     this.lastMonth = this.lastMonth.bind(this)
//     this.storeSortValue = this.storeSortValue.bind(this)
//   }
//
//
//   today() {
//     const today = new Date().toISOString().replace(/T.*/,'').split('-').join('-')
//     return today
//
//   }
//
//   yesterday() {
//     const current = new Date()
//     const yesterday = new Date(current.getTime() - 86400000)
//     const theYesterday = yesterday.toISOString().replace(/T.*/,'').split('-').join('-')
//     return theYesterday
//
//   }
//
//   lastWeek() {
//     const current = new Date()
//     const lastWeek = new Date(current.getTime() - (86400000 * 7))
//     const theLastWeek = lastWeek.toISOString().replace(/T.*/,'').split('-').join('-')
//     return theLastWeek
//
//   }
//
//   lastMonth() {
//     const current = new Date()
//     const lastMonth = new Date(current.getTime() - (86400000 * 30))
//     const theLastMonth = lastMonth.toISOString().replace(/T.*/,'').split('-').join('-')
//     return theLastMonth
//
//   }
//
//
//
//   getMoreArticles(e) {
//     e.preventDefault()
//     axios.get('https://newsapi.org/v2/everything', {
//       params: {
//         q: '',
//         from: this.state.fromDate,
//         to: this.today(),
//         apiKey: process.env.NEWS_API
//       }
//     })
//       .then(res => this.setState({ articles: res.data.articles}))
//
//   }
//
//   storeSortValue(e){
//     this.setState({ fromDate: e.target.value })
//     console.log(e.target.value)
//   }
//
//
//
//   render() {
//     // console.log(this.today())
//     // console.log(this.lastWeek())
//     return (
//       <form className="control" >
//         <label className="radio">
//           <input type="radio" name="foobar" value={this.yesterday()} onClick={this.storeSortValue}/>
//             News from the past 24hrs
//         </label>
//         <label className="radio">
//           <input type="radio" name="foobar" value={this.lastWeek()} onClick={this.storeSortValue}/>
//             News from the past Week
//         </label>
//         <label className="radio">
//           <input type="radio" name="foobar" value={this.lastMonth()} onClick={this.storeSortValue}/>
//             News from the past Month
//         </label>
//       </form>
//     )
//   }
//
//
// }
// export default withRouter(FilterBar)
