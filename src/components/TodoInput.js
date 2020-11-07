import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

function TodoInput(props) {
  const { dispatch } = props;
  function handleFormSubmit(values, actions) {
    const todo = { desc: values.desc, id: uuidv4(), isChecked: false };
    dispatch({ type: "ADD_TODO", payload: { todo } });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ desc: "" }}
      validationSchema={handleTodoInputFormValidation}
      onSubmit={handleFormSubmit}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="todo-input mt-6 flex justify-between mb-4"
        >
          <div className="w-8/12 sm:w-9/12">
            <input
              type="text"
              id="desc"
              name="desc"
              placeholder="add details"
              className="p-2 sm:py-3 border text-sm  sm:text-base border-gray-500 w-full rounded-md block bg-gray-100 focus:outline-none "
              onChange={formik.handleChange}
              value={formik.values.desc}
            />
            {formik.errors.desc ? (
              <small className="text-red-500">{formik.errors.desc}</small>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-3/12 sm:w-2/12 bg-blue-600 shadow-md font-semibold text-blue-100 rounded-md self-start py-2 text-sm  sm:text-base sm:py-3 hover:bg-blue-500 transition duration-200 ease-in-out "
          >
            Add
          </button>
        </form>
      )}
    </Formik>
  );
}

function handleTodoInputFormValidation() {
  return Yup.object({
    desc: Yup.string()
      .min(5, "Must be 5 characters or more")
      .required("Required"),
  });
}

export default TodoInput;
