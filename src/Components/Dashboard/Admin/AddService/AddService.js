import React from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h3>Add Service</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
          <div
            style={{ width: "1050px", height: "450px" }}
            className="bg-white rounded"
          >
            <div className="d-flex flex-wrap ">
              <div className="ms-5 mt-3">
                <label>Service Title</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="form-control"
                  style={{ width: "400px" }}
                />
              </div>
              <div className="ms-5 mt-3">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  placeholder="Image"
                  className="form-control"
                />
              </div>
            </div>
            <div className="ms-5 mt-3">
                <label htmlFor="description">Description</label><br />
                <textarea type="text" name="description" id="description"  placeholder="Description" className="form-control" style={{height:"250px",width:"400px"}}/>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input type="submit" className="ms-5 btn-dark rounded" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
