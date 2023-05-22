import React from "react";
import "./contactsFooter.css";
import { Link } from "react-router-dom";
import logoShort from "../../assets/header/logo-short-kawai.webp";

const ContactsFooter = () => {
  return (
    <footer>
      <section className="metodologia">
        <div className="center">
          <h2>Conheça nossos Tratamentos</h2>
          <p>
            O que acha de fazermos o que mais gostamos de fazer? Conversar!
            <br />
            Entre em contato por WhatsApp, e-mail ou telefone.
          </p>
          <Link to="/contact">Entrar em Contato</Link>
        </div>
      </section>

      <div className="center">
        <div className="col-footer">
          <h2>Suporte</h2>
          <a href="/">Contato</a>
          <a href="/">Endereço</a>
        </div>

        <div className="col-footer">
          <h2>Páginas</h2>
          <a>
            <Link to="/">Início</Link>
          </a>
          <a>
            <Link to="/about">Nossa Clínica</Link>
          </a>
          <a>
            <Link to="/blog">Blog</Link>
          </a>
          <a>
            <Link to="/testimonial">Depoimentos</Link>
          </a>
          <a>
            <Link to="/contact">Contato</Link>
          </a>
        </div>

        <div className="col-footer">
          <h2 id="copyright">©ORIENTALFISIO </h2>
          <a id="copyright">Todos os Direitos Reservados</a>
        </div>

        <div className="col-footer">
          <img src={logoShort} alt="logo-footer" />
        </div>
      </div>
    </footer>
  );
};

export default ContactsFooter;
