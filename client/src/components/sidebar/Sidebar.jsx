import "./sidebar.css";
import Profile from "../../assets/sidebar/ademar-pic.webp";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOBRE MIM</span>
        <img src={Profile} alt="profile" />
        <ul className="cv">
          <li>Formação: </li>
          <li>
            <b>-</b> Massoterapia na Tokyo Seitai Jissen Gakuin, 1999/Japão;
          </li>
          <li>
            <b>-</b> Quiropraxiano no Musashino Gakou Senta, 2005/Japão;
          </li>
          <li>
            <b>-</b> Kawai kinkeitai na Kawai kinkeitai Medical Terapy institute
            of Japan, 2010/Japão;
          </li>
          <li>
            <b>-</b> Fisioterapia na Universidade Paulista (UNIP), 2016/Brasil.
          </li>
        </ul>
      </div>
    </div>
  );
}
