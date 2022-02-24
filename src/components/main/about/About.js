import React from "react";
import "./about.css";
import Teacher from "./teacher/Teacher";
import { useEffect } from "react";
const About = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="information">
      <div className="container">
        <div className="information__items">
          <div className="information__item">
            <div className="information__title">Об институте </div>
            <div className="information__text">
              За годы существования института сформировались основные
              направления его деятельности ориентированные с одной стороны, на
              проблематику сравнительного правоведения, а с другой – на
              проведение фундаментальных исследований в области международного
              публичного и международного частного права, а также
              специализированной языковой подготовке, так как в институте
              изучаются французский, китайский, арабский, английский и другие
              языки которые играют немаловажную роль в нынешнем трудовом рынке.
              В настоящее время в институте ведется подготовка кадров по
              следующим направлениям с присвоением академической степени
              бакалавр на базе полного среднего образования по следующим
              направлениям:
            </div>
          </div>
          <div className="information__item information__item-img">
            <img src="images/about.jpg" alt="" />
          </div>
        </div>
        <div className="information__goals">
          <div className="information__goals-title">Миссия</div>
          <div className="information__goals-items">
            <div className="information__goals-item">
              <h2>1</h2>
              <div className="information__goals-topText">
                Модернизация образовательного процесса
              </div>
              <div className="information__goals-bottomText">
                на основе разработки инновационных образовательных программ.
              </div>
            </div>
            <div className="information__goals-item">
              <h2>2</h2>
              <div className="information__goals-topText">
                Развитие человеческих ресурсов.
              </div>
              <div className="information__goals-bottomText">
                на основе разработки инновационных образовательных программ.
              </div>
            </div>
            <div className="information__goals-item">
              <h2>3</h2>
              <div className="information__goals-topText">
                Развитие международного сотрудничества.
              </div>
              <div className="information__goals-bottomText">
                на основе разработки инновационных образовательных программ.
              </div>
            </div>
            <div className="information__goals-item">
              <h2>4</h2>
              <div className="information__goals-topText">
                Развитие социально-ответственной личности.
              </div>
              <div className="information__goals-bottomText">
                на основе разработки инновационных образовательных программ.
              </div>
            </div>
          </div>
        </div>
        <div className="administration">
          <div className="container">
            <div className="administration__block">
              <div className="administration__title">Администрация</div>
              <div class="administration__items">
                <Teacher
                  img="teacher1.jpg"
                  position="Директор"
                  name="Ахметов Мирдин Алыкулович"
                  awards="доктор физико-математических наук, профессор"
                  email="Email: contact@ksla.edu.kg"
                  phone="Телефон: +996 507 060 654 "
                />
                <Teacher
                  img="teacher2.png"
                  position="Заместитель директорар"
                  name="Аскарбеков Дүр Эркинбекович"
                  awards="доктор физико-математических наук, профессор"
                  email="Email: contact@ksla.edu.kg"
                  phone="Телефон: +996 772 675 593  "
                />
                <Teacher
                  img="teacher3.png"
                  position="Ведущий специалист"
                  name="Омуркулова Айзада Нарынбековна"
                  awards="доктор физико-математических наук, профессор"
                  email="Email: contact@ksla.edu.kg"
                  phone="Телефон: +996 500 990 603 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="achievments">
          <div class="achievments__title">Достижения</div>
          <div class="achievments__content">
            <p>
              2021 года студенты 4 курса Бакишова Тинатик и МырзабековатАйзирек
              удостоились президентской стипендии как один из лучших студентов
              Кыргызстана ;
            </p>
            <p>
              Студенты 2-курса заняли почетное первое место на брейн-ринге по
              экологическому праву; В 2019 году творческий коллектив Института
              занял 1 место в спорт-конкурсе художественной самодеятельности
              среди студентов;
            </p>
            <p>
              В 2019 году награждены дипломом 2 степени на турнире по Земельному
              праву среди студентов 4 курса;
            </p>
            <p>
              в 2019 году студенты награждены дипломом в номинации Находчивая
              команда в брейн-рингепо Истории государства и права Кыргызстана;
            </p>
            <p>
              Следуя девизу института «Путь к успеху» наши студенты никогда не
              сдаются и стремятся к победе и в 2019 году наши студенты
              награждены дипломом за волю к победе в ежегодном Брейн-ринге по
              Истории Государства и права зарубежных стран;
            </p>
            <p>
              Вместе с тем студенты выезжают на различные международные
              конференции в Республику Казахстан, Республику Узбекистан и в
              другие страны. Этот перечень достижений не исчерпывающий, так как
              Институт готовит будущее Кыргызстана.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
