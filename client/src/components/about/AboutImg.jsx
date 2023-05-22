import React from "react";
import './about.css'
import img1 from "../../assets/about/foto-1.jpg";
import img2 from "../../assets/about/foto-2.jpg";
import img3 from "../../assets/about/foto-3.jpg";
import img4 from "../../assets/about/foto-4.jpg";

const AboutImg = () => {
  return (
    <section className="about-images">
      <div className="center">
        <div className="img-about">
          <img className='imgAbout' src={img1} alt="team" />
        </div>

        <div className="image-about">
          <img className='imgAbout' src={img2} alt="team" />
        </div>

        <div className="image-about">
          <img className='imgAbout' src={img3} alt="team" />
        </div>

        <div className="image-about">
          <img className='imgAbout' src={img4} alt="team" />
        </div>
      </div>
    </section>
  );
};

export default AboutImg;
