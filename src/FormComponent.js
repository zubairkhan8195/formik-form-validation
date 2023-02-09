import { useFormik } from "formik";
import React from "react";
import { FormSchema } from "./FormShema";
import Input from "./Input";

function FormComponent() {
  const formikIntialValues = {
    name: "",
    email: "",
    password: "",
    cpass: "",
  };
  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: formikIntialValues,

    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <div className="flex justify-center items-center h-screen bg-[linear-gradient(#808993,#dcd0d3)] ">
      <form
        onSubmit={formik.handleSubmit}
        className=" relative w-[600px] min-h-[750px] border-4 rounded-[10px] bg-[linear-gradient(#c6c8cc,#e3e0e1)] border-white"
        g
      >
        <h1 className="text-white rounded-[4px] absolute top-[-20px] left-[160px] text-[30px] inline-block px-[20px] py-3 bg-[#5dc5ff]">
          Form Validation
        </h1>
        <div className="flex justify-center mt-[70px]">
          <i
            className="fa fa-user-circle-o text-[150px] text-[#959aa4]"
            aria-hidden="true"
          ></i>
        </div>
        <Input
          type="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter Name"
          error={formik.errors.name}
        />
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter Email"
          error={formik.errors.email}
        />
        <Input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Enter Password"
          error={formik.errors.password}
        />
        <Input
          type="password"
          name="cpass"
          onChange={formik.handleChange}
          value={formik.values.cpass}
          placeholder="Enter Confirm Password"
          error={formik.errors.cpass}
        />
        <div className="flex justify-center mt-8 mb-8 px-[100px]">
          <input
            type="submit"
            className="text-[30px] text-white bg-[#5dc5ff] py-2 rounded-md w-[50%] "
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
