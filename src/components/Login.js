import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as EmailValidator from "email-validator";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  const onSubmit = () => {
    Navigate("/");
  };
  return (
    <>
      <div className="mb-[5rem] pt-[5px] pl-[5px]"> back</div>
      <div className="bg-white w-3/5 h-[22rem] m-auto rounded-lg ">
        <div className="">
          <div className=" text-center">
            <h1 className="text-[2rem] font-semibold ">Login Form</h1>
          </div>
        </div>
        <div className="mx-[20px] mt-[2rem]">
          <div className="">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
            >
              {({ touched, errors, isValid }) => (
                <Form>
                  <div className="">
                    <label htmlFor="email" className="block mb-[8px]">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className={`mb-[3px] block w-full h-[40px] pl-[8px] rounded-lg bg-[#e9e7e7] form-control ${
                        touched.email && errors.email
                          ? " is-invalid border-[#ef3535] "
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback text-[#e84d4d] border-[#e84d4d]"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="block mb-[8px] pt-[15px]"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      // onChange={(e) => setPassword(e.target.value)}
                      className={`mb-[3px] block w-full h-[40px] pl-[8px] rounded-lg form-control bg-[#e9e7e7] ${
                        touched.password && errors.password
                          ? "is-invalid border-[#ef3535]"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback text-[#e84d4d]"
                    />
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      disabled={!isValid}
                      className={`block items-center m-auto mt-[1rem] w-1/3 h-[2rem] rounded-lg ${
                        isValid ? "bg-[#f44f4f]" : "bg-[#d5d2d2]"
                      }`}
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
