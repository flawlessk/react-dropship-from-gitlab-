import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faListUl,
  faCube,
  faShoppingCart,
  faCheckSquare,
  faArrowsAltH,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="../../public/index.html" id="dropship_logo">
          <img
            className="logo_img"
            src="/assets/dropship_logo.png"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="drop-down">
        <ul className="nav_list">
          <div className="list_box-profile">
            <li className="list-item" id="list-item--profile">
              <img
                className="item-img"
                src="/assets/profile.jpg"
                alt="profile"
              ></img>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--dashboard">
              <FontAwesomeIcon className="icons" icon={faTachometerAlt} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--catalog">
              <FontAwesomeIcon className="icons" icon={faListUl} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--cube">
              <FontAwesomeIcon className="icons" icon={faCube} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--inventory">
              <FontAwesomeIcon className="icons" icon={faShoppingCart} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--orders">
              <FontAwesomeIcon className="icons" icon={faCheckSquare} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--transactions">
              <FontAwesomeIcon className="icons" icon={faArrowsAltH} />
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--store">
              <FontAwesomeIcon className="icons" icon={faClipboardList} />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
