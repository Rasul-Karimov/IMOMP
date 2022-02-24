import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__item">
            <div className="footer__item-block">
              <div className="footer__title">Абитуриентам</div>
              <ul className="footer__list">
                <li className="footer__item-item">
                  <Link to="/forStudents" className="footer__link">
                    Направление
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="/reception" className="footer__link">
                    Правила приема
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__item-block">
              <div className="footer__title">Студентам</div>
              <ul className="footer__list">
                <li className="footer__item-item">
                  <Link to="/management" className="footer__link">
                    Студенческий совет
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="/bests" className="footer__link">
                    Лучшие студенты
                  </Link>
                </li>
                <li className="footer__item-item">
                  <a
                    target="blank"
                    href="http://avn.ksla.kg/"
                    className="footer__link"
                  >
                    Портал
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__item-block">
                <div className="footer__title ">Контакты</div>
                <ul className="footer__contacts">
                  <li className="footer__item-item">
                    <a href="#" className="footer__link icon-phone">
                      0507060654
                    </a>
                  </li>
                  <li className="footer__item-item">
                    <a href="#" className="footer__link  icon-email">
                      contacts.gmail.com
                    </a>
                  </li>
                  <li className="footer__item-item ">
                    <a
                      target="blank"
                      href="https://2gis.kg/bishkek/firm/70000001040535756?m=74.629838%2C42.855611%2F16"
                      className="footer__link icon-location2"
                    >
                      уль. Горького 18
                    </a>
                  </li>
                </ul>
                <ul className="footer__item-messangers">
                  <li className="footer__item-item ">
                    <Link className=" footer__link icon-instagram" to=""></Link>
                  </li>
                  <li className="footer__item-item ">
                    <Link className="footer__link icon-fasebook" to="#"></Link>
                  </li>
                  <li className="footer__item-item ">
                    <Link className="footer__link  icon-whatsapp" to=""></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
