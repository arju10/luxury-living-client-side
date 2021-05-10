import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../../Shared/Sidebar/Sidebar";

const Review = () => {
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
      <h3>Review</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div style = {{width:"550px"}}>
          
        <input className="form-control mt-3" placeholder ="Your Name" />
          <input className="form-control mt-1" placeholder = "Company Name ,Desingnation"/>

          <textarea className="form-control mt-1" id="exampleFormControlTextarea1" rows="3" placeholder = "Description"/>
          
    
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" className = "mt-1 btn-secondary rounded"/>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Review;