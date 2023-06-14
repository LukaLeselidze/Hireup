import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import "./Header.css";
import HireUp from "../img/HireUp Logo.svg";
import BurgerMenu from "../img/burger-menu.svg";
// import iconsMenu from "../img/icons-menu.svg";
import { ReactComponent as Iconmenu } from "../img/icons-menu.svg";

import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  function overlayHandler() {
    setOverlayOpen((prevIsOpen) => !prevIsOpen);
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  function navigateHandler() {
    navigate("/");
  }

  function signOutHandler() {
    signOut(auth).then(() => {
      console.log("Sign out succ");
      setAuthUser(null);
    });
  }

  function menuHandler() {
    setMenuActive(!menuActive);
  }

  return (
    <div className="header">
      <div className="header_container">
        <Link to="/" onClick={navigateHandler} className="hire_up_logo">
          <img src={HireUp} alt="hire-up-logo" />
        </Link>
        <div className="header_middle">
          <nav className="header_nav">
            <Link to="/">Home</Link>
            <a>Company</a>
            <Link to="/postjob/browsejobs">Browse</Link>
            <a>Blog</a>
          </nav>
        </div>
        <div onClick={overlayHandler} className="burger_logo">
          <div
            onClick={menuHandler}
            className={
              !menuActive ? "burger_container" : "burger_container_active"
            }
          >
            <Iconmenu
              className={!menuActive ? "icon_menu" : "icon_menu_active"}
            />
            {/* <img src={iconmenu} alt="burger-menu-logo" /> */}
          </div>
        </div>
        <div className="header_right">
          <div className="header_wrap">
            <Link
              to={authUser ? "/postjob" : "/signin"}
              className="header_post_job"
            >
              Post A Job
            </Link>
            {/* <Link className='header_login' to='/signin'> {authUser ? 'Sign Out' : 'Log in'}</Link> */}
            {!authUser && (
              <Link to="/signin" className="header_login">
                Log in
              </Link>
            )}
            {authUser && (
              <Link onClick={signOutHandler} className="header_login">
                Sign Out
              </Link>
            )}
          </div>
        </div>
      </div>
      {overlayOpen && (
        <div className="header_overlay">
          <nav className="overlay_content">
            <Link className="overlay_content_link" to="/">
              Home
            </Link>
            {/* <a className="overlay_content_link">Home</a> */}
            <a className="overlay_content_link">Company</a>
            <Link className="overlay_content_link" to="/postjob/browsejobs">
              Browse
            </Link>
            {/* <a className="overlay_content_link">Browse</a> */}
            <a className="overlay_content_link">Blog</a>

            <div className="overlay_button_mobile">
              {!authUser && (
                <Link to="/signin" className="header_login">
                  Log in
                </Link>
              )}
              {authUser && (
                <Link onClick={signOutHandler} className="header_login">
                  Sign Out
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
