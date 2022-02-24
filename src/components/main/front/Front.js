import React from "react";
import "./front.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Front = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header__main">
        <img className="header__img" src="images/headerMain.jpg" alt="" />
        <div className="header__main-container container">
          <div className="header__main-text">
            <p>
              Добро Пожаловать, в Институт международных отношений и
              международного права!
            </p>
            <h6>Где мы - там и победа!</h6>
          </div>
          <div className="header__arrow icon-arrow-up"></div>
        </div>
      </div>
      <div className="specialties">
        <div className="container">
          <h3 className="specialties__title">Направление</h3>
          <div className="specialties__main-block">
            <div className="specialties__block">
              <Link to="/forStudents" className="specialties__btn">
                <span className="icon-earth"></span>
                <h3> Бакалавриат</h3>
                <span className="icon-arrow-right2"></span>
              </Link>
              <Link to="/forStudents" className="specialties__btn">
                <span className="icon-graduate"></span>
                <h3>Магистратура </h3>
                <span className="icon-arrow-right2"></span>
              </Link>
            </div>
            <Link to="/forStudents" className="specialties__btn-more">
              подробнее
            </Link>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about__block">
            <div className="about__content">
              <div className="about__content-title">
                <span>Подготовка</span> высоко-квалифицированных специалистов
              </div>
              <div className="about__content-text">
                Институт был создан с целью подготовки высококвалифицированных
                юристов-специалистов, интеллектуальную, политическую и деловую
                элиту нашего государства, обладающую широким кругозором и
                глубокими профессиональными компетенциями, способностями к
                рациональному мышлению и глубокими познаниями как национального,
                так и основ международного законодательства.
              </div>
              <Link to="/about" className="about__content-btn">
                Об институте
              </Link>
            </div>
            <div className="about__video">
              <img src="images/video.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="container">
          <div className="info__items">
            <div class="info__item">
              <div class="info__item-title info__item-title-first">
                500+ <span>студентов</span>
              </div>
              <div class="info__item-text">
                Ежегодно в академии обучаются более 500 студентов
              </div>
            </div>
            <div class="info__item">
              <div class="info__item-title info__item-title-second">
                8 <span>место</span>
              </div>
              <div class="info__item-text">
                8-ое место в списке лучших университетов страны Данные взяты с
                <p>: https://www.universityguru.ru/universitety-bishkek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
