import React from "react";
import "./sendTestimonialPage.css";
import TestimonialForm from "../../../components/testimonials/testimonialForm/TestimonialForm";

export default function SendTestimonialPage() {
  return (
    <section className="sendTestimonial-container">
      <h1>Compartilhe Sua Experiência</h1>
    <TestimonialForm />
    </section>
  );
}
