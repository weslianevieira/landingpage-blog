import React from "react";
import Building from "../../assets/about/Ed-Metrópolis.jpg";
import './about.css'

const AboutIntro = () => {
  return (
    <section className="about-time">
      <div className="center">
        <div className="w50 time-about-text">
          <h2>Estamos no Centro Clínico Metrópolis</h2>
          <p>
          Localizada em um prédio moderno e bem estruturado, nossa clínica oferece tratamentos de fisioterapia de alta qualidade para ajudá-lo a recuperar sua saúde e qualidade de vida.
          Nosso fisioterapeuta é altamente qualificado e comprometido em fornecer um tratamento eficaz e personalizado para nossos pacientes. Além disso, nossa clínica é equipada com equipamentos novos e higienizados, permitindo-nos oferecer uma ampla gama de serviços de fisioterapia para tratar uma variedade de condições de saúde.
          Então, se você está procurando por uma clínica de fisioterapia com um tratamento personalizado e eficaz, venha nos visitar!
          </p>
        </div>
        <div className="w50">
          <img src={Building} alt="foto-equipe" />
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default AboutIntro;
