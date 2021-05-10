import React from "react";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="card-group mb-5 ms-auto">
      <div className="card ">
        <div classNameName="d-flex flex-wrap">
          <img
            src={testimonial.image}
            className="card-img-top ms-3 mt-3 "
            alt="..."
            style={{ width: "50px" }}
          />
          <h5 className="card-title mt-4 ms-3">{testimonial.companyName}</h5>
        </div>

        <div className="card-body">
          <p className="card-text">{testimonial.description}</p>
          <p className="card-text">
            <small className="text-muted">{testimonial.start}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
