import './styles/App.css';

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


function App() {
  return (
    <div>
    <h1>HelloWorld</h1>
    <Router>
        <div className="App">
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
        </div>
    </Router>
    </div>
  );
}

export default App;
