import React, { useContext, useState } from "react";
import "./createPostPage.css";
import Editor from "../../../components/blog/editor/Editor";
import axios from "axios";
import { Context } from "../../../context/Context";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  async function createNewPost(e) {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      content,
      file,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.post("/posts", newPost);
     /*  window.location.replace("/post/" + res.data._id); */
      window.location.replace("/blog");
    } catch (err) {}
  }

  return (
    <form className="createPost" onSubmit={createNewPost}>
      <h1>Criar Post</h1>
      <input
        type="text"
        placeholder={"Título"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Escreva aqui a primeira frase ou uma breve introdução do texto"}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <Editor className="editor" value={content} onChange={setContent} />
      <div className="createPost-btn" >
      <button className="btn" type="submit">
        Salvar
      </button>
      </div>
    </form>
  );
}
