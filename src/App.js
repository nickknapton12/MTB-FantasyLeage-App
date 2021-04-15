import './styles/App.css';
import React, { useState, useEffect, useReducer } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import FantasyDraftPage from './pages/FantasyDraftPage';
import RankingsPage from './pages/RankingsPage';
import RaceResultsPage from './pages/RaceResultsPage';
import NewsPage from './pages/NewsPage';
import StatsPage from './pages/StatsPage';
import ScrollIntoView from "./components/ScrollIntoView";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BarLoader from "react-spinners/BarLoader";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200)
  }, [])

  return (
    <div>
      {
        loading ?
          <div className="appLoad">
            <BarLoader
              width={"100%"}
              color={"rgb(216,4,4)"}
              loading={loading}
            />
          </div>

          :
          <div className="App">
            <Router>
              <ScrollIntoView>
                <NavBar />
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/FantasyDraft" exact component={FantasyDraftPage} />
                  <Route path="/Rankings" exact component={RankingsPage} />
                  <Route path="/Login" exact component={LoginPage} />
                  <Route path="/RaceResults" exact component={RaceResultsPage} />
                  <Route path="/News" exact component={NewsPage} />
                  <Route path="/Stats" exact component={StatsPage} />
                  <Route path="/SignUp" exact component={SignUpPage} />
                </Switch>
                <Footer />
              </ScrollIntoView>
            </Router>
          </div>
      }

    </div>
  );
}

export default App;
