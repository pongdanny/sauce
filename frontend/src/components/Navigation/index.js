import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink className="login-btn" to="/login">
          Log In
        </NavLink>
        <NavLink className="signup-btn" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div class="wrapper">
      <div class="Container">
        <div class="nav">
          <div class="logo"></div>
          <div class="menu">
            <ul class="navMenu">
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">Search</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <NavLink className="home-btn" exact to="/">
                  Home
                </NavLink>
                {isLoaded && sessionLinks}
              </li>
            </ul>
          </div>
        </div>
        <div class="headerz">
          <h1>Welcome to the TrapCloud</h1>
          <p>For Trappers, By Trappers</p>
          <button class="explore" type="button">
            Explore!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
