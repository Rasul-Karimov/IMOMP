import React from "react";
import "./contacts.css";
import { useEffect } from "react";
const Contacts = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contacts">
      <div class="contacts__title">Контакты</div>

      <div className="contacts__container container">
        <div className="contacts__adres">
          <span>Адрес: </span> Кыргызская Республика г.Бишкек ул.Горького, 18
        </div>
        <a href="tel:+996700406730" className="contacts__phone">
          <span>Телефон:</span>+996700406730
        </a>
        <div className="contacts__messengers messengers-contacts">
          <div className="messengers-contacts__title">
            Мы в социальных сетях:
          </div>
          <div className="messengers-contacts__items">
            <a target="_blank" href="" className="icon-whatsapp"></a>
            <a target="_blank" href="" className="icon-fasebook"></a>
            <a target="_blank" href="" className="icon-instagram"></a>
            <a
              target="_blank"
              href="https://instagram.com/itacademy_ksla?utm_medium=copy_link "
            ></a>
          </div>
        </div>
        <div className="contact__map">
          <div className="contact__map-img">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a007b0d6dc2685b5aeefa86d31475179ce61dcac6678e246257d9697e678f71&amp;source=constructor"
              width="816"
              height="720"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
