import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./header.css";
import shortLogo from '../../assets/header/logo-short-kawai.webp'

export default function Header() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <img src={shortLogo} alt="logo" />
      </div>
      <div className={`topCenter ${menuOpen ? "active" : ""}`}>
        <ul className="topList" id="topList-mobile-off">
          <li className="topListItem" id="topListItem-mobile-off">
            <Link className="link" to="/">
              Início
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              Nossa Clínica
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/testimonial">
              Depoimentos
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/sendTestimony">
              Envie Seu Depoimento
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            {/* <li className="topListItem">
              <Link className="link" id="topListItem" to="">
                  <img className="topImg" src={PF + user.profilePic} alt="" /> 
                <i className="bx bx-user-circle bx-sm"></i>
                <span>Perfil</span>
              </Link>
            </li> */}
            <li className="topListItem">
              <Link className="link" id="topListItem" to="/writeTestimony">
                <i class="bx bx-edit bx-sm"></i>
                <span>Criar Depoimento</span>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" id="topListItem" to="/writePost">
                <i class="bx bx-edit bx-sm"></i>
                <span>Criar Post</span>
              </Link>
            </li>
            <li
              className="topListItem"
              id="topListItem-mobile-on"
              onClick={handleLogout}
            >
              <i className="bx bx-log-out bx-sm"></i>
              <p style={{ display: "none" }}>{user && "LOGOUT"}</p>
            </li>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem" style={{ display: "none" }}>
              <Link className="link" to="/register">
                Registrar
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" id="topListItem" to="/login">
                <i className="bx bx-log-in bx-sm"></i>
                <span>Entrar</span>
              </Link>
            </li>
          </ul>
        )}

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
          <div className={`line ${menuOpen ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}
