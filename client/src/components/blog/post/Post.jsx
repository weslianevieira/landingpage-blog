import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import { formatDistance, subDays } from "date-fns";
import pt from "date-fns/locale/pt-BR";

export default function Post({ post }) { 
  const PF = "https://orientalfisiodf-api.onrender.com/images/";

  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link-post">
        <div className="post-img">
        {post.photo && <img src={PF + post.photo} alt="illustration" />}
        </div>
      </Link>
      <Link to={`/post/${post._id}`} className="link-post">
        <div className="post-text">
          <h2>{post.title} </h2>
          <p className="post-info">
            <a className="author">por @{post.username} </a>
            <time>
              {formatDistance(
                subDays(new Date(post.createdAt), 0),
                new Date(),
                { addSuffix: true, locale: pt }
              )}
            </time>
          </p>
          <p className="summary">{post.desc}...</p>
        </div>
      </Link>
    </div>
  );
}