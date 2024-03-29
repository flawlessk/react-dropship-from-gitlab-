import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

const Dropdown = ({ category }) => {
  const [ddOpen, setDdOpen] = useState(false);
  const toggle = () => setDdOpen(!ddOpen);
  let history = useHistory();

  const redirectMain = () => {
    toggle(false);
    history.push("/catalog");
  };

  return (
    <nav className="catalog__nav dd-wrapper">
      <div className="catalog__nav-form">
        <div
          className="form-text dd-category"
          role="button"
          onKeyPress={() => toggle(!ddOpen)}
          onClick={() => toggle(!ddOpen)}
        >
          Choose Category
          <span className="sortdown-first">
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
        {ddOpen && (
          <ul className="dd-list">
            <li className="dd-list-item" key="icon" onClick={redirectMain}>
              <button type="button">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </li>
            {category.map((item) => (
             <Link to={`/catalog/${item.replace(/ /g, "-")}`}>
                <li className="dd-list-item" key={item}>
                  <button type="button">
                    {item}
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        )}
        <div className="form-text-category">
          Choose Niche
          <span className="sortdown-second">
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Dropdown;
