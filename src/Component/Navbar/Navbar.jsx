import React from "react";

import "./Navbar.css";

import menu from "../../assets/icons/menu.png";
import user from "../../assets/icons/user.png";
import logo from "../../assets/icons/yaotube.png";
import search from "../../assets/icons/search-navbar.png";
import micro from "../../assets/icons/micro.png";
import create from "../../assets/icons/create.png";
import bell from "../../assets/icons/bell.png";

const Navbar = () => {
  const isUserLoggedIn = 0;

  const navRightGuess = (
    <div className="nav__right">
      <div className="right__act--wrap">
        <img src={create} alt="" className="right__act--icon" />
      </div>
      <div className="right__act--wrap">
        <img src={bell} alt="" className="right__act--icon" />
      </div>
      <div className="right__avt-wrap">
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_kr4bNGofmTMPp5MZXDPMJK5LVxode4q5XfL_KkDT6k-92DsDa2ZJkQL47K5Z7lphmMUw=s88-c-k-c0x00ffffff-no-rj"
          alt=""
          className="right__act--icon right__act--avt"
        />
      </div>
    </div>
  );
  const navRightUser = (
     <div className="nav__right">
      <div className="right__avt-wrap">
        <button className="btn-login">
          <img src={user} alt="" className="right__act--icon-sm" />
          <span>Login</span>
        </button>
      </div>
    </div>
  )
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__left">
            <div className="menu__wrap">
              <img src={menu} alt="" className="nav__menu" />
            </div>
            <a href="/" className="nav__logo--link">
              <img src={logo} alt="" className="nav__logo" />
            </a>
          </div>
          <div className="nav__middle">
            <div className="search__box">
              <input type="text" className="search__input" />
              <button className="search__btn">
                <img src={search} alt="" className="search__btn--img" />
              </button>
            </div>
            <div className="search__micro--wrap">
              <img src={micro} alt="" className="search__micro--img" />
            </div>
          </div>
          <div className="nav__right">
            {isUserLoggedIn === 0 ? navRightGuess : navRightUser}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
