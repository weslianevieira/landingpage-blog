import React, { useContext } from "react";
import "./testimonials.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Testimonials({ testimony }) {
  const { user } = useContext(Context);


  const handleDelete = async () => {
    try {
      await axios.delete(`https://orientalfisiodf-api.onrender.com/api/testimonies/${testimony._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/testimonial");
    } catch (err) {}
  };

  return (
    <section className="testimonial-container">
      <div className="wrapper border-radius">
      {testimony.username ===
        user?.username && (
          <div className="singleTestimonyEdit">
            <i
              className="singleTestimonyIcon far fa-trash-alt"
              onClick={handleDelete}
            ></i>
          </div>
        )}
        <div class="title">
          <small>{testimony.problemSolved}</small>
        </div>
        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: testimony.testimony }}></p>
          <p className="author">
            <b>-</b>
            {testimony.clientName}
          </p>
        </div>
      </div>
    </section>
  );
}
