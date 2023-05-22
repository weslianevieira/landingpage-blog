import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }, // outdent/indent
      ],
      ["link", "image"],
      ["clean"],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ],
  };
  return (
    <div className="content">
      <ReactQuill
        className="editor"
        value={value}
        onChange={onChange}
        modules={modules}
        theme={"snow"}
      />
    </div>
  );
}
