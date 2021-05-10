import React from "react";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2>Add Admin</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" name="email" placeholder="Add Email Address" className="ps-2 "/>
          <input type="submit" value="ADD" className="ms-1"/>
        </form>

        <div className="bg-light mt-5">
            <h3>Admin List</h3>

  
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
