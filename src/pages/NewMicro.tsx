import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewMicro = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800">New Micro</h2>

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
