import React from "react";
import "./reception.css";
import { useEffect } from "react";
const Reception = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <article className="reception">
        <h3 class="reception__title">Прием абитуриентов</h3>
        <div class="reception__content">
          <div class="reception__items">
            <div class="reception__item">
              <div class="reception__item-title">
                Для поступления необходимо пройти:
              </div>
              <div class="reception__item-text">
                Общереспубликанское тестирование (ОРТ) – основной тест;
              </div>
            </div>
            <div class="reception__item">
              <div class="reception__item-title">
                Дополнительный предметный тест:
              </div>
              <div class="reception__item-text">
                –История (юриспруденция, правоохранительная деятельность,
                государственное муниципальное управление, правоведение);
                –Математика (экономика, информационные системы и технологии,
                бизнес-информатика, прикладная информатика, информационная
                безопасность, таможенное дело, экономика и бухгалтерский учет,
                прикладная информатика, информационная безопасность
                автоматизированных систем); –Английский язык (международные
                отношения). .
              </div>
            </div>
            <div class="reception__item">
              <div class="reception__item-title">
                Перечень документов в приемную комиссию при поступлении:
              </div>
              <div class="reception__item-text">
                Заявление установленного образца; Сертификат ОРТ (оригинал);
                Документ об образовании (оригинал); Документ, удостоверяющий
                личность и гражданство (оригинал и копия); 6 фотографий 3х4.
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Reception;
