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
              <div className="footer__title">Об институте </div>
              <ul className="footer__list">
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Персонал
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Достижения
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__item-block">
              <div className="footer__title">Абитуридентам</div>
              <ul className="footer__list">
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Направление
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Правила приема
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__item-block">
              <div className="footer__title">Студентам</div>
              <ul className="footer__list">
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Студенческий совет
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Лучшие студенты
                  </Link>
                </li>
                <li className="footer__item-item">
                  <Link to="#" className="footer__link">
                    Портал
                  </Link>
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
                    <a href="#" className="footer__link icon-location2">
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
