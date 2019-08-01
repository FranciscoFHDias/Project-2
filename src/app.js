import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import NewsSources from './components/news/Sources'
import Navbar from './components/common/Navbar'
import WorldNews from './components/news/Index'
import Headlines from './components/pages/Home'
import NewsShow from './components/news/Show'

import './style.scss'

class App extends React.Component {

  render() {
    return(
      <HashRouter>
        <Navbar />

        <Switch>
          <Route path="/newsSources" component={NewsSources} />
          <Route path="/WorldNews" component={WorldNews} />
          <Route path="/news" component={NewsShow} />
          <Route path="/" component={Headlines} />
        </Switch>

      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
