import React from 'react';
import {Link} from "react-router-dom";
import RegistrationForm from "../forms/RegistrationForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';

class RegistrationPage extends React.Component{



//Gets the data and sumbits it for a post request
submit = data => {

  axios.post('https://alphawizz.org/Education/authApi/createUser',{
    firstname:data.username,
    email:data.email,
    password:data.password,
    admin:data.admin,
    lastname:"student2",
    usertypeid:"5d89c2402e8b9f5a5516d890",
    gender:"Male",
    cityname:"indore",
    countryname:"india",
    contact:"1234567894",
    dob:"15-05-1988",
    profile_pic_status:"asdasd",
    updatedprofile:false
  })
  .then(function(response){
    //This is responsible for the page navigation.
   (document.getElementById('status').innerHTML = "Registration Successfull! You are being redirected to login in 5 seconds.",setTimeout(() => {window.location.replace('/login')},5000))
   });
};



render(){

  //alert("Response is : " + this.state.response);
  return(
    <div align="top">
      <h1>Registration Page</h1>
      <RegistrationForm  submit={this.submit}/>
        <p id="status"></p>
        <Link to="/" className="button">Back to Home</Link>

    </div>

  );

}

}

export default RegistrationPage;
