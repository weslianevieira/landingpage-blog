import Hero from "../../components/hero/Hero";
import HomeSlider from "../../components/home/HomeSlider";
import "./homePage.css";
import InfoHome from "../../components/home/InfoHome";
import AboutClinic from "../../components/home/AboutClinic";
import Brief from "../../components/home/Brief";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="clients-slider">
        <div className="center">
          <h2>Técnicas Disponíveis</h2>
          <HomeSlider />
        </div>
      </div>
      <InfoHome />
      <AboutClinic />
      <Brief />
    </>
  );
}
