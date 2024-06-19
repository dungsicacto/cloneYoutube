import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from "../../assets/icons/home.png";
import shorts from "../../assets/icons/film.png";
import subscription from "../../assets/icons/subscribe.png";
import channel from "../../assets/icons/user.png";
import history from "../../assets/icons/history.png";
import playlist from "../../assets/icons/playlist.png";
import yourvideo from "../../assets/icons/youtube.png";
import watchlater from "../../assets/icons/clock.png";
import liked from "../../assets/icons/like.png";
import rightarrow from "../../assets/icons/chevron.png";
import trending from "../../assets/icons/trending.png";
import music from "../../assets/icons/music.png";
import news from "../../assets/icons/newspaper-folded.png";
import gaming from "../../assets/icons/console.png";
import sports from "../../assets/icons/trophy.png";
import reportHistory from "../../assets/icons/red-flag.png";
import help from "../../assets/icons/question.png";
import settings from "../../assets/icons/setting.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <div className="sidebar__list-act">
            <div className="sidebar__item-act">
              <img src={home} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Home</span>
            </div>
            <div className="sidebar__item-act">
              <img src={shorts} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Shorts</span>
            </div>
            <div className="sidebar__item-act">
              <img src={subscription} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Subscriptions</span>
            </div>
          </div>
        </div>
        <div className="sidebar__middle">
          <div className="sidebar__middle-header">
            <div className="sidebar__middle__text">You</div>
            <img src={rightarrow} alt="" className="sidebar__middle-icon" />
          </div>
          <div className="sidebar__list-act">
            <div className="sidebar__item-act">
              <img src={channel} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Your channel</span>
            </div>
            <div className="sidebar__item-act">
              <img src={history} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">History</span>
            </div>
            <div className="sidebar__item-act">
              <img src={playlist} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Playlists</span>
            </div>
            <div className="sidebar__item-act">
              <img src={yourvideo} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Your videos</span>
            </div>
            <div className="sidebar__item-act">
              <img src={watchlater} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Watch Later</span>
            </div>
            <div className="sidebar__item-act">
              <img src={liked} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Liked Videos</span>
            </div>
          </div>
        </div>
        <div className="sidebar__middle">
          <div className="sidebar__middle-header">
            <div className="sidebar__middle__text">Explore</div>
          </div>
          <div className="sidebar__list-act">
            <div className="sidebar__item-act">
              <img src={trending} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Trending</span>
            </div>
            <div className="sidebar__item-act">
              <img src={music} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Music</span>
            </div>
            <div className="sidebar__item-act">
              <img src={gaming} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Gaming</span>
            </div>
            <div className="sidebar__item-act">
              <img src={news} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">News</span>
            </div>
            <div className="sidebar__item-act">
              <img src={sports} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Sports</span>
            </div>
          </div>
        </div>
        <div className="sidebar__middle">
          <div className="sidebar__list-act">
            <div className="sidebar__item-act pt12">
              <img src={settings} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Settings</span>
            </div>
            <div className="sidebar__item-act">
              <img src={reportHistory} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Report History</span>
            </div>
            <div className="sidebar__item-act">
              <img src={help} alt="" className="sidebar__item-icon" />
              <span className="sidebar__item-text">Help</span>
            </div>
          </div>
        </div>
        <div className="sidebar__bottom">
          <div className="sidebar__bottom-inner">
            <div className="sidebar__bottom-content">
              <ul className="sidebar__bottom-links">
                <li className="sidebar__bottom-link">
                  <a href="#">About Press Copyright</a>
                </li>
                <li className="sidebar__bottom-link">
                  <a href="#">Contact Us Creator Advertise</a>
                </li>
                <li className="sidebar__bottom-link">
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
            <div className="sidebar__bottom-content pt12">
              <ul className="sidebar__bottom-links">
                <li className="sidebar__bottom-link">
                  <a href="#">TermsPrivacyPolicy & Safety</a>
                </li>
                <li className="sidebar__bottom-link">
                  <a href="#">How YouTube works</a>
                </li>
                <li className="sidebar__bottom-link">
                  <a href="#">Test new features</a>
                </li>
              </ul>
            </div>
            <div className="sidebar__bottom-copy-right pt12">
              <span className="copy-right">2024 Google LLc</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
