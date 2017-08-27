import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import loginUser from '../../../state/actions/loginUser';

import './index.css';

function mapStateToProps(state) {
  return {
    loginPost: state.loginPost
  }
}
function matchDispatchToProps(dispatch) {
  return dispatch = ({ dispatch });
}
class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginPost: {
        userId: '',
        passWord: '',
        message: ''
      }
    }
  }
  handleLogin(e) {
   this.props.dispatch(loginUser({
      userId: this.refs['userId'].value,
      passWord: this.refs['passWord'].value
    }));
    e.preventDefault();
    return false;
  }
  render() {
    const loginProps = this.props.loginPost || {};
    return (
      <div className="login" >
        <h3>Login / Signup</h3>
        <span className="msg" >{loginProps.message}</span>
        <form >
          <input type="text" name="userid" ref="userId"  placeholder="User name"  defaultValue={loginProps.userId}/> 
          <input type="text" name="password" ref="passWord" placeholder="Password" />
          <input type="button" value="login"  onClick={this.handleLogin.bind(this)}/>
        </form>
      </div>
    );
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Login);
