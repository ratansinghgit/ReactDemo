import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';
import './logo.png';


class LoginPage extends React.Component{

//This gets the data and sends it as a post request
submit = data => {

    //alert("username: " + data.username);
    //This calls the URL to submit the post request.
    axios.post('https://alphawizz.org/Education/authApi/login',{
      username:data.email,
      password:data.password
    })
    .then(function(response){
      var email = response.data.user.email;

      //This part is responsible for the window navigation after login.
      (document.getElementById('status').innerHTML = "Login Successfull! You are being redirected to landing page in 5 seconds.",setTimeout(() => {window.location.replace('/landing?name='+ email)},1000))
    });
  };

//This renders the HTML code
render(){
  return(

      <div>
          <h1>Login Page</h1>
          <LoginForm submit={this.submit}/>
          <p id="status"></p>
          <p className="make_p">Make a new account? Right here.</p>
          <Link to="/registration" className="button sn_button_reg">Registration</Link>
      </div>

    );
  }
}




export default LoginPage;
