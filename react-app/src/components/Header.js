import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { Typography } from '@material-ui/core'
import firebase from '../firebase'
import { MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom'
import '../styles/navbar.css'

function Header(props) {
  var user = firebase.auth.currentUser;

 return (
   user ? (
    <nav className="navbar topnav">
    <NavLink to="/" exact className="logo navlink">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className="PlanetFirstLogo"/>
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/forum"
    >
      Live Feed
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/donation"
    >
      Donation
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/dashboard"
    >
      Dashboard
    </NavLink>
    <Typography className="navbar__link navlink" >
    <i className="fas fa-user-circle" ></i> &nbsp;
				 { firebase.getCurrentUsername() }
		</Typography>
    <NavLink className="navbar__link navlink" to="/">
      <MDBBtn color="green" size="sm" onClick={logout}>Logout</MDBBtn>
    </NavLink>
  </nav>
   ) : (
    <nav className="navbar topnav">
    <div className="logo navlink">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className="PlanetFirstLogo"/>
    </div>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/forum"
    >
      Live Feed
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/donation"
    >
      Donation
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link navlink"
      to="/dashboard"
    >
      Dashboard
    </NavLink>
    <NavLink className="navbar__link navlink" to="/register">
      <MDBBtn color="green" size="sm">Sign Up</MDBBtn>
    </NavLink>
    <NavLink className="navbar__link navlink" to="/login">
      <MDBBtn color="green" size="sm">Login</MDBBtn>
    </NavLink>
  </nav>
   )
);
async function logout() {
  await firebase.logout()
  props.history.push('/login')
}

}

export default withRouter((Header))