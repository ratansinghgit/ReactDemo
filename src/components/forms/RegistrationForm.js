import React from 'react';
import propTypes from 'prop-types';
import {Button } from 'semantic-ui-react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"


 class RegistrationForm extends React.Component {
   state = {

     //Creats an object that can store the variables
     data: {
       username: '',
       email: '',
       password: '',
       admin:'false'
     },
     loading: false,
     errors: {}
   };

   //Checks for the change of state and then assigns the form data to the state.
   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state.data);
      //This checks if the user wants to be an admin and changes it to false to avoid security risks. It also notifies that a specified user wants to be an admin.
      //We can replace the "alert()" function that displays the admin status of a user with a sendEmail function that notifies the platform architect.
      
      this.props.submit(this.state.data);
   };

   render() {
     const {data} = this.state;

     return(

      <div>
      <form onSubmit = {this.onSubmit} >

          {/* <label htmlFor="username"><b>Username</b></label><br/> */}
          <input type="username" placeholder="Enter Username" id="username" className="login_input" name="username" value={data.username} onChange = {this.onChange} required/>

          <br/><br/>

          {/* <label htmlFor="email"><b>Email</b></label><br/> */}
          <input type="email" placeholder="Enter Email" id="email" className="login_input" name="email" value={data.email} onChange = {this.onChange} required/>

          <br/><br/>

          {/* <label htmlFor="password"><b>Password</b></label><br/> */}
          <input type="password" placeholder="Enter Password" className="login_input" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
          <br/><br/>
          <label htmlFor="admin"> <p className="make_p">Would you like to register as an Admin?</p></label><br/>
          <Toggle
            defaultChecked={this.state.admin}
            name='admin'
            value='true' onChange = {this.onChange}/><br/>

          <button type="submit" className="button sn_button_reg">Register</button>
      </form>
    </div>

     );
    }
}

 RegistrationForm.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default RegistrationForm;
