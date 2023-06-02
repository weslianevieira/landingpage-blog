import React, { useContext, useState } from "react";
import "./createTestimonyPage.css";
import Editor from "../../../components/blog/editor/Editor";
import axios from "axios";
import { Context } from "../../../context/Context";
 
export default function CreateTestimonyPage() {
  const [problemSolved, setProblemSolved] = useState("");
  const [testimony, setTestimony] = useState("");
  const [clientName, setClientName] = useState("");
  const { user } = useContext(Context);

  async function createNewTestimony(e) {
    e.preventDefault();
    const newTestimony = {
      username: user.username,
      clientName,
      testimony,
      problemSolved,
    };

    try {
      const res = await axios.post("https://orientalfisiodf-api.onrender.com/api/testimonies", newTestimony);
      window.location.replace("/testimonial");
    } catch (err) {}
  }

  return (
    <form className="createTestimony" onSubmit={createNewTestimony}>
      <h1>Criar Depoimento</h1>
      <input
        type="text"
        placeholder={"Nome do paciente"}
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Problema tratado"}
        value={problemSolved}
        onChange={(e) => setProblemSolved(e.target.value)}
      />
      <Editor className="editor" value={testimony} onChange={setTestimony} />
      <div className="createTestimony-btn">
        <button className="btn" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
}
