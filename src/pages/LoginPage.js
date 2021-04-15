import React from 'react';
import '../styles/LoginPageStyle.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {
            errorMessage: ""
        }
        this.login = this.login.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    login(){
        Axios.post("https://mtb-fantasy-league.herokuapp.com/login/", {
            "email": document.getElementById("username").value,
            "password": document.getElementById("password").value
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "https://dazzling-curran-ec76a5.netlify.app";
        })
        .catch(res => {
            this.setState({ errorMessage: "Email or password is wrong" })
        })
    }

    keyPress(e){
        if(e.key == "Enter"){
           console.log('value', e.target.value);
           this.login();
        }
     }

    render(){
        return(
            <div className="loginScreen">
                <h1 className="loginTitle">Login</h1>
                <form>
                    <p className="errorMessage">{ this.state.errorMessage }</p>
                    <label for="username" className="loginLabel">Email</label>
                    <input type="text" id="username" className="loginInput" />
                    <label for="Password"className="loginLabel">Password</label>
                    <input type="password" onKeyPress={ this.keyPress } id="password" className="loginInput" />
                    <div onClick={ this.login } className="loginButton">
                        <h2 className="loginButtonText">Login</h2>
                    </div>
                    <Link to="/SignUp"><div className="loginButton" id="signUpButton">
                        <h2 className="loginButtonText">Or Sign Up</h2>
                    </div></Link>
                </form>
            </div>
        )
    }
}

export default LoginPage;