import React from 'react';
import propTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

 class LoginForm extends React.Component {
   state = {
     data: {
       email: '',
       password: ''
     },
     loading: false,
     errors: {}
   };

   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
     e.preventDefault();
     this.props.submit(this.state.data);
     //alert('Username is: ' + username.data.email);
   };

   render() {
     const {data} = this.state;

     return(
        <form onSubmit = {this.onSubmit} className="login-form">
            {/* <label htmlFor="email"><b>Email</b></label><br/> */}
            <input type="email" placeholder="Enter Email" id="email" className="login_input" name="email" value={data.email} onChange = {this.onChange} required/>

            <br/><br/>

            {/* <label htmlFor="password"><b>Password</b></label><br/> */}
            <input type="password" placeholder="Enter Password" id="password" className="login_input" name="password" value={data.password} onChange = {this.onChange} required/>
            <br/><br/>
            <Button type="submit" primary>Login</Button>
        </form>
     );
    }
}

 LoginForm.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default LoginForm;
