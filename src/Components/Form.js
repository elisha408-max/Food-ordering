import React from "react";
import {Button} from 'react-bootstrap'
const Form = () => {
  return (
    <>
      <form>
        <h5 className="fw-bold"> Enter Delivery Information</h5>

        <div className="mb-3 mt-3">
          <label for="exampleInputName" className="form-label">
          <span className='text-danger fs-5'>* </span> Receiver's Name
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputName"
            placeholder="Receiver's Name"
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputPhone" className="form-label">
          <span className='text-danger fs-5'>* </span> Receiver's Mobile Number
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Example: +977 9841000000"
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputNote" className="form-label">
          <span className='text-danger fs-5'>* </span>Note
          </label>
          {/* <input
            type="password"
            className="form-control"
            id="exampleInputNote"
            placeholder="Note"
          /> */}
          <textarea
            data-v-643983bd=""
            placeholder="Note"
            className="ant-input form-control"
            data-__meta="[object Object]"
            data-__field="[object Object]"
            id="exampleInputNote"
          ></textarea>
        </div>
        <div className="mb-3 ">
          <label for="exampleInputLocation" className="form-label">
          <span className='text-danger fs-5'>* </span>Delivery Location
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputLocation"
            placeholder="Delivery Location"
          />
         <Button variant="success" className='mt-4'>CONFIRM DETAILS</Button>{' '}
        </div>
      </form>
    </>
  );
};

export default Form;
