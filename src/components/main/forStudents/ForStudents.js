import React from "react";
import "./forStudents.css";
import { useEffect } from "react";
const ForStudents = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="forStudents">
      <div class="forStudents__title main-title">Бакалавр</div>
      <div class="forStudents__items">
        <div class="forStudents__item"></div>
        <div class="forStudents__item"></div>
        <div class="forStudents__item"></div>
      </div>
      <div className="forStudents__container container">
        <div className="forStudents__ways">
          <div className="forStudents__way">
            <h3 className="forStudents__way-title">Юрисприденция:</h3>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">
                Международное право:
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">Исламское право:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">Китайское право:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">Европейское право:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
          </div>
          <div className="forStudents__ways-img">
            <img src="images/weight.png" alt="" />
          </div>
        </div>
        <div className="forStudents__ways">
          <div className="forStudents__way">
            <h3 className="forStudents__way-title">Международное отношение</h3>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">
                Дипломатическая и консульская служба:
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">
                Глобальные миграционные процессы:
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
          </div>
          <div className="forStudents__ways-img">
            <img src="images/globe.png" alt="" />
          </div>
        </div>
        <div className="forStudents__ways">
          <div className="forStudents__way">
            <h3 className="forStudents__way-title forStudents__title">
              Магистратура
            </h3>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">
                Международное право:
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">Исламское право:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
            <div className="forStudents__way-item">
              <h4 className="forStudents__way-subTitle">Европейское право:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis ex voluptas debitis sed praesentium qui soluta
                inventore animi ab earum, nesciunt, ipsa incidunt cum dolores
                autem temporibus. Eum, odit?
              </p>
            </div>
          </div>
          <div className="forStudents__ways-img">
            <img src="images/moon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForStudents;
