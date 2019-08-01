import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import NewsSources from './components/news/Sources'
import Navbar from './components/common/Navbar'
import FilterBar from './components/common/FilterBar'
import WorldNews from './components/news/Index'
import Headlines from './components/pages/Home'
import NewsShow from './components/news/Show'
import GermanNews from './components/news/Germany'
import ItalyNews from './components/news/Italy'
import PolandNews from './components/news/Poland'
import RussiaNews from './components/news/Russia'
import UKNews from './components/news/UnitedKingdom'
import SpainNews from './components/news/Spain'
import ChinaNews from './components/news/China'
import PoliticsNews from './components/news/Politics'
import BusinessNews from './components/news/Business'
import TechNews from './components/news/Tech'


import './style.scss'

class App extends React.Component {

  render() {
    return(
      <HashRouter>
        <Navbar />
        <FilterBar />

        <Switch>
          <Route path="/news/Sources" component={NewsSources} />
          <Route path="/news/Germany" component={GermanNews} />
          <Route path="/news/Italy" component={ItalyNews} />
          <Route path="/news/Poland" component={PolandNews} />
          <Route path="/news/Russia" component={RussiaNews} />
          <Route path="/news/Spain" component={SpainNews} />
          <Route path="/news/China" component={ChinaNews} />
          <Route path="/news/UnitedKingdom" component={UKNews} />
          <Route path="/news/Politics" component={PoliticsNews} />
          <Route path="/news/Business" component={BusinessNews} />
          <Route path="/news/Tech" component={TechNews} />
          <Route path="/news/WorldNews" component={WorldNews} />
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
