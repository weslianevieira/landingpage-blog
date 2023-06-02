import React, { useState, useEffect } from "react";
import "./testimonialPage.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function TestimonialPage() {
  const [testimonies, setTestimonies] = useState([]);
  const { search } = useLocation();
 
  useEffect(() => {
    const fetchTestimonies = async () => {
      const res = await axios.get("https://orientalfisiodf-api.onrender.com/api/testimonies" + search);
      setTestimonies(res.data);
    };
    fetchTestimonies();
  }, [search]);

  return (
    <div className='testimonialPage'>
      <h1 className="testimonialPage-heading">Depoimentos</h1>
      {testimonies.map((testimony) => (
        <Testimonials key={testimony.id} testimony={testimony} />
      ))}
    </div>
  );
}
