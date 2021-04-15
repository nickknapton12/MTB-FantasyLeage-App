import React from 'react';
import '../styles/LoginPageStyle.css';
import Axios from 'axios';

class SignUpPage extends React.Component {
    constructor(){
        super();
        this.state = {
            errorMessage: " ",
        };
        this.signUp = this.signUp.bind(this);
    }

    componentDidMount(){
        
    }

    signUp(){
        let thisObject = this;
        Axios.post("https://mtb-fantasy-league.herokuapp.com/login/signup", {
            "username": document.getElementById("username").value,
            "email": document.getElementById("email").value,
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "password": document.getElementById("password").value
        }).then(res => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "https://dazzling-curran-ec76a5.netlify.app/";
        }).catch(function (err) {
            try{
                if(err.response.data.name == "MongoError"){
                    if(err.response.data.keyValue.hasOwnProperty("email")){
                        thisObject.setState({ errorMessage: "This email is already in use" });
                        console.log()
                    }
                    if(err.response.data.keyValue.hasOwnProperty("username")){
                        thisObject.setState({ errorMessage: "This username is already in use" });
                    }
                }
                else if(err.response.data == "\"email\" must be a valid email"){
                    thisObject.setState({ errorMessage: "Invalid Email" });
                }
                else{
                    let theError = err.response.data.replace("\"", "").replace("\"", "");
                    thisObject.setState({ errorMessage: theError });
                }
            }catch(er){

            }
        })
    }

    render(){
        return(
            <div className="loginScreen">
                <h1 className="loginTitle">Sign Up</h1>
                <form>
                    <p className="errorMessage">{ this.state.errorMessage }</p>
                    <label for="firstName" className="loginLabel">First Name</label>
                    <input type="text" id="firstName" className="loginInput" />
                    <label for="lastName" className="loginLabel">Last Name</label>
                    <input type="text" id="lastName" className="loginInput" />
                    <label for="username" className="loginLabel">Username</label>
                    <input type="text" id="username" className="loginInput" />
                    <label for="email" className="loginLabel">Email</label>
                    <input type="text" id="email" className="loginInput" />
                    <label for="Password"className="loginLabel">Password</label>
                    <input type="password" id="password" className="loginInput" />
                    <div onClick={ this.signUp } className="loginButton" id="signUpButton">
                        <h2 className="loginButtonText">Sign Up</h2>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpPage;