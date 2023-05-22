import React from "react";
import logoComplete from "../../assets/home/logo-complete-kawai.webp";

const AboutClinic = () => {
  return (
    <section className="about-team">
      <div className="center">
        <div className="w50 team-description-2">
          <h2>
            Técnica japonesa, <br /> inovadora e revolucionária.
          </h2>
          <p>
            A Kawai Kinkeitai é uma técnica terapêutica japonesa criada para
            tratar problemas musculares, nervosos e ósseos. Ela usa movimentos
            passivos nos membros para estimular a ativação correta da
            musculatura e alinhar as vértebras removendo a compressão dos
            nervos.
            <br />O autor da técnica Kawai Kinkeitai é o Dr. Takeo Kawai, que
            dedicou 30 anos de pesquisa e investigação para desenvolver essa
            técnica terapêutica. É sempre importante lembrar que qualquer
            técnica terapêutica deve ser realizada por um profissional treinado
            e qualificado para garantir sua eficácia e segurança.
          </p>
        </div>

        <div className="w50 img-team">
          <img src={logoComplete} alt="time" />
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default AboutClinic;
