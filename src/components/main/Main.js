import React from "react";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Management from "./management/Management";
import Contacts from "./contacts/Contacts";
import About from "./about/About";
import Bests from "./bests/Bests";
import ForStudents from "./forStudents/ForStudents";
import Reception from "./reception/Reception";
import Front from "./front/Front";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/management" element={<Management />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/bests" element={<Bests />} />
        <Route path="/forStudents" element={<ForStudents />} />
        <Route path="/reception" element={<Reception />} />
      </Routes>
    </main>
  );
};

export default Main;
