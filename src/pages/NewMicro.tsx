import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Title from "../components/Title";

const NewMicro = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Title>New Micro</Title>

      <div className="shadow-md px-6 py-6 mt-2 mb-3 bg-white rounded-md">
        <ReactQuill
          theme="snow"
          placeholder="Type here..."
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default NewMicro;
