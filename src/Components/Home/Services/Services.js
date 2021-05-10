import React from 'react';
import service1 from '../../../Image_Icon/Icon/apartment 1.png';
import service2 from '../../../Image_Icon/Icon/affordable 1.png';
import service3 from '../../../Image_Icon/Icon/lessee 1.png';
import ServiceCard from './ServiceCard';
const Services = () => {
    const servicesData = [
        {
            id : 101,
            serviceName:"Office Interior Design",
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aut!",
            price : 299,
            serviceIcon : service1
        },
        {
            id : 102,
            serviceName:"Showroom Design",
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aut!",
            price : 399,
            serviceIcon : service2
        },
        {
            id : 103,
            serviceName:" Residential/Home",
            description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aut!",
            price : 499,
            serviceIcon : service3
        }
    ];
    return (
        
        <div className = "container mt-5 mb-5">
            <h3 className = "text-center mt-5">Services</h3>
            <h2 className = "text-center">We're an agency tailored to all <br/>clients' needs that always delivers</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
            {
                servicesData.map(service=><ServiceCard service={service}></ServiceCard>)
            }
        </div>
      {/* <div className = "d-flex flex-wrap me-auto mt-3 justify-content-center align-item-center ms-auto">
      <button className = "me-auto">Explore More</button>
      </div> */}
    
        </div>
    );
};

export default Services;
