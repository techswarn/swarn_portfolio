import { Fragment } from "react";
import Icon from "./Icon";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <div className="side-nav__icon">
              <Icon icon="document" size={30} color="orange" />
            </div>
            <span className="side-nav__text">Overview</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <div className="side-nav__icon">
              <Icon icon="info" size={30} color="orange" />
            </div>
            <span className="side-nav__text">About me</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <div className="side-nav__icon">
              <Icon icon="location-pin" size={30} color="#fff" />
            </div>
            <span className="side-nav__text">Location</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <div className="side-nav__icon">
              <Icon icon="mail" size={30} color="orange" />
            </div>
            <span className="side-nav__text">Contact</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <div className="side-nav__icon">
              <Icon icon="mail" size={30} color="orange" />
            </div>
            <span className="side-nav__text">Sign In</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2021 by Swarn. All rights reserved</div>
    </div>
  );
};

export default Sidebar;
