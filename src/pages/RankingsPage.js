import React from "react";
import '../styles/rankingsPageStyles.css';
import MenuLeague from '../components/menuLeague';
import UserStatBar from '../components/userStatBar';
import Axios from 'axios';

class RankingsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      leagues: [],
      leaguePhotos: [],
      leagueToShow: "Global",
      usersToShow: [],
      totalPointsToShow: [],
      ranksToShow: [],
      results1ToShow: [],
      results2ToShow: [],
      results3ToShow: [],
      results4ToShow: [],
      results5ToShow: [],
      results6ToShow: [],
    }
    this.changePage = this.changePage.bind(this);
  }

  async componentDidMount() {
    let token = localStorage.getItem("token");

    await Axios.post("http://localhost:5000/api/getLeagues", {
      "token": token
    })
      .then((res) => {
        this.setState({ leagues: res.data.leagues })
        this.setState({ leaguePhotos: res.data.leaguePhotos })
      })
      .catch(() => {

      })
    await Axios.post("http://localhost:5000/api/getAllUsersInLeague", {
      "token": token,
      "league": this.state.leagueToShow
    })
      .then((res) => {
        this.setState({ usersToShow: res.data.usernames })
        this.setState({ totalPointsToShow: res.data.totalPoints })
        this.setState({ results1ToShow: res.data.results1 })
        this.setState({ results2ToShow: res.data.results2 })
        this.setState({ results3ToShow: res.data.results3 })
        this.setState({ results4ToShow: res.data.results4 })
        this.setState({ results5ToShow: res.data.results5 })
        this.setState({ results6ToShow: res.data.results6 })
      })
      .catch(() => {

      })
    window.scrollTo(0, 0)
  }

  changePage(league) {
    this.setState({ leagueToShow: league });
    this.componentDidMount();
  }

  render() {
    return (
      <div className="FantasyDraftPage">
        <div className="fantasyDraftWindow">
          <div className="fantasyDraftWindowHeader">
            {
              this.state.leagues.map(league => {
                return <MenuLeague leagueName={league} onClickFunction={this.changePage} />
              })
            }
          </div>
          <h1 className="rankingsHeader">{this.state.leagueToShow} Standings</h1>
          <div className="tableHeader">
            <h3 className="tableSubHeader">Rank</h3>
            <h3 className="tableSubHeader" style={{ padding: `0 60px 0 0px` }}>Username</h3>
            <h3 className="tableSubHeader">Maribor</h3>
            <h3 className="tableSubHeader">Leogang</h3>
            <h3 className="tableSubHeader">Fort William</h3>
            <h3 className="tableSubHeader">Les Gets</h3>
            <h3 className="tableSubHeader">Lenzerheide</h3>
            <h3 className="tableSubHeader">Snowshoe</h3>
            <h3 className="tableSubHeader">Total</h3>
          </div>
          {
            this.state.usersToShow.map((user, index) => {
              return <UserStatBar rank={index} username={user} race1={this.state.results1ToShow[index]} race2={this.state.results2ToShow[index]}
               race3={this.state.results3ToShow[index]} race4={this.state.results4ToShow[index]} race5={this.state.results5ToShow[index]} 
               race6={this.state.results6ToShow[index]} totalPoints={this.state.totalPointsToShow[index]} />
            })
          }
        </div>
      </div>
    );
  }
}

function Page({ page }) {
  //if(page = "")
  return (
    <h1></h1>
  )
}

export default RankingsPage;