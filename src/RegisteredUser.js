import React from "react";
import { connect } from "react-redux";
import { useHistory,  useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {HashLink} from "react-router-hash-link";

const mapStateToProps = (state) => {
    console.log('mapStateToProps' , state)
    return {
      jsonObj: state.jsonObj,
    };
  };


const LoginButton = (data) => {
    console.log("LoginButton" , data.data)
    
     if( JSON.stringify(data.data) === '{}') {


    return <Button color="inherit" onClick={data.handleLoginClick} >Login</Button>
    //<HashLink to="login" replace>ABCLOGIN</HashLink>
    //<Button color="inherit" onClick={data.handleLoginClick} >Login</Button>
    // <> 
    // <a href="/login">LOGIN</a>
    // <>



     }  else {
     return <>{data.data.name}
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
        <li className="nav-item active">
          <HashLink className="nav-link" to="/">
            <i className="fa fa-home fa-2x"></i>
            <span> Home </span>
          </HashLink>
        </li>
        <li>
          <div>
            <a href="#" className="nav-item nav-link">
              <i className="fa fa-bell fa-2x"></i>
              <span>Notifications</span>
            </a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"
              className="rounded-circle"
              alt="Avatar"
            ></img>
          </a>
          <div className="dropdown-menu-right dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/login">
              Profile
            </a>
            <a className="dropdown-item" href="/login">
              CHange Password
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/login">
              Signout
            </a>
          </div>
        </li>
      </ul></>};
  }

function RegisteredUser(props) {
    let history = useHistory();
    let location = useLocation();
    const {jsonObj} = props;

    function handleLoginClick(e) 
    {
      if(location.pathname === 'login') {


      } else {
      history.push('/login')
      }
    }
  
    function handleHomeClick(e) {
      history.push('/')
    }

    function render() {
      console.log(location.pathname);
      if(location.pathname !== '/login') {
return <LoginButton data = {jsonObj} handleLoginClick={handleLoginClick} />
      } 
        return <div>
          <Button onClick={handleHomeClick}>HOME</Button>
        </div>
      
    }
    
  return (
    render()
  );
}

export default connect(mapStateToProps)(RegisteredUser)
