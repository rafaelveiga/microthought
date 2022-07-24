import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Title from "../components/Title";
import { Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_MICRO } from "../shared/queries";

const NewMicro = () => {
  const [value, setValue] = useState("");
  const [addMicro, { data, loading, error }] = useMutation(ADD_MICRO);

  return (
    <>
      <Title>New Micro</Title>

      <div className="shadow-md px-6 py-6 mt-2 mb-3 bg-white rounded-md">
        <Formik
          initialValues={{
            title: "",
            content: "",
          }}
          onSubmit={(values) => {
            addMicro({
              variables: {
                title: values.title,
                content: values.content,
                date: new Date(),
              },
            });
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <label htmlFor="title" className="text-gray-600 text-xs">
                Title
              </label>
              <Field
                name="title"
                className="px-2 py-2 border border-gray-300 w-full text-md mb-5"
                placeholder="Title..."
              />

              <label htmlFor="content" className="text-gray-600 text-xs">
                Content
              </label>
              <ReactQuill
                theme="snow"
                className="mb-5"
                placeholder="Type here..."
                value={values.content}
                onChange={(e) => setFieldValue("content", e)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
              >
                Create
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default NewMicro;
