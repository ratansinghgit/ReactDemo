import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';
import logo from './logo.png';

const HomePage = () => (
<div className="ui container">
  <img src={logo}/>
  <h1>Home Page</h1>
  <Link to='/login' className="button"> Login </Link><br/>
  <Link to='/registration' className ="button sn_register_btn"> Registration</Link>
</div>

);

export default HomePage;
