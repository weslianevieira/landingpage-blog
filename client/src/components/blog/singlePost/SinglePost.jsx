import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = "https://orientalfisiodf-api.onrender.com/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://orientalfisiodf-api.onrender.com/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://orientalfisiodf-api.onrender.com/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/blog");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://orientalfisiodf-api.onrender.com/api/posts/${post._id}`, {
        username: user.username,
        title,
        content,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      {post.photo && (
        <img src={PF + post.photo} alt="" className="singlePostImg" />
      )}
      <div className="singlePostWrapper">
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor:
            <Link to={`https://orientalfisiodf-api.onrender.com/api/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toLocaleDateString("pt-BR")}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <p
            className="singlePostDesc"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Atualizar
          </button>
        )}
      </div>
    </div>
  );
}
