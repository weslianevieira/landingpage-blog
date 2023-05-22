import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dumbbell from "../../assets/home/dumbbell-regular-36.png";
import "./home.css";
import { Link } from "react-router-dom";

export default function BriefSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="brief-single">
        <p>
          "Já precisei destravar minha coluna por causa da realização de
          exercício errado na academia e, com apenas uma sessão, fiquei novinho.
          Já levei minha esposa, pai e mãe para fazer tratamento lá e todos
          saíram sempre elogiando. Parabéns pela dedicação, respeito e
          profissionalismo de vocês. Nota 1000!!"
        </p>

        <p>Renato R.</p>
        <img src={dumbbell} alt="dumbbell-pic" />
      </div>

      <div className="brief-single">
        <p>
          "Ea et magna do occaecat cillum consequat. Minim et exercitation ad
          esse dolor pariatur nulla et minim aliquip. Labore pariatur
          exercitation nisi labore nisi reprehenderit labore veniam."
        </p>

        <p>John Doe</p>
        <img src={""} alt="autor" />
        <Link to='/testimonial'>Ver todos</Link>
      </div>
    </Slider>
  );
}
