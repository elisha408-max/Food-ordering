import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    Email: Yup.string().required(),
    Password: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    onSubmit: (values, resetForm) => {
      formik.resetForm();
      console.log(values, "values");
      alert(JSON.stringify(values, null, 2));
      // navigate("/");
    },
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login">
        <div className=" p-5  container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-md-6 first">
                    <div className="linkedin">
                      <span className="no-gutters text-dark font-weight-bold">
                        Khaanp
                      </span>
                      <span className="in">in</span>
                    </div>
                  </div>
                  <div className="col-md-6 second pl-4 pr-4">
                    <h4 className="welcome text-danger">
                      Welcome to <img src={logo} className="img-fluid" />
                    </h4>
                    <div className="form-group">
                      {" "}
                      <input
                        type="email number"
                        name="email number"
                        placeholder="Email or Phone"
                        className="form-control"
                        id='Email'
                        name='Email'
                      />{" "}
                      {formik.errors.Email && formik.touched.Email ? (
                        <span className="text-danger">
                          {formik.errors.Email}
                        </span>
                      ) : null}
                      <input
                        type="Password"
                        name="Password"
                        placeholder="Password"
                        className="form-control"
                        id='Password'
                        name='Password'
                      />
                      {formik.errors.Password && formik.touched.Password ? (
                        <span className="text-danger">
                          {formik.errors.Password}
                        </span>
                      ) : null}
                      <div className="forgot">
                        <span>Forgot Password?</span>
                      </div>
                    </div>
                    <div className="space">
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-primary btn1"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Login
                      </button>{" "}
                      <button type="submit" className="btn btn-primary btn2">
                        Sign Up
                      </button>{" "}
                    </div>
                    <div className="row">
                      <div className="col-sm-4 under">
                        {" "}
                        <span>Copyright Policy</span>
                        <p>User Agreement</p>
                      </div>
                      <div className="col-sm-3 under">
                        {" "}
                        <span>Privacy Policy</span>
                        <p>Cookie Policy</p>
                      </div>
                      <div className="col-sm-4 under">
                        {" "}
                        <span>Send Feedback</span>
                        <p>Community Guidelines</p>
                      </div>
                      <div className="col-md-1	">
                        <p> </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-2">
                  <p className="lower">Linkedin &#169 2020</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
