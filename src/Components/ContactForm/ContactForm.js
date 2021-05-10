import React from "react";

const ContactForm = () => {
  return (
    <div className="container mb-5 ">
      <div className="text-center">
        <p>Contact</p>
        <h3>
          Let us handle your <br /> projects,professionaly
        </h3>
      </div>

   <div  className = "text-center">
   <div class="row ">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>

<div class="row gap-3 mt-4">
  <div class="col">
    <input type="email" class="form-control" placeholder="Email Address" aria-label="Email"/>
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Phone Number" aria-label="Phone Number"/>
  </div>
</div>
<div class="form-floating mt-4">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "200px"}}/>
  <label for="floatingTextarea2">Your Message</label>
</div>
   </div>

    </div>
  );
};

export default ContactForm;
