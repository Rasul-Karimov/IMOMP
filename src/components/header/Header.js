import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  let [fixed, setFixed] = useState(false);
  let [dropdown, setDropdown] = useState(false);
  let [menu, setMenu] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  function handleClick() {
    setDropdown(!dropdown);
  }
  function handleMenu() {
    setMenu(!menu);
  }
  function handleCloseMenu() {
    setMenu(false);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/" className="header__top-logo">
            <img src="images/mainlogo.png" alt="" />
          </Link>
          <div className="header__top-text">
            Институт международных отношений и международного права
          </div>
          <a href="#" className="header__top-email">
            <span className="icon-email"></span>
            contact.gmail.com
          </a>
          <a href="#" className="header__top-phone">
            9999090909
          </a>
        </div>
      </div>
      <div className={`header__menu-block ${fixed ? "fixed" : null}`}>
        <div className="header__menu-container container">
          <nav className={`header__menu  ${menu && "_active"}`}>
            <ul className="header__list">
              <li className="header__item">
                <NavLink
                  onClick={handleCloseMenu}
                  to="/"
                  className="header__link"
                >
                  Главная
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  onClick={handleCloseMenu}
                  to="/about"
                  className="header__link"
                >
                  Об институте
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  onClick={handleCloseMenu}
                  to="/forStudents"
                  className="header__link"
                >
                  Абитуриентам
                </NavLink>
              </li>
              <li className="header__item">
                <Link
                  onClick={handleCloseMenu}
                  to="/reception"
                  className="header__link"
                >
                  Прием абитуриентов
                </Link>
              </li>
              <li className="header__item">
                <Link
                  onClick={handleCloseMenu}
                  to="/forStudents"
                  className="header__link"
                >
                  Направление
                </Link>
              </li>
              <li className="header__item ">
                <NavLink
                  onClick={handleClick}
                  to="#"
                  className={`header__link icon-arrow-up ${
                    dropdown && "_active"
                  }`}
                >
                  Студентам
                  <ul className="header__sub-list">
                    <li className="header__sub-item">
                      <Link
                        onClick={handleCloseMenu}
                        to="/management"
                        className="header__sub-link"
                      >
                        Студенческий совет
                      </Link>
                    </li>
                    <li className="header__sub-item">
                      <Link
                        onClick={handleCloseMenu}
                        to="/bests"
                        className="header__sub-link"
                      >
                        Лучшие студенты
                      </Link>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/contacts" className="header__link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <a href="#" className="header__portal">
            <span className="icon-user"></span>
            портал
          </a>
          <div onClick={handleMenu} className="header__btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
