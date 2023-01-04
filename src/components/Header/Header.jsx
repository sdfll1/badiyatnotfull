import React from "react";
import "./Header.scss";
import logo from "../../assets/img/Badiiyat.png";
import toga from "../../assets/img/toga.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container header__con">
        <Link to={'/home'}><img src={logo} alt="" /></Link>
        <div className="header__other">
          <ul className="pages__list">
            <li className="pages__list_item">
              <Link to={'/home'}>Bosh sahifa</Link>
            <span className="bb"></span>
            </li>
            <li className="pages__list_item">
              <Link>Nashr</Link>
            </li>
            <li className="pages__list_item">
              <Link>Nazm</Link>
            </li>
            <li className="pages__list_item">
              <Link>Maqolalar</Link>
            </li>
            <li className="pages__list_item">
              <Link>Forum</Link>
            </li>
          </ul>
          <img src={toga} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
