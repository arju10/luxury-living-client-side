import React from 'react';

const ServiceCard = ({service}) => {
    
    return (
    
        <div className="col">
          <div className="card h-100 text-center shadow">
            <img src={service.serviceIcon} className="card-img-top mx-auto mt-2" alt="..." style={{width:"80px"}}/>
            <div className="card-body">
              <h5 className="card-title">{service.serviceName}</h5>
              <h4>${service.price}</h4>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
          </div>
     
        
    );
};

export default ServiceCard;