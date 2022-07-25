import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as EmailValidator from "email-validator";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  
  const {setUserInfo} = props

  const Navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    Navigate("/");
    setUserInfo(values)
  };
  const handleBack = () => {
    Navigate("/");
  }



  return (
    <>
      <div className="mb-[5rem] pt-[2rem] pl-[2rem] text-[white] cursor-pointer hover:text-[#e0dede] " onClick={() => handleBack()}>
      <i className="fa-solid fa-backward text-[2rem]"></i>
        </div>
      <div className="bg-white w-3/5 lg:w-2/6 h-auto m-auto rounded-lg shadow-gray-50 ">
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
              {({ touched, errors, isValid,dirty }) => (
                <Form>
                  <div className="">
                    <label htmlFor="email" className="block mb-[8px]">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className={`mb-[3px] block w-full h-[40px] pl-[8px] rounded-lg bg-[#e9e7e7] outline-[#abedf1] form-control ${
                        touched.email && errors.email
                          ? " is-invalid border-[#ef3535] "
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback text-[#e84d4d] italic"
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
                      className={`mb-[3px] block w-full h-[40px] pl-[8px] rounded-lg form-control bg-[#e9e7e7] outline-[#abedf1] ${
                        touched.password && errors.password
                          ? "is-invalid border-[#ef3535]"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback text-[#e84d4d] italic"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={!(isValid&&dirty)}
                      className={` mb-[2rem] text-center mt-[3rem] w-1/3 h-[2rem] rounded-lg ${
                        isValid && dirty ?  "bg-[#f44f4f] ":"bg-[#e6e3e3] text-[#888484] cursor-not-allowed" 
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
