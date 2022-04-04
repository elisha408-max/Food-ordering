import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("This is required"),
    phone: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10)
      .max(10),
    note: Yup.string().required("This is required"),
    details: Yup.string().required("This is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      note: "",
      details: "",
    },
    onSubmit: (values, resetForm) => {
      console.log(values, "values");
      formik.resetForm();
    },
    validationSchema,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h5 className="fw-bold"> Enter Delivery Information</h5>
        <div className="mb-3 mt-3">
          <label for="name" className="form-label">
            <span className="text-danger fs-5">* </span> Receiver's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Receiver's Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <span className="text-danger">{formik.errors.name}</span>
          ) : null}
        </div>

        <div className="mb-3 ">
          <label for="phone" className="form-label">
            <span className="text-danger fs-5">* </span> Receiver's Mobile
            Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Example: +977 9841000000"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <span className="text-danger">{formik.errors.phone}</span>
          ) : null}
        </div>

        <div className="mb-3 ">
          <label for="note" className="form-label">
            <span className="text-danger fs-5">* </span>Note
          </label>

          <textarea
            data-v-643983bd=""
            placeholder="Note"
            className="ant-input form-control"
            data-__meta="[object Object]"
            data-__field="[object Object]"
            id="note"
            name="note"
            onChange={formik.handleChange}
            value={formik.values.note}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.note && formik.touched.note ? (
            <span className="text-danger">{formik.errors.note}</span>
          ) : null}
        </div>
        <div className="mb-3 ">
          <label for="details" className="form-label">
            <span className="text-danger fs-5">* </span>Delivery Location
          </label>
          <input
            type="text"
            className="form-control"
            id="details"
            name="details"
            placeholder="Delivery Location"
            onChange={formik.handleChange}
            value={formik.values.details}
            onBlur={formik.handleBlur}
          />
          {formik.errors.details && formik.touched.details ? (
            <span className="text-danger">{formik.errors.details}</span>
          ) : null}
        </div>

        <Button type="submit" variant="success" className="mt-2">
          CONFIRM DETAILS
        </Button>
      </form>
    </>
  );
};

export default Form;
