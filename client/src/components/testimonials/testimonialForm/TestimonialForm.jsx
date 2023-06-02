import React, { useRef } from "react";
import "./testimonialForm.css";
import emailjs from "@emailjs/browser";

const TestimonialForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jlu1ww",
        "template_8bku7ms",
        form.current,
        "yXAGtb1RZr6wyZb5P"
      )
      .then(
        (res) => {
          alert("Mensagem enviada com sucesso! :)");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset(); /* Limpar form apos enviar */
  };
  return (
    <section className="testimonial">
      <div className="center">
        <div className="testimonial-form">
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Nome" type={"text"} required name="user_name" />
            <label>Mensagem</label>
            <textarea
              placeholder=""
              required
              name="message"
            ></textarea>
            <input id="submit" type="submit" value="Compartilhar" />
          </form>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
};

export default TestimonialForm;
