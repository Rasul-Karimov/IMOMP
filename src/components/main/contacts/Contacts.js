import React from "react";
import "./contacts.css";
import { useEffect } from "react";
const Contacts = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return <div></div>;
};

export default Contacts;
