import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4xyx3ls', 'template_8bku7ms', form.current, 'yXAGtb1RZr6wyZb5P' 
      )
      .then(
        (res) => {
          alert('Mensagem enviada com sucesso! :)')
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset(); /* Limpar form apos enviar */
  };
  return (
    <section className="contact">
      <div className="center">
        <div className="w50 contact-info">
          <h2>
            A mais importante,
            <br />
            primeira conversa.
          </h2>
          <br />
          <p>
            <strong>WhatsApp:</strong> (61) 99133-3071
          </p>
          <p>
            <strong>Telefone:</strong> (61) 3244-7176
          </p>
          <p>
            <strong>E-mail:</strong> orientalfisiodf@gmail.com
          </p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15354.706592863751!2d-47.894001!3d-15.820994999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2532c2474d43%3A0x30f30261b1fb97e4!2sCentro%20Cl%C3%ADnico%20Metropolis!5e0!3m2!1spt-BR!2sus!4v1684237891861!5m2!1spt-BR!2sus"
              width="400"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="map-txt">L2 SUL QUADRA 607 MD. 47 SALA 07 EDIFÍCIO METRÓPOLIS</p>
          <p>Brasília - DF</p>
        </div>

        <div className="w50 contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Nome"  type={"text"} required name="user_name"/>
            <input placeholder="E-mail" type={"text"} required name="user_email"/>
            <input placeholder="Telefone" type={"text"} required name="contact_number"/>
            <label>Mensagem</label>
            <textarea
              placeholder="Gostaria de saber sobre a disponibilidade de horários e os preços. Preciso de ajuda com o seguinte incômodo:"
              required name="message"
            ></textarea>
            <input id="submit" type="submit" value="Solicitar Orçamento" />
          </form>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default ContactForm;
