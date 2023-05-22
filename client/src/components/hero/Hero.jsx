import "./hero.css";
import landscape from '../../assets/header/rocks-japan-landscape16:9_blue.jpg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="headerTitles">
        <span className="headerTitleSm">Tratamento de Dores</span>
        <span className="headerTitleLg">Oriental Físio</span>
      </div>
      <img
        className="headerImg"
        src={landscape}
        alt=""
      />
    </div>
  );
}
