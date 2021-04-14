import React from 'react';
import Axios from 'axios';
import '../styles/fantasyDraftPageStyle.css'
import RiderStat from '../components/RiderStat.js';
import LeagueBar from '../components/LeagueBar.js';

class FantasyDraftPage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "My Team",
      team: [],
      photos: [],
      riderToChange: 0,
      allRiders: [],
      leagues: [],
      leaguePhotos: [],
      allLeagues: [],
      leagueToChange: 1,
      pageSpecial: "",
      errorMessage: ""
    }
    this.myTeamPage = this.myTeamPage.bind(this);
    this.LeaguesPage = this.LeaguesPage.bind(this);
    this.editRider = this.editRider.bind(this);
    this.editRiderPage = this.editRiderPage.bind(this);
    this.editLeaguePage = this.editLeaguePage.bind(this);
    this.editLeague = this.editLeague.bind(this);
    this.createLeaguePage = this.createLeaguePage.bind(this);
    this.createLeague = this.createLeague.bind(this);
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    Axios.post("http://localhost:5000/api/getTeam", {
      "token": token
    })
      .then((res) => {
        this.setState({ team: res.data.team })
        this.setState({ photos: res.data.photos })
      })
      .catch(() => {

      })

    Axios.post("http://localhost:5000/api/getLeagues", {
      "token": token
    })
      .then((res) => {
        this.setState({ leagues: res.data.leagues })
        this.setState({ leaguePhotos: res.data.leaguePhotos })
      })
      .catch(() => {

      })
    window.scrollTo(0, 0)
  }

  myTeamPage() {
    this.setState({ pageSpecial: "" })
    this.setState({ page: "My Team" });
    this.setState({ errorMessage: "" });
    this.componentDidMount();
  }

  LeaguesPage() {
    this.setState({ pageSpecial: "" })
    this.setState({ page: "Leagues" });
    this.setState({ errorMessage: "" });
    this.componentDidMount();
  }

  editRider(riderNum, newRider) {
    Axios.post("http://localhost:5000/api/updateRider", {
      token: localStorage.getItem("token"),
      oldRider: this.state.team[riderNum],
      newRider: newRider
    })
      .then((res) => {
        this.componentDidMount()
      })
      .catch(() => {

      })
    this.setState({ page: "My Team" })
  }

  editRiderPage(riderNum) {
    this.setState({ page: "editRider" });
    this.setState({ riderToChange: riderNum })
    Axios.post("http://localhost:5000/api/getAllRiders", {

    })
      .then((res) => {
        this.setState({ allRiders: res.data.riders.filter(rider => (this.state.team.indexOf(rider.name)) === -1) })
      })
      .catch((er) => {
        console.log(er)
      })
  }

  editLeague(leagueNum, newLeague, password) {
    console.log(this.state.leagues[leagueNum])
    Axios.post("http://localhost:5000/api/updateLeague", {
      token: localStorage.getItem("token"),
      oldLeague: this.state.leagues[leagueNum],
      newLeague: newLeague,
      password: password
    })
      .then((res) => {
        this.setState({ page: "Leagues" })
        this.setState({ pageSpecial: "" })
        this.componentDidMount()
      })
      .catch(err => {
        this.setState({ errorMessage: "League name or password incorrect" })
      })
  }

  editLeaguePage(leagueNum) {
    this.setState({ page: "editLeague" });
    this.setState({ leagueToChange: leagueNum })
    this.setState({ pageSpecial: "special" })
    this.setState({ errorMessage: "" })
    Axios.post("http://localhost:5000/api/getAllPublicLeagues", {

    })
      .then((res) => {
        this.setState({ allLeagues: res.data.leagues.filter(league => (this.state.leagues.indexOf(league.name)) === -1) })
      })
      .catch((er) => {
        console.log(er)
      })
  }

  createLeaguePage() {
    this.setState({ page: "createLeague" });
    this.setState({ pageSpecial: "" });
  }

  createLeague(leagueNum, name, publicOrNot, password) {
    Axios.post("http://localhost:5000/leagues/newLeague", {
      name: name,
      token: localStorage.getItem("token"),
      password: password,
      public: publicOrNot,
      oldLeague: this.state.leagues[leagueNum]
    })
      .then(res => {
        this.setState({ page: "Leagues" });
        this.componentDidMount()
      })
      .catch(er => {
        this.setState({ errorMessage: "League could not be created" })
        this.componentDidMount()
      })
  }

  render() {
    return (
      <div className="FantasyDraftPage">
        <div className="fantasyDraftWindow">
          <div className="fantasyDraftWindowHeader">
            <div className="fantasyDraftWindowButton" onClick={this.myTeamPage}>
              <h4 className="fantasyDraftWindowButtonText">My Team</h4>
            </div>
            <div className="fantasyDraftWindowButton" onClick={this.LeaguesPage}>
              <h4 className="fantasyDraftWindowButtonText">Leagues</h4>
            </div>
          </div>
          <Page state={this.state.pageSpecial} team={this.state.team} leagues={this.state.leagues} riderPhotos={this.state.photos} leaguePhotos={this.state.leaguePhotos} onClickFunction={this.editRiderPage} onClickFunction2={this.editRider} onClickFunction3={this.editLeaguePage} onClickFunction4={this.editLeague} onClickFunction5={this.createLeaguePage} onClickFunction6={this.createLeague} allRiders={this.state.allRiders} editRiderNum={this.state.riderToChange} editLeagueNum={this.state.leagueToChange} allLeagues={this.state.allLeagues} errorMessage={this.state.errorMessage}></Page>
          <Page state={this.state.page} team={this.state.team} leagues={this.state.leagues} riderPhotos={this.state.photos} leaguePhotos={this.state.leaguePhotos} onClickFunction={this.editRiderPage} onClickFunction2={this.editRider} onClickFunction3={this.editLeaguePage} onClickFunction4={this.editLeague} onClickFunction5={this.createLeaguePage} onClickFunction6={this.createLeague} allRiders={this.state.allRiders} editRiderNum={this.state.riderToChange} editLeagueNum={this.state.leagueToChange} allLeagues={this.state.allLeagues} errorMessage={this.state.errorMessage} ></Page>
        </div>
      </div>
    )
  }
}

const Page = ({ state, team, leagues, riderPhotos, leaguePhotos, onClickFunction, onClickFunction2, onClickFunction3, onClickFunction4, onClickFunction5, onClickFunction6, editRiderNum, editLeagueNum, allRiders, allLeagues, errorMessage }) => {
  if (state == "My Team") {
    return (
      <div>
        <h5 className="fantasyDraftPageHeader">My DH Team</h5>
        <div className="fantasyDraftTeamContainer">
          <h1 className="riderHeader">{team[0]}</h1>
          <h1 className="riderHeader">{team[1]}</h1>
          <h1 className="riderHeader">{team[2]}</h1>
          <h1 className="riderHeader">{team[3]}</h1>
          <h1 className="riderHeader">{team[4]}</h1>
          <div className="fantasyDraftRiderBox" style={{ backgroundImage: `url(${riderPhotos[0]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" style={{ backgroundImage: `url(${riderPhotos[1]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" style={{ backgroundImage: `url(${riderPhotos[2]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" style={{ backgroundImage: `url(${riderPhotos[3]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" style={{ backgroundImage: `url(${riderPhotos[4]})` }}>

          </div>
          <div className="editRiderButton" onClick={() => onClickFunction(0)}>
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit Rider</h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction(1)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit Rider</h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction(2)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit Rider</h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction(3)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit Rider</h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction(4)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit Rider</h4>
          </div>
        </div>
      </div>
    )
  } else if (state == "Leagues") {
    return (
      <div>
        <h5 className="fantasyDraftPageHeader">DH Leagues</h5>
        <div className="fantasyDraftLeagueContainer">
          <h1 className="riderHeader">{leagues[0]}</h1>
          <h1 className="riderHeader">{leagues[1]}</h1>
          <h1 className="riderHeader">{leagues[2]}</h1>
          <div className="fantasyDraftRiderBox" id="globalLeageSpecial" style={{ backgroundImage: `url(${leaguePhotos[0]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" id="leagueImage" style={{ backgroundImage: `url(${leaguePhotos[1]})` }}>

          </div>
          <div className="fantasyDraftRiderBox" id="leagueImage" style={{ backgroundImage: `url(${leaguePhotos[2]})` }}>

          </div>
          <div className="editRiderButton" style={{ backgroundColor: `rgb(31, 50, 68)`, cursor: `default` }}>
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText"></h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction3(1)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit League</h4>
          </div>
          <div className="editRiderButton" onClick={() => onClickFunction3(2)} >
            <h4 className="fantasyDraftWindowButtonText" id="editRiderButtonText">Edit League</h4>
          </div>
        </div>
      </div>
    )
  }
  else if (state == "editRider") {
    return (
      allRiders.map(riders => {
        return <RiderStat photo={riders.photo} name={riders.name} onClickFunction={onClickFunction2} editRiderNumber={editRiderNum} ></RiderStat>;
      })
    )
  }
  else if (state == "editLeague") {
    return (
      allLeagues.map(league => {
        return <LeagueBar photo={league.photo} name={league.name} onClickFunction={onClickFunction4} editLeagueNum={editLeagueNum} ></LeagueBar>;
      })
    )
  }
  else if (state == "special") {
    return (
      <div>
        <h3 className="searchFormHeader">Search for private league</h3>
        <p className="errorMessage">{errorMessage}</p>
        <div className="searchFormContainer">

          <label for="firstName" className="leagueNameLabel">League Name</label>
          <input type="text" id="firstName" className="leagueNameInput" id="leagueName" />
          <label for="lastName" className="leagueNameLabel" >Password</label>
          <input type="text" id="lastName" className="leagueNameInput" id="leaguePassword" />
        </div>
        <div className="searchButton" onClick={() => onClickFunction4(editLeagueNum, document.getElementById("leagueName").value, document.getElementById("leaguePassword").value)}>
          <h2 className="joinButtonText">Join</h2>
        </div>
        <div className="searchButton" style={{ width: `280px` }} onClick={() => onClickFunction5()}>
          <h2 className="joinButtonText"> Or Create A league</h2>
        </div>
        <h3 className="searchFormHeader" id="publicLeagueHeader">Public Leagues</h3>
      </div>
    )
  }
  else if (state == "createLeague") {
    return (
      <div>
        <h3 className="searchFormHeader">Create league</h3>
        <p className="errorMessage">{errorMessage}</p>
        <div className="searchFormContainer">
          <label for="firstName" className="leagueNameLabel">League Name</label>
          <input type="text" id="firstName" className="leagueNameInput" id="newLeagueName" />
          <label for="lastName" className="leagueNameLabel" >Password</label>
          <input type="text" id="lastName" className="leagueNameInput" id="newLeaguePassword" />
        </div>
        <div className="searchButton" onClick={() => onClickFunction6(editLeagueNum, document.getElementById("newLeagueName").value, false, document.getElementById("newLeaguePassword").value)}>
          <h2 className="joinButtonText">Create League</h2>
        </div>

      </div>
    )
  }
  else {
    return (
      <div>

      </div>
    )
  }
}

export default FantasyDraftPage;