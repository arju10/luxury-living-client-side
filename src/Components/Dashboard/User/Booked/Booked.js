import React from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const Booked = () => {
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
            <Sidebar/>
            <div className="content">
      <h3 className = "mt-2">Book</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div style = {{width:"550px"}}>
          
        <input type = "text" className="form-control mt-3" placeholder ="Your Name" />
          <input type = "email" className="form-control mt-2" placeholder = "Email Address"/>
          <input type = "text" className="form-control mt-2" placeholder = "Service"/>
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <h5 className = "mt-3">Pay with</h5>
        {/* Payment Section */}
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="creditCard" value="option1"/>
  <label class="form-check-label" for="creditCard">Credit Card</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="paypal" value="option2"/>
  <label class="form-check-label" for="paypal">Paypal</label><br />
</div>
<div style = {{width:"550px"}}>
<input type = "number" className="form-control mt-2" placeholder = "Card Number"/>
<div className="d-flex flex-wrap">
<input type = "date" className="form-control mt-2" placeholder = "MM/YY" style = {{width:"270px"}}/>
<input type = "number" className="form-control mt-2 ms-2" placeholder = "CVC" style = {{width:"270px"}}/>
</div>

</div>
<label >Your service charge will be charged $1000</label>
          <input type="submit"  value = "Pay"className = "mt-2 btn-secondary rounded ms-5 pt-2 pb-2 " style = {{width:"200px"}}/>
        </form>
      </div>
        </div>
    );
};

export default Booked;